<?php

namespace App\Policies;

use App\Models\ResourceModel;
use App\Models\User;

class ResourcePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true; // filtré dans le contrôleur
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, ResourceModel $resource): bool
    {
        if ($user->role === 'teacher') {
            return $resource->teacher_id === $user->id;
        }

        // Étudiant : selon la visibilité
        return $this->isVisibleToStudent($resource, $user);
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
    public function update(User $user, ResourceModel $resource): bool
    {
        return $user->role === 'teacher' && $resource->teacher_id === $user->id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, ResourceModel $resource): bool
    {
        return $user->role === 'teacher' && $resource->teacher_id === $user->id;
    }

    /**
     * Determine whether the user can grant access (teacher only, invite_only resources).
     */
    public function grantAccess(User $user, ResourceModel $resource): bool
    {
        return $user->role === 'teacher' && $resource->teacher_id === $user->id && $resource->visibility === 'invite_only';
    }

    /**
     * Determine whether the user can download the resource file.
     */
    public function download(User $user, ResourceModel $resource): bool
    {
        return $this->view($user, $resource);
    }

    /**
     * Helper : visibilité pour un étudiant.
     */
    protected function isVisibleToStudent(ResourceModel $resource, User $student): bool
    {
        return match ($resource->visibility) {
            'public' => true,
            'private' => false, // accès via lien dans le contrôleur
            'invite_only' => $resource->accesses()->where('student_id', $student->id)->exists(),
            'token_gated' => $student->tokens()
                ->where('token_type_id', $resource->token_type_id)
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
