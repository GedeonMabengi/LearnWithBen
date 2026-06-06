<?php

namespace App\Services;

use App\Models\TokenType;
use App\Models\User;
use Stripe\Checkout\Session;
use Stripe\Stripe;
use Stripe\Webhook;

class StripeService
{
    public function __construct()
    {
        Stripe::setApiKey(config('stripe.secret'));
    }

    /**
     * Create a Stripe Checkout session for a token type purchase.
     */
    public function createCheckoutSession(TokenType $tokenType, User $student): Session
    {
        return Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => strtolower($tokenType->currency ?? 'eur'),
                    'product_data' => [
                        'name' => $tokenType->name,
                        'description' => "Token: {$tokenType->type}",
                    ],
                    'unit_amount' => $tokenType->price, // in cents
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => route('student.purchase.success') . '?session_id={CHECKOUT_SESSION_ID}',
            'cancel_url' => route('student.purchase.cancel'),
            'metadata' => [
                'token_type_id' => $tokenType->id,
                'student_id' => $student->id,
            ],
        ]);
    }

    /**
     * Handle incoming Stripe webhook.
     */
    public function handleWebhook(string $payload, string $sigHeader): void
    {
        $endpointSecret = config('stripe.webhook_secret');
        $event = Webhook::constructEvent($payload, $sigHeader, $endpointSecret);

        match ($event->type) {
            'checkout.session.completed' => $this->handleCheckoutSessionCompleted($event->data->object),
            default => null,
        };
    }

    /**
     * Process a successful checkout.
     */
    protected function handleCheckoutSessionCompleted(Session $session): void
    {
        $tokenTypeId = $session->metadata->token_type_id;
        $studentId = $session->metadata->student_id;

        $tokenType = TokenType::findOrFail($tokenTypeId);
        $student = User::findOrFail($studentId);

        // Create token instance
        \App\Models\Token::create([
            'token_type_id' => $tokenType->id,
            'owner_id' => $student->id,
            'code' => \Illuminate\Support\Str::uuid(),
            'remaining_uses' => $tokenType->max_uses,
            'expires_at' => $tokenType->valid_until,
            'status' => 'active',
        ]);
    }
}
