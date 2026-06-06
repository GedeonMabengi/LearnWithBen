<?php

namespace App\Policies;

use App\Models\Token;
use App\Models\User;

class TokenPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true; // teacher voit ses tokens, student voit les siens (filtré dans le contrôleur)
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Token $token): bool
    {
        if ($user->role === 'teacher') {
            return $token->tokenType->teacher_id === $user->id;
        }

        return $token->owner_id === $user->id;
    }

    /**
     * Determine whether the user can assign the token (teacher).
     */
    public function assign(User $user, Token $token): bool
    {
        return $user->role === 'teacher' && $token->tokenType->teacher_id === $user->id;
    }

    /**
     * Determine whether the user can revoke the token (teacher).
     */
    public function revoke(User $user, Token $token): bool
    {
        return $user->role === 'teacher' && $token->tokenType->teacher_id === $user->id;
    }

    /**
     * Determine whether the user can generate QR code for the token.
     */
    public function qrCode(User $user, Token $token): bool
    {
        return $this->view($user, $token);
    }

    /**
     * Determine whether the user can transfer the token (student).
     */
    public function transfer(User $user, Token $token): bool
    {
        if ($user->role !== 'student') {
            return false;
        }
        if ($token->owner_id !== $user->id) {
            return false;
        }
        if (!$token->tokenType->is_transferable) {
            return false;
        }
        if ($token->status !== 'active') {
            return false;
        }
        return true;
    }

    /**
     * Determine whether the user can redeem/claim a token.
     */
    public function redeem(User $user, Token $token): bool
    {
        return $user->role === 'student' && $token->owner_id === null && $token->status === 'active';
    }

    /**
     * Determine whether the user can purchase a token type (pour le checkout).
     */
    public function purchase(User $user): bool
    {
        return $user->role === 'student';
    }
}
