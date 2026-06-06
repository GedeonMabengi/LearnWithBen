<?php

namespace App\Policies;

use App\Models\Course;
use App\Models\User;

class CoursePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        // Les deux rôles peuvent voir la liste (filtrée selon leur contexte)
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Course $course): bool
    {
        // Teacher : peut toujours voir ses propres cours
        if ($user->role === 'teacher') {
            return $course->teacher_id === $user->id;
        }

        // Student : dépend de la visibilité
        return $this->isVisibleToStudent($course, $user);
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->role === 'teacher';
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Course $course): bool
    {
        return $user->role === 'teacher' && $course->teacher_id === $user->id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Course $course): bool
    {
        return $user->role === 'teacher' && $course->teacher_id === $user->id;
    }

    /**
     * Determine whether the user can enroll in the course.
     */
    public function enroll(User $user, Course $course): bool
    {
        if ($user->role !== 'student') {
            return false;
        }

        // Check visibility and capacity
        if (!$this->isVisibleToStudent($course, $user)) {
            return false;
        }

        // Check if course is full
        if ($course->max_participants !== null &&
            $course->enrollments()->where('status', 'registered')->count() >= $course->max_participants) {
            return false;
        }

        // Check if already enrolled
        if ($course->enrollments()->where('student_id', $user->id)->where('status', 'registered')->exists()) {
            return false;
        }

        return true;
    }

    /**
     * Determine whether the user can invite students.
     */
    public function invite(User $user, Course $course): bool
    {
        return $user->role === 'teacher' && $course->teacher_id === $user->id
            && $course->visibility === 'invite_only';
    }

    /**
     * Determine whether the user can view participants.
     */
    public function viewParticipants(User $user, Course $course): bool
    {
        return $user->role === 'teacher' && $course->teacher_id === $user->id;
    }

    /**
     * Helper : vérifie si le cours est visible par un étudiant donné.
     */
    protected function isVisibleToStudent(Course $course, User $student): bool
    {
        return match ($course->visibility) {
            'public' => true,
            'private' => false, // accessible uniquement via lien direct, à gérer dans le contrôleur
            'invite_only' => $course->invitations()->where('student_id', $student->id)->exists(),
            'token_gated' => $student->tokens()
                ->where('token_type_id', $course->token_type_id)
                ->where('status', 'active')
                ->where(function ($query) {
                    $query->whereNull('expires_at')
                        ->orWhere('expires_at', '>', now());
                })
                ->exists(),
            default => false,
        };
    }
}
