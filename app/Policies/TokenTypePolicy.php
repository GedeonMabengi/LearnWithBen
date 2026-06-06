<?php

namespace App\Policies;

use App\Models\TokenType;
use App\Models\User;

class TokenTypePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->role === 'teacher';
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, TokenType $tokenType): bool
    {
        return $user->role === 'teacher' && $tokenType->teacher_id === $user->id;
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
    public function update(User $user, TokenType $tokenType): bool
    {
        return $user->role === 'teacher' && $tokenType->teacher_id === $user->id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, TokenType $tokenType): bool
    {
        return $user->role === 'teacher' && $tokenType->teacher_id === $user->id;
    }

    /**
     * Determine whether the user can generate tokens from this type.
     */
    public function generateTokens(User $user, TokenType $tokenType): bool
    {
        return $user->role === 'teacher' && $tokenType->teacher_id === $user->id;
    }

    /**
     * Determine whether the user can view tokens of this type.
     */
    public function viewTokens(User $user, TokenType $tokenType): bool
    {
        return $user->role === 'teacher' && $tokenType->teacher_id === $user->id;
    }
}
