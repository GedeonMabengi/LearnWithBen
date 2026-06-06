<?php

namespace App\Http\Controllers\Api\V1\Student;

use App\Http\Controllers\Controller;
use App\Models\Recording;
use Illuminate\Http\JsonResponse;

class RecordingController extends Controller
{
    public function index(): JsonResponse
    {
        $recordings = Recording::whereHas('course.enrollments', function ($q) {
            $q->where('student_id', auth()->id())->where('status', 'attended');
        })->with('course')->get();

        return response()->json($recordings);
    }

    public function show(Recording $recording): JsonResponse
    {
        if (! $recording->course->enrollments()->where('student_id', auth()->id())->where('status', 'attended')->exists()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return response()->json($recording);
    }
}
