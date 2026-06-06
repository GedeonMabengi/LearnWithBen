<?php

namespace App\Channels;

use App\Services\FirebaseCloudMessagingService;
use Illuminate\Notifications\Notification;

class FcmChannel
{
    protected FirebaseCloudMessagingService $fcm;

    public function __construct(FirebaseCloudMessagingService $fcm)
    {
        $this->fcm = $fcm;
    }

    /**
     * Send the given notification.
     */
    public function send($notifiable, Notification $notification): void
    {
        if (!method_exists($notification, 'toFcm')) {
            return;
        }

        $message = $notification->toFcm($notifiable);

        if (!$message || empty($notifiable->fcm_token)) {
            return;
        }

        $this->fcm->sendToDevice(
            $notifiable->fcm_token,
            $message['title'] ?? '',
            $message['body'] ?? '',
            $message['data'] ?? []
        );
    }
}
