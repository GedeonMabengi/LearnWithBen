<?php

namespace App\Policies;

use App\Models\TeacherNote;
use App\Models\User;

class TeacherNotePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        // Teacher : peut voir ses propres notes, filtré par étudiant
        // Student : ne voit pas les notes
        return $user->role === 'teacher';
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, TeacherNote $note): bool
    {
        return $user->role === 'teacher' && $note->teacher_id === $user->id;
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
    public function update(User $user, TeacherNote $note): bool
    {
        return $user->role === 'teacher' && $note->teacher_id === $user->id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, TeacherNote $note): bool
    {
        return $user->role === 'teacher' && $note->teacher_id === $user->id;
    }
}
