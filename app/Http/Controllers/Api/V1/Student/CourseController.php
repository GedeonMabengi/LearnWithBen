<?php

namespace App\Http\Controllers\Api\V1\Student;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\JsonResponse;

class CourseController extends Controller
{
    public function index(): JsonResponse
    {
        $courses = Course::where('visibility', 'public')
            ->orWhere(function ($query) {
                $query->where('visibility', 'invite_only')
                    ->whereHas('invitations', fn ($q) => $q->where('student_id', auth()->id()));
            })
            ->orWhere(function ($query) {
                $query->where('visibility', 'token_gated')
                    ->whereHas('tokenType.tokens', fn ($q) => $q->where('owner_id', auth()->id())->where('status', 'active'));
            })
            ->get();

        return response()->json($courses);
    }

    public function show(Course $course): JsonResponse
    {
        return response()->json($course);
    }
}
