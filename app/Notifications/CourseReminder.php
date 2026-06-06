<?php

namespace App\Notifications;

use App\Models\Course;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CourseReminder extends Notification
{
    use Queueable;

    protected Course $course;

    public function __construct(Course $course)
    {
        $this->course = $course;
    }

    /**
     * Get the notification's delivery channels.
     */
    public function via(object $notifiable): array
    {
        return ['mail', 'fcm'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Rappel : ' . $this->course->title)
            ->greeting('Bonjour ' . $notifiable->name . ',')
            ->line('Votre cours "' . $this->course->title . '" commence bientôt.')
            ->line('Date : ' . $this->course->start_time->format('d/m/Y à H:i'))
            ->action('Rejoindre le cours', route('student.courses.show', $this->course->id))
            ->line('À tout de suite !');
    }

    /**
     * Get the FCM representation of the notification.
     */
    public function toFcm(object $notifiable): array
    {
        return [
            'title' => 'Rappel de cours',
            'body'  => 'Votre cours "' . $this->course->title . '" commence bientôt.',
            'data'  => [
                'type' => 'course_reminder',
                'course_id' => $this->course->id,
            ],
        ];
    }
}
