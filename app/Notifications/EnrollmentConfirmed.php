<?php

namespace App\Notifications;

use App\Models\Course;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class EnrollmentConfirmed extends Notification
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
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Inscription confirmée : ' . $this->course->title)
            ->greeting('Bonjour ' . $notifiable->name . ',')
            ->line('Vous êtes désormais inscrit au cours "' . $this->course->title . '".')
            ->line('Date : ' . $this->course->start_time->format('d/m/Y H:i'))
            ->action('Voir le cours', route('student.courses.show', $this->course->id))
            ->line('À bientôt !');
    }
}
