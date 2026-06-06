<?php

namespace App\Notifications;

use App\Models\Course;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CourseCancelled extends Notification
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
            ->subject('Cours annulé : ' . $this->course->title)
            ->greeting('Bonjour ' . $notifiable->name . ',')
            ->line('Le cours "' . $this->course->title . '" prévu le ' . $this->course->start_time->format('d/m/Y H:i') . ' a été annulé.')
            ->line('Si vous aviez utilisé un jeton, celui-ci vous sera recrédité automatiquement.')
            ->action('Voir le calendrier', route('student.courses.index'))
            ->line('Merci de votre compréhension.');
    }

    /**
     * Get the FCM representation of the notification.
     */
    public function toFcm(object $notifiable): array
    {
        return [
            'title' => 'Cours annulé',
            'body'  => 'Le cours "' . $this->course->title . '" a été annulé.',
            'data'  => [
                'type' => 'course_cancelled',
                'course_id' => $this->course->id,
            ],
        ];
    }
}
