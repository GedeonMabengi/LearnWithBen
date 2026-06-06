<?php

namespace App\Http\Controllers\Api\V1\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Recording;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RecordingController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Recording::all());
    }

    public function store(Request $request): JsonResponse
    {
        return response()->json(Recording::create($request->all()), 201);
    }

    public function destroy(Recording $recording): JsonResponse
    {
        $recording->delete();

        return response()->json(null, 204);
    }
}
