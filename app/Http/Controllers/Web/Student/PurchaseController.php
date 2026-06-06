<?php

namespace App\Http\Controllers\Web\Student;

use App\Http\Controllers\Controller;
use App\Models\TokenType;
use App\Services\StripeService;
use Illuminate\Http\RedirectResponse;


class PurchaseController extends Controller
{
    public function __construct(protected StripeService $stripeService)
    {
    }

    public function checkout(TokenType $tokenType): RedirectResponse
    {
        $session = $this->stripeService->createCheckoutSession($tokenType, auth()->user());

        return redirect()->away($session->url);
    }

    public function success(): RedirectResponse
    {
        // The actual token assignment is handled via webhook for reliability.
        // Optionally, you could verify session status here.
        return redirect()->route('student.tokens.index')->with('success', 'Payment successful! Token activated.');
    }

    public function cancel(): RedirectResponse
    {
        return redirect()->route('student.tokens.index')->with('error', 'Payment cancelled.');
    }
}

