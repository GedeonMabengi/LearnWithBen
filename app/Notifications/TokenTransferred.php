<?php

namespace App\Notifications;

use App\Models\Token;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TokenTransferred extends Notification
{
    use Queueable;

    protected Token $token;
    protected User $sender;

    public function __construct(Token $token, User $sender)
    {
        $this->token = $token;
        $this->sender = $sender;
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
        $typeName = $this->token->tokenType->name ?? 'jeton';
        return (new MailMessage)
            ->subject('Vous avez reçu un jeton de la part de ' . $this->sender->name)
            ->greeting('Bonjour ' . $notifiable->name . ',')
            ->line($this->sender->name . ' vous a transféré un jeton "' . $typeName . '".')
            ->line('Code : ' . $this->token->code)
            ->action('Voir mes jetons', route('student.tokens.index'))
            ->line('Profitez-en !');
    }

    /**
     * Get the FCM representation of the notification.
     */
    public function toFcm(object $notifiable): array
    {
        return [
            'title' => 'Jeton reçu',
            'body'  => $this->sender->name . ' vous a transféré un jeton.',
            'data'  => [
                'type' => 'token_transfer',
                'token_id' => $this->token->id,
            ],
        ];
    }
}
