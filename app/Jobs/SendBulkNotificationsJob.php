<?php

namespace App\Jobs;

use App\Models\User;
use App\Notifications\TeacherMessage;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendBulkNotificationsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @param  array<int>  $studentIds
     * @param  string  $title
     * @param  string  $body
     * @param  string|null  $actionUrl
     * @param  string|null  $actionText
     */
    public function __construct(
        public array $studentIds,
        public string $title,
        public string $body,
        public ?string $actionUrl = null,
        public ?string $actionText = null,
    ) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $students = User::whereIn('id', $this->studentIds)
            ->where('role', 'student')
            ->get();

        foreach ($students as $student) {
            $student->notify(new TeacherMessage(
                $this->title,
                $this->body,
                $this->actionUrl,
                $this->actionText,
            ));
        }
    }
}
