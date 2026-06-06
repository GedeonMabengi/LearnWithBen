<?php

namespace App\Http\Controllers\Api\V1\Student;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Enrollment;
use Illuminate\Http\JsonResponse;

class EnrollmentController extends Controller
{
    public function store(Course $course): JsonResponse
    {
        if ($course->max_participants && $course->enrollments()->where('status', 'registered')->count() >= $course->max_participants) {
            return response()->json(['error' => 'Course full'], 422);
        }

        Enrollment::create([
            'course_id' => $course->id,
            'student_id' => auth()->id(),
            'status' => 'registered',
        ]);

        return response()->json(['message' => 'Enrolled'], 201);
    }

    public function destroy(Enrollment $enrollment): JsonResponse
    {
        $enrollment->status = 'cancelled';
        $enrollment->cancelled_at = now();
        $enrollment->save();

        return response()->json($enrollment);
    }
}
