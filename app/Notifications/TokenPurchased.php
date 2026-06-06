<?php

namespace App\Notifications;

use App\Models\Token;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TokenPurchased extends Notification
{
    use Queueable;

    protected Token $token;

    public function __construct(Token $token)
    {
        $this->token = $token;
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
        $typeName = $this->token->tokenType->name ?? 'jeton';
        return (new MailMessage)
            ->subject('Achat confirmé : ' . $typeName)
            ->greeting('Bonjour ' . $notifiable->name . ',')
            ->line('Votre achat a bien été effectué.')
            ->line('Type de jeton : ' . $typeName)
            ->line('Code : ' . $this->token->code)
            ->line('Utilisations restantes : ' . ($this->token->remaining_uses ?? 'illimité'))
            ->action('Voir mes jetons', route('student.tokens.index'))
            ->line('Merci de votre confiance !');
    }
}
