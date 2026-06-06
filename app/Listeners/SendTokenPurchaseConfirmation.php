<?php

namespace App\Listeners;

use App\Events\TokenPurchased;
use App\Notifications\TokenPurchased as TokenPurchasedNotification;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendTokenPurchaseConfirmation implements ShouldQueue
{
    /**
     * Handle the event.
     */
    public function handle(TokenPurchased $event): void
    {
        $token = $event->token;
        $student = $token->owner;

        if ($student) {
            $student->notify(new TokenPurchasedNotification($token));
        }
    }
}
