<?php

namespace App\Providers;

use App\Events\CourseEnrolled;
use App\Events\SkillValidated;
use App\Events\TokenPurchased;
use App\Listeners\SendEnrollmentConfirmation;
use App\Listeners\SendSkillValidatedNotification;
use App\Listeners\SendTokenPurchaseConfirmation;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        CourseEnrolled::class => [
            SendEnrollmentConfirmation::class,
        ],
        TokenPurchased::class => [
            SendTokenPurchaseConfirmation::class,
        ],
        SkillValidated::class => [
            SendSkillValidatedNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
