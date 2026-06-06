<?php

namespace App\Events;

use App\Models\StudentSkill;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class SkillValidated
{
    use Dispatchable, SerializesModels;

    /**
     * Create a new event instance.
     */
    public function __construct(public StudentSkill $studentSkill) {}
}
