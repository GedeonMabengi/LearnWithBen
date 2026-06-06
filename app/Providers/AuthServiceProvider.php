<?php

namespace App\Providers;

use App\Models\Course;
use App\Models\Enrollment;
use App\Models\Recording;
use App\Models\ResourceModel;
use App\Models\Skill;
use App\Models\TeacherNote;
use App\Models\Token;
use App\Models\TokenType;
use App\Policies\CoursePolicy;
use App\Policies\EnrollmentPolicy;
use App\Policies\RecordingPolicy;
use App\Policies\ResourcePolicy;
use App\Policies\SkillPolicy;
use App\Policies\TeacherNotePolicy;
use App\Policies\TokenPolicy;
use App\Policies\TokenTypePolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Course::class => CoursePolicy::class,
        TokenType::class => TokenTypePolicy::class,
        Token::class => TokenPolicy::class,
        Enrollment::class => EnrollmentPolicy::class,
        ResourceModel::class => ResourcePolicy::class,
        Skill::class => SkillPolicy::class,
        TeacherNote::class => TeacherNotePolicy::class,
        Recording::class => RecordingPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();
    }
}
