<?php

namespace App\Notifications;

use App\Models\Skill;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SkillValidated extends Notification
{
    use Queueable;

    protected Skill $skill;

    public function __construct(Skill $skill)
    {
        $this->skill = $skill;
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
            ->subject('Compétence validée : ' . $this->skill->name)
            ->greeting('Félicitations ' . $notifiable->name . ' !')
            ->line('Votre enseignant a validé la compétence "' . $this->skill->name . '".')
            ->action('Voir ma progression', route('student.skills.index'))
            ->line('Continuez comme ça !');
    }

    /**
     * Get the FCM representation of the notification.
     */
    public function toFcm(object $notifiable): array
    {
        return [
            'title' => 'Compétence validée',
            'body'  => 'Vous avez validé : ' . $this->skill->name,
            'data'  => [
                'type' => 'skill_validated',
                'skill_id' => $this->skill->id,
            ],
        ];
    }
}
