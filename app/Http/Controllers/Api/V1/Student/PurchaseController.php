<?php

namespace App\Http\Controllers\Api\V1\Student;

use App\Http\Controllers\Controller;
use App\Models\TokenType;
use Illuminate\Http\JsonResponse;

class PurchaseController extends Controller
{
    public function checkout(TokenType $tokenType): JsonResponse
    {
        return response()->json(['client_secret' => '...']);
    }

    public function success(): JsonResponse
    {
        return response()->json(['message' => 'Purchase successful']);
    }

    public function cancel(): JsonResponse
    {
        return response()->json(['message' => 'Purchase cancelled']);
    }
}
