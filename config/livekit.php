<?php

return [

    /*
    |--------------------------------------------------------------------------
    | LiveKit Server Configuration
    |--------------------------------------------------------------------------
    |
    | Credentials for your self-hosted or cloud LiveKit instance.
    |
    */

    'host' => env('LIVEKIT_HOST', 'http://localhost:7880'),

    'api_key' => env('LIVEKIT_API_KEY'),

    'api_secret' => env('LIVEKIT_API_SECRET'),

    /*
    |--------------------------------------------------------------------------
    | Default Room Settings
    |--------------------------------------------------------------------------
    |
    | Settings applied when creating a new room via the server API.
    |
    */

    'defaults' => [
        'empty_timeout' => 300,
        'max_participants' => 0,
    ],
];
