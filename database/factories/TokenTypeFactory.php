<?php

namespace Database\Factories;

use App\Models\TokenType;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TokenType>
 */
class TokenTypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = ['single', 'pack', 'series', 'subscription'];
        $type = $this->faker->randomElement($types);
        $validityType = $this->faker->randomElement(['date_range', 'usage_count', 'both']);

        return [
            'teacher_id' => User::factory()->teacher(),
            'name' => $this->faker->words(2, true),
            'type' => $type,
            'validity_type' => $validityType,
            'valid_from' => now(),
            'valid_until' => now()->addDays(30),
            'max_uses' => $type === 'single' ? 1 : $this->faker->numberBetween(2, 10),
            'price' => $this->faker->numberBetween(500, 5000),
            'currency' => 'EUR',
            'is_transferable' => $this->faker->boolean(30),
        ];
    }

    /**
     * Indicate a free token type.
     */
    public function free(): static
    {
        return $this->state(fn (array $attributes) => [
            'price' => 0,
        ]);
    }

    /**
     * Indicate a non-transferable token type.
     */
    public function notTransferable(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_transferable' => false,
        ]);
    }
}
