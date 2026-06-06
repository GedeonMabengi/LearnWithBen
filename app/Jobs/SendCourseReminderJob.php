<?php

namespace App\Jobs;

use App\Models\Enrollment;
use App\Notifications\CourseReminder;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendCourseReminderJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public Enrollment $enrollment;

    public function __construct(Enrollment $enrollment)
    {
        $this->enrollment = $enrollment;
    }

    public function handle(): void
    {
        $this->enrollment->loadMissing(['student', 'course']);

        if ($this->enrollment->status !== 'registered' || $this->enrollment->cancelled_at !== null) {
            return;
        }

        $student = $this->enrollment->student;
        $course = $this->enrollment->course;

        if ($student && $course) {
            $student->notify(new CourseReminder($course));
        }
    }
}
