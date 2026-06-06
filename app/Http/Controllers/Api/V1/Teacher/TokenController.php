<?php

namespace App\Http\Controllers\Api\V1\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Token;
use App\Models\TokenType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TokenController extends Controller
{
    public function generate(TokenType $tokenType, Request $request): JsonResponse
    {
        $count = $request->input('count', 1);
        $tokens = [];

        for ($i = 0; $i < $count; $i++) {
            $tokens[] = Token::create([
                'token_type_id' => $tokenType->id,
                'code' => Str::uuid(),
                'remaining_uses' => $tokenType->max_uses,
                'expires_at' => $tokenType->valid_until,
                'status' => 'active',
            ]);
        }

        return response()->json($tokens, 201);
    }

    public function indexByType(TokenType $tokenType): JsonResponse
    {
        return response()->json(Token::where('token_type_id', $tokenType->id)->with('owner')->get());
    }

    public function assign(Token $token, Request $request): JsonResponse
    {
        $request->validate(['student_id' => 'required|exists:users,id,role,student']);
        $token->owner_id = $request->student_id;
        $token->save();

        return response()->json($token);
    }

    public function revoke(Token $token): JsonResponse
    {
        $token->status = 'revoked';
        $token->save();

        return response()->json($token);
    }

    public function qrCode(Token $token): JsonResponse
    {
        $qrUrl = route('teacher.tokens.qr', $token);

        return response()->json(['qr_url' => $qrUrl]);
    }
}
