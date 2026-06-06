<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Reverb Application
    |--------------------------------------------------------------------------
    |
    | This configuration determines how Reverb's server handles incoming
    | connections and events.
    |
    */

    'default' => env('REVERB_SERVER', 'reverb'),

    'servers' => [

        'reverb' => [
            'host' => env('REVERB_SERVER_HOST', '0.0.0.0'),
            'port' => env('REVERB_SERVER_PORT', 8080),
            'hostname' => env('REVERB_HOST'),
            'options' => [
                'tls' => [],
            ],
            'max_request_size' => 10_000,
            'scaling' => [
                'enabled' => env('REVERB_SCALING_ENABLED', false),
                'channel' => env('REVERB_SCALING_CHANNEL', 'reverb'),
                'server' => [
                    'host' => env('REVERB_SCALING_SERVER_HOST', '0.0.0.0'),
                    'port' => env('REVERB_SCALING_SERVER_PORT', 443),
                ],
            ],
            'pulse_ingest_interval' => env('REVERB_PULSE_INGEST_INTERVAL', 15),
            'telescope_ingest_interval' => env('REVERB_TELESCOPE_INGEST_INTERVAL', 15),
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Reverb Application Credentials
    |--------------------------------------------------------------------------
    |
    | These are used to authenticate the private channels and presence
    | channels of your application.
    |
    */

    'apps' => [

        'provider' => env('REVERB_APP_PROVIDER', 'config'),

        'apps' => [
            [
                'id' => env('REVERB_APP_ID'),
                'key' => env('REVERB_APP_KEY'),
                'secret' => env('REVERB_APP_SECRET'),
                'capacity' => null,
                'enable_client_messages' => false,
                'enable_statistics' => true,
            ],
        ],

    ],

];
