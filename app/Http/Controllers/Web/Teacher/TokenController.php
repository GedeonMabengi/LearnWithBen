<?php

namespace App\Http\Controllers\Web\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Token;
use App\Models\TokenType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class TokenController extends Controller
{
    public function generate(TokenType $tokenType, Request $request): RedirectResponse
    {
        $count = $request->input('count', 1);

        for ($i = 0; $i < $count; $i++) {
            Token::create([
                'token_type_id' => $tokenType->id,
                'code' => Str::uuid(),
                'remaining_uses' => $tokenType->max_uses,
                'expires_at' => $tokenType->valid_until,
                'status' => 'active',
            ]);
        }

        return redirect()->route('teacher.token-types.show', $tokenType)->with('success', "$count tokens generated.");
    }

    public function indexByType(TokenType $tokenType): Response
    {
        $tokens = Token::where('token_type_id', $tokenType->id)->with('owner')->get();

        return Inertia::render('Teacher/Tokens/Index', compact('tokenType', 'tokens'));
    }

    public function assign(Token $token, Request $request): RedirectResponse
    {
        $request->validate(['student_id' => 'required|exists:users,id,role,student']);
        $token->owner_id = $request->student_id;
        $token->save();

        return back()->with('success', 'Token assigned.');
    }

    public function revoke(Token $token): RedirectResponse
    {
        $token->status = 'revoked';
        $token->save();

        return back()->with('success', 'Token revoked.');
    }

    public function qrCode(Token $token): Response
    {
        $qrCode = 'data:image/png;base64,...';

        return Inertia::render('Teacher/Tokens/Qr', compact('token', 'qrCode'));
    }
}
