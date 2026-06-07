<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\CourseInvitation;
use App\Models\Enrollment;
use App\Models\Recording;
use App\Models\ResourceAccess;
use App\Models\ResourceModel;
use App\Models\Skill;
use App\Models\StudentSkill;
use App\Models\TeacherNote;
use App\Models\Token;
use App\Models\TokenTransfer;
use App\Models\TokenType;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $teachers = collect([
            $this->user('teacher.alice@learnwithben.test', 'Alice Martin', 'teacher', 'Europe/Paris'),
            $this->user('teacher.ben@learnwithben.test', 'Ben Carter', 'teacher', 'Africa/Lubumbashi'),
            $this->user('teacher.sofia@learnwithben.test', 'Sofia Nguyen', 'teacher', 'America/New_York'),
        ]);

        $students = collect([
            $this->user('student.anna@learnwithben.test', 'Anna Dupont', 'student', 'Europe/Paris'),
            $this->user('student.jules@learnwithben.test', 'Jules Mbala', 'student', 'Africa/Lubumbashi'),
            $this->user('student.maya@learnwithben.test', 'Maya Johnson', 'student', 'America/New_York'),
            $this->user('student.liam@learnwithben.test', 'Liam Brown', 'student', 'Europe/London'),
            $this->user('student.nora@learnwithben.test', 'Nora Diallo', 'student', 'Africa/Lagos'),
            $this->user('student.ken@learnwithben.test', 'Ken Tanaka', 'student', 'Asia/Tokyo'),
        ]);

        $tokenTypes = collect([
            $this->tokenType($teachers[0], 'Single Course Pass', 'single', 1, 1500, true),
            $this->tokenType($teachers[1], 'Pack 5 Courses', 'pack', 5, 6000, true),
            $this->tokenType($teachers[2], 'Monthly Conversation Pass', 'subscription', null, 30000, false),
        ]);

        $tokens = collect([
            $this->token($tokenTypes[0], $students[0], 'LWB-SINGLE-001', 1),
            $this->token($tokenTypes[0], $students[1], 'LWB-SINGLE-002', 1),
            $this->token($tokenTypes[0], $students[2], 'LWB-SINGLE-003', 1),
            $this->token($tokenTypes[1], $students[3], 'LWB-PACK-001', 5),
            $this->token($tokenTypes[1], $students[4], 'LWB-PACK-002', 5),
            $this->token($tokenTypes[1], $students[5], 'LWB-PACK-003', 5),
            $this->token($tokenTypes[2], $students[0], 'LWB-MONTH-001', null),
            $this->token($tokenTypes[2], $students[1], 'LWB-MONTH-002', null),
            $this->token($tokenTypes[2], $students[2], 'LWB-MONTH-003', null),
        ]);

        $courses = collect([
            $this->course($teachers[0], $tokenTypes[0], 'English Pronunciation Basics', 'public', 2, 'LWB-COURSE-001'),
            $this->course($teachers[1], $tokenTypes[1], 'Business English Workshop', 'invite_only', 4, 'LWB-COURSE-002'),
            $this->course($teachers[2], $tokenTypes[2], 'Advanced Conversation Club', 'token_gated', 6, 'LWB-COURSE-003'),
        ]);

        foreach ([0, 1, 2] as $index) {
            CourseInvitation::updateOrCreate([
                'course_id' => $courses[1]->id,
                'student_id' => $students[$index]->id,
            ]);

            Enrollment::updateOrCreate([
                'course_id' => $courses[$index]->id,
                'student_id' => $students[$index]->id,
            ], [
                'token_id' => $tokens[$index]->id,
                'status' => ['registered', 'attended', 'no_show'][$index],
                'registered_at' => now()->subDays(5 - $index),
                'cancelled_at' => null,
            ]);
        }

        $resources = collect([
            $this->resource($teachers[0], $tokenTypes[0], 'Pronunciation PDF Pack', 'public', 'resources/pronunciation-pack.pdf', 'LWB-RES-001'),
            $this->resource($teachers[1], $tokenTypes[1], 'Business Vocabulary Sheet', 'invite_only', 'resources/business-vocabulary.pdf', 'LWB-RES-002'),
            $this->resource($teachers[2], $tokenTypes[2], 'Conversation Prompts Audio', 'token_gated', 'resources/conversation-prompts.mp3', 'LWB-RES-003'),
        ]);

        foreach ([0, 1, 2] as $index) {
            ResourceAccess::updateOrCreate([
                'resource_id' => $resources[$index]->id,
                'student_id' => $students[$index]->id,
            ]);

            Recording::updateOrCreate([
                'course_id' => $courses[$index]->id,
                'file_url' => "https://cdn.learnwithben.test/recordings/course-{$courses[$index]->id}.mp4",
            ], [
                'duration' => [3600, 5400, 4200][$index],
            ]);
        }

        $skills = collect([
            $this->skill($teachers[0], 'Clear Pronunciation'),
            $this->skill($teachers[1], 'Business Presentation'),
            $this->skill($teachers[2], 'Conversational Fluency'),
        ]);

        foreach ([0, 1, 2] as $index) {
            StudentSkill::updateOrCreate([
                'student_id' => $students[$index]->id,
                'skill_id' => $skills[$index]->id,
            ], [
                'validated_by' => $teachers[$index]->id,
                'validated_at' => now()->subDays($index + 1),
            ]);

            TeacherNote::updateOrCreate([
                'teacher_id' => $teachers[$index]->id,
                'student_id' => $students[$index]->id,
                'course_id' => $courses[$index]->id,
            ], [
                'note' => [
                    'Anna is improving vowel sounds and rhythm.',
                    'Jules should prepare more examples for meetings.',
                    'Maya is ready for longer free-speaking activities.',
                ][$index],
            ]);

            TokenTransfer::updateOrCreate([
                'token_id' => $tokens[$index + 3]->id,
                'from_student_id' => $students[$index + 3]->id,
                'to_student_id' => $students[$index]->id,
            ], [
                'transferred_at' => now()->subDays($index + 2),
            ]);
        }

        $this->seedLaravelSupportTables($students);
    }

    private function user(string $email, string $name, string $role, string $timezone): User
    {
        $user = User::firstOrNew(['email' => $email]);

        $user->forceFill([
            'name' => $name,
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'role' => $role,
            'timezone' => $timezone,
            'remember_token' => Str::random(10),
        ]);

        $user->save();

        return $user;
    }

    private function tokenType(User $teacher, string $name, string $type, ?int $maxUses, int $price, bool $transferable): TokenType
    {
        return TokenType::updateOrCreate([
            'teacher_id' => $teacher->id,
            'name' => $name,
        ], [
            'type' => $type,
            'validity_type' => $maxUses === null ? 'date_range' : 'both',
            'valid_from' => now()->subDay(),
            'valid_until' => now()->addMonth(),
            'max_uses' => $maxUses,
            'price' => $price,
            'currency' => 'EUR',
            'is_transferable' => $transferable,
        ]);
    }

    private function token(TokenType $tokenType, User $owner, string $code, ?int $remainingUses): Token
    {
        return Token::updateOrCreate(['code' => $code], [
            'token_type_id' => $tokenType->id,
            'owner_id' => $owner->id,
            'remaining_uses' => $remainingUses,
            'expires_at' => now()->addMonth(),
            'status' => 'active',
        ]);
    }

    private function course(User $teacher, TokenType $tokenType, string $title, string $visibility, int $daysFromNow, string $accessCode): Course
    {
        return Course::updateOrCreate([
            'teacher_id' => $teacher->id,
            'title' => $title,
        ], [
            'description' => "Test course for {$title}.",
            'start_time' => now()->addDays($daysFromNow)->setTime(14, 0),
            'end_time' => now()->addDays($daysFromNow)->setTime(15, 30),
            'timezone' => $teacher->timezone,
            'max_participants' => 12,
            'visibility' => $visibility,
            'token_type_id' => $tokenType->id,
            'access_code' => $accessCode,
            'is_recurring' => false,
            'parent_course_id' => null,
        ]);
    }

    private function resource(User $teacher, TokenType $tokenType, string $title, string $visibility, string $filePath, string $accessCode): ResourceModel
    {
        return ResourceModel::updateOrCreate([
            'teacher_id' => $teacher->id,
            'title' => $title,
        ], [
            'description' => "Test resource for {$title}.",
            'file_path' => $filePath,
            'visibility' => $visibility,
            'token_type_id' => $tokenType->id,
            'access_code' => $accessCode,
        ]);
    }

    private function skill(User $teacher, string $name): Skill
    {
        return Skill::updateOrCreate([
            'teacher_id' => $teacher->id,
            'name' => $name,
        ], [
            'description' => "Validation skill for {$name}.",
        ]);
    }

    private function seedLaravelSupportTables($students): void
    {
        foreach ($students->take(3)->values() as $index => $student) {
            DB::table('personal_access_tokens')->updateOrInsert([
                'token' => hash('sha256', "seeded-personal-access-token-{$index}"),
            ], [
                'tokenable_type' => User::class,
                'tokenable_id' => $student->id,
                'name' => "Seeded API Token {$index}",
                'abilities' => json_encode(['*']),
                'last_used_at' => now()->subDays($index),
                'expires_at' => now()->addMonth(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            DB::table('passkeys')->updateOrInsert([
                'credential_id' => "test-passkey-{$index}",
            ], [
                'user_id' => $student->id,
                'name' => "Test Passkey {$index}",
                'credential' => json_encode(['id' => "test-passkey-{$index}", 'type' => 'public-key']),
                'last_used_at' => now()->subDays($index),
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            DB::table('password_reset_tokens')->updateOrInsert([
                'email' => $student->email,
            ], [
                'token' => Hash::make("reset-token-{$index}"),
                'created_at' => now()->subMinutes($index + 1),
            ]);

            DB::table('sessions')->updateOrInsert([
                'id' => "test-session-{$index}",
            ], [
                'user_id' => $student->id,
                'ip_address' => "127.0.0.{$index}",
                'user_agent' => 'LearnWithBen Seeder',
                'payload' => base64_encode("session-payload-{$index}"),
                'last_activity' => now()->timestamp,
            ]);

            DB::table('cache')->updateOrInsert([
                'key' => "test-cache-key-{$index}",
            ], [
                'value' => serialize("test-cache-value-{$index}"),
                'expiration' => now()->addHour()->timestamp,
            ]);

            DB::table('cache_locks')->updateOrInsert([
                'key' => "test-cache-lock-{$index}",
            ], [
                'owner' => "seeder-{$index}",
                'expiration' => now()->addMinutes(10)->timestamp,
            ]);

            DB::table('jobs')->updateOrInsert([
                'queue' => 'seeded',
                'created_at' => 1_700_000_000 + $index,
            ], [
                'payload' => json_encode(['job' => "SeededJob{$index}"]),
                'attempts' => 0,
                'reserved_at' => null,
                'available_at' => now()->timestamp,
            ]);

            DB::table('job_batches')->updateOrInsert([
                'id' => "seeded-batch-{$index}",
            ], [
                'name' => "Seeded Batch {$index}",
                'total_jobs' => 3,
                'pending_jobs' => 0,
                'failed_jobs' => 0,
                'failed_job_ids' => json_encode([]),
                'options' => json_encode(['source' => 'DatabaseSeeder']),
                'cancelled_at' => null,
                'created_at' => now()->timestamp,
                'finished_at' => now()->timestamp,
            ]);

            DB::table('failed_jobs')->updateOrInsert([
                'uuid' => "seeded-failed-job-{$index}",
            ], [
                'connection' => 'database',
                'queue' => 'seeded',
                'payload' => json_encode(['job' => "FailedSeededJob{$index}"]),
                'exception' => 'Seeded exception for UI testing.',
                'failed_at' => now()->subMinutes($index),
            ]);
        }
    }
}
