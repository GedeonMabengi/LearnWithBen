<?php

namespace App\Listeners;

use App\Events\SkillValidated;
use App\Notifications\SkillValidated as SkillValidatedNotification;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendSkillValidatedNotification implements ShouldQueue
{
    /**
     * Handle the event.
     */
    public function handle(SkillValidated $event): void
    {
        $studentSkill = $event->studentSkill;
        $student = $studentSkill->student;
        $skill = $studentSkill->skill;

        if ($student && $skill) {
            $student->notify(new SkillValidatedNotification($skill));
        }
    }
}
