<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\Enrollment;
use App\Models\Token;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Enrollment>
 */
class EnrollmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'course_id' => Course::factory(),
            'student_id' => User::factory()->student(),
            'token_id' => null,
            'status' => 'registered',
            'registered_at' => now(),
            'cancelled_at' => null,
        ];
    }

    /**
     * Indicate that the enrollment used a token.
     */
    public function withToken(Token $token): static
    {
        return $this->state(fn (array $attributes) => [
            'token_id' => $token->id,
        ]);
    }

    /**
     * Mark enrollment as attended.
     */
    public function attended(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'attended',
        ]);
    }

    /**
     * Mark enrollment as cancelled.
     */
    public function cancelled(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'cancelled',
            'cancelled_at' => now(),
        ]);
    }

    /**
     * Mark enrollment as no-show.
     */
    public function noShow(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'no_show',
        ]);
    }
}
