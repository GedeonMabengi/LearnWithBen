<?php

namespace App\Policies;

use App\Models\Enrollment;
use App\Models\User;

class EnrollmentPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        // teacher : voit toutes les inscriptions pour ses cours
        // student : voit ses propres inscriptions
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Enrollment $enrollment): bool
    {
        if ($user->role === 'teacher') {
            return $enrollment->course->teacher_id === $user->id;
        }

        return $enrollment->student_id === $user->id;
    }

    /**
     * Determine whether the user can mark attendance.
     */
    public function markAttended(User $user, Enrollment $enrollment): bool
    {
        return $user->role === 'teacher' && $enrollment->course->teacher_id === $user->id;
    }

    /**
     * Determine whether the user can mark no-show.
     */
    public function markNoShow(User $user, Enrollment $enrollment): bool
    {
        return $user->role === 'teacher' && $enrollment->course->teacher_id === $user->id;
    }

    /**
     * Determine whether the user can delete/cancel the enrollment.
     */
    public function delete(User $user, Enrollment $enrollment): bool
    {
        // Teacher can remove any enrollment from his courses
        if ($user->role === 'teacher' && $enrollment->course->teacher_id === $user->id) {
            return true;
        }

        // Student can cancel his own enrollment if still registered
        if ($user->role === 'student' && $enrollment->student_id === $user->id && $enrollment->status === 'registered') {
            return true;
        }

        return false;
    }
}
