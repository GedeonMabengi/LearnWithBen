<?php

namespace App\Http\Controllers\Web\Student;

use App\Http\Controllers\Controller;
use App\Models\Token;
use App\Models\TokenTransfer;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TokenController extends Controller
{
    public function index(): Response
    {
        $tokens = Token::where('owner_id', auth()->id())->with('tokenType')->get();

        return Inertia::render('Student/Tokens/Index', compact('tokens'));
    }

    public function redeem(Request $request): RedirectResponse
    {
        $request->validate(['code' => 'required|string']);
        $token = Token::where('code', $request->code)->whereNull('owner_id')->where('status', 'active')->first();

        if (! $token) {
            return back()->withErrors('Invalid or already used token code.');
        }

        $token->owner_id = auth()->id();
        $token->save();

        return back()->with('success', 'Token redeemed.');
    }

    public function transfer(Token $token, Request $request): RedirectResponse
    {
        if ($token->owner_id !== auth()->id()) {
            abort(403);
        }

        $request->validate(['recipient_email' => 'required|email|exists:users,email,role,student']);
        $recipient = User::where('email', $request->recipient_email)->firstOrFail();

        if (! $token->tokenType->is_transferable) {
            return back()->withErrors('This token is not transferable.');
        }

        TokenTransfer::create([
            'token_id' => $token->id,
            'from_student_id' => auth()->id(),
            'to_student_id' => $recipient->id,
        ]);

        $token->owner_id = $recipient->id;
        $token->save();

        return back()->with('success', 'Token transferred.');
    }

    public function claim(Request $request): RedirectResponse
    {
        return $this->redeem($request);
    }
}
