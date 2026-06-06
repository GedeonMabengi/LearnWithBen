<?php

namespace App\Policies;

use App\Models\Skill;
use App\Models\User;

class SkillPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        // Teacher : toutes ses compétences, student : toutes les compétences (pour voir progression)
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Skill $skill): bool
    {
        if ($user->role === 'teacher') {
            return $skill->teacher_id === $user->id;
        }
        // Les étudiants peuvent voir toutes les compétences publiques du professeur
        return true;
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
    public function update(User $user, Skill $skill): bool
    {
        return $user->role === 'teacher' && $skill->teacher_id === $user->id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Skill $skill): bool
    {
        return $user->role === 'teacher' && $skill->teacher_id === $user->id;
    }

    /**
     * Determine whether the user can validate a skill for a student.
     */
    public function validateStudent(User $user, Skill $skill): bool
    {
        return $user->role === 'teacher' && $skill->teacher_id === $user->id;
    }
}
