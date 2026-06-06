<?php

namespace App\Services;

use App\Models\TokenType;
use App\Models\User;
use PayPal\Api\Amount;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\PaymentExecution;
use PayPal\Api\RedirectUrls;
use PayPal\Api\Transaction;
use PayPal\Auth\OAuthTokenCredential;
use PayPal\Rest\ApiContext;

class PayPalService
{
    protected ApiContext $apiContext;

    public function __construct()
    {
        $this->apiContext = new ApiContext(
            new OAuthTokenCredential(
                config('paypal.sandbox.client_id'),
                config('paypal.sandbox.client_secret')
            )
        );

        $this->apiContext->setConfig([
            'mode' => config('paypal.mode', 'sandbox'),
        ]);
    }

    /**
     * Create PayPal payment and return approval URL.
     */
    public function createPayment(TokenType $tokenType, User $student): string
    {
        $payer = new Payer();
        $payer->setPaymentMethod('paypal');

        $item = new Item();
        $item->setName($tokenType->name)
            ->setCurrency(strtoupper($tokenType->currency ?? 'EUR'))
            ->setQuantity(1)
            ->setPrice($tokenType->price / 100); // PayPal expects float

        $itemList = new ItemList();
        $itemList->setItems([$item]);

        $amount = new Amount();
        $amount->setCurrency(strtoupper($tokenType->currency ?? 'EUR'))
            ->setTotal($tokenType->price / 100);

        $transaction = new Transaction();
        $transaction->setAmount($amount)
            ->setItemList($itemList)
            ->setDescription("Purchase token {$tokenType->name}");

        $redirectUrls = new RedirectUrls();
        $redirectUrls->setReturnUrl(route('student.purchase.success') . '?paypal=true')
            ->setCancelUrl(route('student.purchase.cancel'));

        $payment = new Payment();
        $payment->setIntent('sale')
            ->setPayer($payer)
            ->setRedirectUrls($redirectUrls)
            ->setTransactions([$transaction]);

        $payment->create($this->apiContext);

        // Store payment ID in session or metadata
        session(['paypal_payment_id' => $payment->getId(), 'paypal_token_type_id' => $tokenType->id]);

        return $payment->getApprovalLink();
    }

    /**
     * Execute payment after approval.
     */
    public function executePayment(string $paymentId, string $payerId): void
    {
        $payment = Payment::get($paymentId, $this->apiContext);
        $execution = new PaymentExecution();
        $execution->setPayerId($payerId);
        $payment->execute($execution, $this->apiContext);

        // Retrieve metadata
        $tokenTypeId = session('paypal_token_type_id');
        $studentId = auth()->id();

        if ($tokenTypeId && $studentId) {
            $tokenType = TokenType::findOrFail($tokenTypeId);
            \App\Models\Token::create([
                'token_type_id' => $tokenType->id,
                'owner_id' => $studentId,
                'code' => \Illuminate\Support\Str::uuid(),
                'remaining_uses' => $tokenType->max_uses,
                'expires_at' => $tokenType->valid_until,
                'status' => 'active',
            ]);
        }

        session()->forget(['paypal_payment_id', 'paypal_token_type_id']);
    }

    /**
     * Handle PayPal webhook.
     */
    public function handleWebhook(array $payload): void
    {
        // Verify webhook signature (simplified)
        // Process event type PAYMENT.SALE.COMPLETED if needed
        // For simplicity, payment success is handled via return URL
    }
}
