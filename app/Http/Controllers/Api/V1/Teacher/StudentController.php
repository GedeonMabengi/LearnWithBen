<?php

namespace App\Http\Controllers\Api\V1\Teacher;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class StudentController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(User::where('role', 'student')->get());
    }

    public function show(User $student): JsonResponse
    {
        return response()->json($student->load('enrollments.course', 'tokens.tokenType', 'studentSkills.skill', 'teacherNotes'));
    }
}
