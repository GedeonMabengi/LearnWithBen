<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TeacherMessage extends Notification
{
    use Queueable;

    protected string $title;
    protected string $body;
    protected ?string $actionUrl;
    protected ?string $actionText;

    public function __construct(string $title, string $body, ?string $actionUrl = null, ?string $actionText = null)
    {
        $this->title = $title;
        $this->body = $body;
        $this->actionUrl = $actionUrl;
        $this->actionText = $actionText;
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
        $mail = (new MailMessage)
            ->subject($this->title)
            ->greeting('Bonjour ' . $notifiable->name . ',')
            ->line($this->body);

        if ($this->actionUrl && $this->actionText) {
            $mail->action($this->actionText, $this->actionUrl);
        }

        return $mail;
    }

    /**
     * Get the FCM representation of the notification.
     */
    public function toFcm(object $notifiable): array
    {
        return [
            'title' => $this->title,
            'body'  => $this->body,
            'data'  => [
                'type' => 'teacher_message',
                'action_url' => $this->actionUrl,
            ],
        ];
    }
}
