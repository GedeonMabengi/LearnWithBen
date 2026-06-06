<?php

namespace App\Policies;

use App\Models\Recording;
use App\Models\User;

class RecordingPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        // Teacher : voit tous ses enregistrements
        // Student : voit les enregistrements des cours où il a participé
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Recording $recording): bool
    {
        if ($user->role === 'teacher') {
            return $recording->course->teacher_id === $user->id;
        }

        // Student : vérifier qu'il a une enrollment "attended" pour ce cours
        return $recording->course->enrollments()
            ->where('student_id', $user->id)
            ->where('status', 'attended')
            ->exists();
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        // Seulement via webhook ou teacher, mais on autorise teacher
        return $user->role === 'teacher';
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Recording $recording): bool
    {
        return $user->role === 'teacher' && $recording->course->teacher_id === $user->id;
    }
}
