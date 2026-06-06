<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Enrollment;
use App\Models\Token;
use App\Models\TokenType;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $teacher = User::factory()->teacher()->create([
            'name' => 'Professor Smith',
            'email' => 'teacher@englishapp.com',
            'password' => bcrypt('password'),
            'timezone' => 'Europe/Paris',
        ]);

        $students = User::factory()->student()->count(20)->create();

        $singleTokenType = TokenType::factory()->create([
            'teacher_id' => $teacher->id,
            'name' => 'Single Course Pass',
            'type' => 'single',
            'price' => 1500,
            'max_uses' => 1,
        ]);

        $packTokenType = TokenType::factory()->create([
            'teacher_id' => $teacher->id,
            'name' => 'Pack 5 Courses',
            'type' => 'pack',
            'price' => 6000,
            'max_uses' => 5,
        ]);

        $seriesTokenType = TokenType::factory()->create([
            'teacher_id' => $teacher->id,
            'name' => 'Conversation Series',
            'type' => 'series',
            'price' => 10000,
            'max_uses' => 10,
        ]);

        $subscriptionTokenType = TokenType::factory()->create([
            'teacher_id' => $teacher->id,
            'name' => 'Monthly Pass',
            'type' => 'subscription',
            'price' => 30000,
            'max_uses' => null,
            'valid_from' => now(),
            'valid_until' => now()->addMonth(),
        ]);

        foreach ($students->take(10) as $student) {
            Token::create([
                'token_type_id' => $singleTokenType->id,
                'owner_id' => $student->id,
                'code' => \Illuminate\Support\Str::uuid(),
                'remaining_uses' => $singleTokenType->max_uses,
                'expires_at' => $singleTokenType->valid_until,
                'status' => 'active',
            ]);

            Token::create([
                'token_type_id' => $packTokenType->id,
                'owner_id' => $student->id,
                'code' => \Illuminate\Support\Str::uuid(),
                'remaining_uses' => $packTokenType->max_uses,
                'expires_at' => $packTokenType->valid_until,
                'status' => 'active',
            ]);
        }

        foreach ($students->take(5) as $student) {
            Token::create([
                'token_type_id' => $seriesTokenType->id,
                'owner_id' => $student->id,
                'code' => \Illuminate\Support\Str::uuid(),
                'remaining_uses' => $seriesTokenType->max_uses,
                'expires_at' => $seriesTokenType->valid_until,
                'status' => 'active',
            ]);
        }

        Token::create([
            'token_type_id' => $singleTokenType->id,
            'owner_id' => null,
            'code' => 'FREE-TICKET-2025',
            'remaining_uses' => $singleTokenType->max_uses,
            'expires_at' => now()->addYear(),
            'status' => 'active',
        ]);

        $publicCourse = Course::factory()->taughtBy($teacher)->create([
            'title' => 'English Pronunciation Basics',
            'visibility' => 'public',
            'start_time' => now()->addDays(2)->setHour(14)->setMinute(0),
            'end_time' => now()->addDays(2)->setHour(15)->setMinute(0),
        ]);

        $tokenGatedCourse = Course::factory()->taughtBy($teacher)->create([
            'title' => 'Advanced Conversation',
            'visibility' => 'token_gated',
            'token_type_id' => $seriesTokenType->id,
            'start_time' => now()->addDays(3)->setHour(10)->setMinute(0),
            'end_time' => now()->addDays(3)->setHour(11)->setMinute(30),
        ]);

        $inviteOnlyCourse = Course::factory()->taughtBy($teacher)->create([
            'title' => 'Business English Workshop',
            'visibility' => 'invite_only',
            'start_time' => now()->addDays(4)->setHour(16)->setMinute(0),
            'end_time' => now()->addDays(4)->setHour(18)->setMinute(0),
        ]);

        $privateCourse = Course::factory()->private()->taughtBy($teacher)->create([
            'title' => '1-on-1 Coaching',
            'visibility' => 'private',
            'access_code' => 'SECRET123',
            'start_time' => now()->addDays(5)->setHour(9)->setMinute(0),
            'end_time' => now()->addDays(5)->setHour(10)->setMinute(0),
        ]);

        foreach ($students->take(10) as $student) {
            Enrollment::create([
                'course_id' => $publicCourse->id,
                'student_id' => $student->id,
                'status' => 'registered',
            ]);
        }

        $seriesTokenOwners = Token::where('token_type_id', $seriesTokenType->id)
            ->where('status', 'active')
            ->whereNotNull('owner_id')
            ->get();

        foreach ($seriesTokenOwners->take(5) as $token) {
            Enrollment::create([
                'course_id' => $tokenGatedCourse->id,
                'student_id' => $token->owner_id,
                'token_id' => $token->id,
                'status' => 'registered',
            ]);
        }

        $invitedStudents = $students->skip(10)->take(5);
        foreach ($invitedStudents as $student) {
            \App\Models\CourseInvitation::create([
                'course_id' => $inviteOnlyCourse->id,
                'student_id' => $student->id,
            ]);
            Enrollment::create([
                'course_id' => $inviteOnlyCourse->id,
                'student_id' => $student->id,
                'status' => 'registered',
            ]);
        }

        $privateStudent = $students->first();
        Enrollment::create([
            'course_id' => $privateCourse->id,
            'student_id' => $privateStudent->id,
            'status' => 'registered',
        ]);
    }
}
