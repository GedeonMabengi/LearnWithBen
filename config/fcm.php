<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Firebase Cloud Messaging Configuration
    |--------------------------------------------------------------------------
    |
    | You can use a service account JSON file or direct credentials.
    |
    */

    'driver' => env('FCM_DRIVER', 'service_account'),

    'service_account' => [
        /*
         * Absolute path to the service account JSON file.
         */
        'credentials' => env('FCM_SERVICE_ACCOUNT_JSON_PATH'),
    ],

    /*
    |--------------------------------------------------------------------------
    | HTTP v1 API
    |--------------------------------------------------------------------------
    |
    | If you prefer to use the Firebase HTTP v1 API directly, set the
    | necessary project ID and a service account JSON string.
    |
    */

    'project_id' => env('FIREBASE_PROJECT_ID'),
    'credentials' => env('FIREBASE_CREDENTIALS'),

    /*
    |--------------------------------------------------------------------------
    | Default Notification Channel
    |--------------------------------------------------------------------------
    */

    'channel' => env('FCM_CHANNEL', 'fcm'),
];
