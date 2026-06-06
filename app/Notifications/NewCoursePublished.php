<?php

namespace App\Notifications;

use App\Models\Course;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewCoursePublished extends Notification
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
            ->subject('Nouveau cours disponible : ' . $this->course->title)
            ->greeting('Bonjour ' . $notifiable->name . ',')
            ->line('Un nouveau cours susceptible de vous intéresser a été publié.')
            ->line('Titre : ' . $this->course->title)
            ->line('Date : ' . $this->course->start_time->format('d/m/Y H:i'))
            ->action('Voir le cours', route('student.courses.show', $this->course->id))
            ->line('Inscrivez-vous vite !');
    }

    /**
     * Get the FCM representation of the notification.
     */
    public function toFcm(object $notifiable): array
    {
        return [
            'title' => 'Nouveau cours',
            'body'  => 'Un nouveau cours "' . $this->course->title . '" est disponible.',
            'data'  => [
                'type' => 'new_course',
                'course_id' => $this->course->id,
            ],
        ];
    }
}
