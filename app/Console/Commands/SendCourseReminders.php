<?php

namespace App\Console\Commands;

use App\Jobs\SendCourseReminderJob;
use App\Models\Enrollment;
use Illuminate\Console\Command;

class SendCourseReminders extends Command
{
    protected $signature = 'courses:remind';

    protected $description = 'Send course reminder notifications to students enrolled in upcoming courses.';

    public function handle(): int
    {
        $enrollments = Enrollment::with(['course', 'student'])
            ->where('status', 'registered')
            ->whereNull('cancelled_at')
            ->whereHas('course', function ($query) {
                $query->whereBetween('start_time', [now(), now()->addHour()]);
            })
            ->get();

        foreach ($enrollments as $enrollment) {
            SendCourseReminderJob::dispatch($enrollment);
        }

        $count = $enrollments->count();
        $this->info("Dispatched {$count} course reminder job(s).");

        return Command::SUCCESS;
    }
}
