<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class FirebaseCloudMessagingService
{
    protected string $serverKey;
    protected string $fcmEndpoint = 'https://fcm.googleapis.com/fcm/send';

    public function __construct()
    {
        $this->serverKey = config('fcm.server_key', '');
    }

    /**
     * Send a notification to a specific device token.
     */
    public function sendToDevice(string $deviceToken, string $title, string $body, array $data = []): bool
    {
        $payload = [
            'to' => $deviceToken,
            'notification' => [
                'title' => $title,
                'body' => $body,
                'sound' => 'default',
            ],
            'data' => $data,
        ];

        return $this->send($payload);
    }

    /**
     * Send a notification to multiple devices.
     */
    public function sendToDevices(array $deviceTokens, string $title, string $body, array $data = []): bool
    {
        $payload = [
            'registration_ids' => $deviceTokens,
            'notification' => [
                'title' => $title,
                'body' => $body,
                'sound' => 'default',
            ],
            'data' => $data,
        ];

        return $this->send($payload);
    }

    /**
     * Send notification to a topic.
     */
    public function sendToTopic(string $topic, string $title, string $body, array $data = []): bool
    {
        $payload = [
            'to' => '/topics/' . $topic,
            'notification' => [
                'title' => $title,
                'body' => $body,
            ],
            'data' => $data,
        ];

        return $this->send($payload);
    }

    protected function send(array $payload): bool
    {
        $response = Http::withHeaders([
            'Authorization' => 'key=' . $this->serverKey,
            'Content-Type' => 'application/json',
        ])->post($this->fcmEndpoint, $payload);

        return $response->successful();
    }
}
