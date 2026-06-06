<?php

namespace App\Listeners;

use App\Events\CourseEnrolled;
use App\Notifications\EnrollmentConfirmed;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendEnrollmentConfirmation implements ShouldQueue
{
    /**
     * Handle the event.
     */
    public function handle(CourseEnrolled $event): void
    {
        $enrollment = $event->enrollment;
        $student = $enrollment->student;
        $course = $enrollment->course;

        if ($student) {
            $student->notify(new EnrollmentConfirmed($course));
        }
    }
}
