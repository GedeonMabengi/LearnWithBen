<?php

namespace App\Http\Controllers\Webhook;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class PayPalController extends Controller
{
    public function handleWebhook(Request $request): Response
    {
        Log::info('PayPal webhook', $request->all());

        return response('', 200);
    }
}
