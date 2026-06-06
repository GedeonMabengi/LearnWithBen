<?php

namespace App\Http\Controllers\Webhook;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LiveKitController extends Controller
{
    public function handleWebhook(Request $request): Response
    {
        $event = $request->input('event');

        if ($event === 'recording_finished_complete') {
            $recordingData = $request->input('recording');
        }

        return response('', 200);
    }
}
