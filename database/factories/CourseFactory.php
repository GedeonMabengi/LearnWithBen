<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\TokenType;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $start = $this->faker->dateTimeBetween('+1 day', '+2 weeks');
        $end = (clone $start)->modify('+1 hour');

        return [
            'teacher_id' => User::factory()->teacher(),
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(),
            'start_time' => $start,
            'end_time' => $end,
            'timezone' => 'UTC',
            'max_participants' => $this->faker->numberBetween(5, 20),
            'visibility' => $this->faker->randomElement(['public', 'token_gated', 'invite_only']),
            'token_type_id' => null,
            'access_code' => null,
            'is_recurring' => false,
            'parent_course_id' => null,
        ];
    }

    /**
     * Indicate a token-gated course.
     */
    public function tokenGated(): static
    {
        return $this->state(fn (array $attributes) => [
            'visibility' => 'token_gated',
            'token_type_id' => TokenType::factory()->create()->id,
        ]);
    }

    /**
     * Indicate a private course with access code.
     */
    public function private(): static
    {
        return $this->state(fn (array $attributes) => [
            'visibility' => 'private',
            'access_code' => \Illuminate\Support\Str::uuid(),
        ]);
    }

    /**
     * Indicate an invite-only course.
     */
    public function inviteOnly(): static
    {
        return $this->state(fn (array $attributes) => [
            'visibility' => 'invite_only',
        ]);
    }

    /**
     * Set the teacher.
     */
    public function taughtBy(User $teacher): static
    {
        return $this->state(fn (array $attributes) => [
            'teacher_id' => $teacher->id,
        ]);
    }
}
