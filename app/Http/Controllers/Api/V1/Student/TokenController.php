<?php

namespace App\Http\Controllers\Api\V1\Student;

use App\Http\Controllers\Controller;
use App\Models\Token;
use App\Models\TokenTransfer;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TokenController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Token::where('owner_id', auth()->id())->with('tokenType')->get());
    }

    public function redeem(Request $request): JsonResponse
    {
        $request->validate(['code' => 'required|string']);
        $token = Token::where('code', $request->code)->whereNull('owner_id')->where('status', 'active')->first();

        if (! $token) {
            return response()->json(['error' => 'Invalid code'], 422);
        }

        $token->owner_id = auth()->id();
        $token->save();

        return response()->json($token);
    }

    public function transfer(Token $token, Request $request): JsonResponse
    {
        $request->validate(['recipient_email' => 'required|email|exists:users,email']);
        $recipient = User::where('email', $request->recipient_email)->firstOrFail();

        if (! $token->tokenType->is_transferable) {
            return response()->json(['error' => 'Not transferable'], 403);
        }

        TokenTransfer::create([
            'token_id' => $token->id,
            'from_student_id' => auth()->id(),
            'to_student_id' => $recipient->id,
        ]);

        $token->owner_id = $recipient->id;
        $token->save();

        return response()->json($token);
    }

    public function claim(Request $request): JsonResponse
    {
        return $this->redeem($request);
    }
}
