<?php

namespace App\Http\Controllers\Api\V1\Teacher;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([]);
    }

    public function send(Request $request): JsonResponse
    {
        return response()->json(['message' => 'Notification sent']);
    }
}
