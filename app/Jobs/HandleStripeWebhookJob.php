<?php

namespace App\Jobs;

use App\Models\Token;
use App\Models\TokenType;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Stripe\Stripe;

class HandleStripeWebhookJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public string $payload,
        public string $sigHeader,
    ) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Stripe::setApiKey(config('stripe.secret'));
        $endpointSecret = config('stripe.webhook_secret');
        $event = \Stripe\Webhook::constructEvent($this->payload, $this->sigHeader, $endpointSecret);

        if ($event->type === 'checkout.session.completed') {
            $this->handleCheckoutCompleted($event->data->object);
        }
    }

    /**
     * Process a completed checkout session.
     */
    protected function handleCheckoutCompleted($session): void
    {
        $tokenTypeId = $session->metadata->token_type_id ?? null;
        $studentId = $session->metadata->student_id ?? null;

        if (! $tokenTypeId || ! $studentId) {
            return;
        }

        $tokenType = TokenType::find($tokenTypeId);
        $student = User::find($studentId);

        if (! $tokenType || ! $student) {
            return;
        }

        Token::create([
            'token_type_id' => $tokenType->id,
            'owner_id' => $student->id,
            'code' => \Illuminate\Support\Str::uuid(),
            'remaining_uses' => $tokenType->max_uses,
            'expires_at' => $tokenType->valid_until,
            'status' => 'active',
        ]);
    }
}
