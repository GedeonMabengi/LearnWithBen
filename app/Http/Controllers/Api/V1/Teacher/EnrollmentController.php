<?php

namespace App\Http\Controllers\Api\V1\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Enrollment;
use Illuminate\Http\JsonResponse;

class EnrollmentController extends Controller
{
    public function markAttended(Enrollment $enrollment): JsonResponse
    {
        $enrollment->status = 'attended';
        $enrollment->save();

        return response()->json($enrollment);
    }

    public function markNoShow(Enrollment $enrollment): JsonResponse
    {
        $enrollment->status = 'no_show';
        $enrollment->save();

        return response()->json($enrollment);
    }

    public function destroy(Enrollment $enrollment): JsonResponse
    {
        $enrollment->delete();

        return response()->json(null, 204);
    }
}
