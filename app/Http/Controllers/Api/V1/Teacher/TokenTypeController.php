<?php

namespace App\Http\Controllers\Api\V1\Teacher;

use App\Http\Controllers\Controller;
use App\Models\TokenType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TokenTypeController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(TokenType::where('teacher_id', auth()->id())->get());
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|in:single,pack,series,subscription',
            'validity_type' => 'required|in:date_range,usage_count,both',
            'valid_from' => 'nullable|date',
            'valid_until' => 'nullable|date|after:valid_from',
            'max_uses' => 'nullable|integer|min:1',
            'price' => 'nullable|integer|min:0',
            'currency' => 'nullable|string|size:3',
            'is_transferable' => 'boolean',
        ]);
        $data['teacher_id'] = auth()->id();

        return response()->json(TokenType::create($data), 201);
    }

    public function show(TokenType $tokenType): JsonResponse
    {
        return response()->json($tokenType);
    }

    public function update(Request $request, TokenType $tokenType): JsonResponse
    {
        $tokenType->update($request->all());

        return response()->json($tokenType);
    }

    public function destroy(TokenType $tokenType): JsonResponse
    {
        $tokenType->delete();

        return response()->json(null, 204);
    }
}
