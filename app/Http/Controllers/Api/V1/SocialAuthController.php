<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class SocialAuthController extends Controller
{
    public function google(Request $request): JsonResponse
    {
        $request->validate([
            'google_id' => 'required|string',
            'email' => 'required|email',
            'name' => 'required|string',
        ]);

        $user = User::updateOrCreate(
            ['google_id' => $request->google_id],
            [
                'name' => $request->name,
                'email' => $request->email,
                'google_id' => $request->google_id,
                'role' => 'student',
                'password' => Hash::make(Str::random(32)),
            ]
        );

        $token = $user->createToken('api')->plainTextToken;

        return response()->json(['user' => $user, 'token' => $token]);
    }

    public function apple(Request $request): JsonResponse
    {
        $request->validate([
            'apple_id' => 'required|string',
            'email' => 'required|email',
            'name' => 'required|string',
        ]);

        $user = User::updateOrCreate(
            ['apple_id' => $request->apple_id],
            [
                'name' => $request->name,
                'email' => $request->email,
                'apple_id' => $request->apple_id,
                'role' => 'student',
                'password' => Hash::make(Str::random(32)),
            ]
        );

        $token = $user->createToken('api')->plainTextToken;

        return response()->json(['user' => $user, 'token' => $token]);
    }
}
