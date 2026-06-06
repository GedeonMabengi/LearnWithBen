<?php

namespace App\Http\Controllers\Webhook;

use App\Http\Controllers\Controller;
use App\Jobs\HandleStripeWebhookJob;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class StripeController extends Controller
{
    /**
     * Handle incoming Stripe webhook.
     */
    public function handleWebhook(Request $request): Response
    {
        $payload = $request->getContent();
        $sigHeader = $request->header('Stripe-Signature');

        HandleStripeWebhookJob::dispatch($payload, $sigHeader);

        return response('', 200);
    }
}
