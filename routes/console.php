<?php

use App\Console\Commands\ExpireTokens;
use App\Console\Commands\SendCourseReminders;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('tokens:expire', function () {
    return app(ExpireTokens::class)->handle();
})->purpose('Expire stale tokens and update their status.');

Artisan::command('courses:remind', function () {
    return app(SendCourseReminders::class)->handle();
})->purpose('Dispatch reminder jobs for upcoming courses.');

return function (Schedule $schedule) {
    $schedule->command('tokens:expire')->hourly();
    $schedule->command('courses:remind')->everyFifteenMinutes();
};
