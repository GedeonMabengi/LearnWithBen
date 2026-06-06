<?php

namespace Database\Factories;

use App\Models\Token;
use App\Models\TokenType;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Token>
 */
class TokenFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $tokenType = TokenType::factory()->create();

        return [
            'token_type_id' => $tokenType->id,
            'owner_id' => null,
            'code' => \Illuminate\Support\Str::uuid(),
            'remaining_uses' => $tokenType->max_uses,
            'expires_at' => $tokenType->valid_until,
            'status' => 'active',
        ];
    }

    /**
     * Indicate that the token is owned by a specific user.
     */
    public function ownedBy(User $user): static
    {
        return $this->state(fn (array $attributes) => [
            'owner_id' => $user->id,
        ]);
    }

    /**
     * Indicate that the token is used.
     */
    public function used(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'used',
            'remaining_uses' => 0,
        ]);
    }

    /**
     * Indicate that the token is expired.
     */
    public function expired(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'expired',
            'expires_at' => now()->subDay(),
        ]);
    }
}
