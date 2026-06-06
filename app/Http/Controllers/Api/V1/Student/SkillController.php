<?php

namespace App\Http\Controllers\Api\V1\Student;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\JsonResponse;

class SkillController extends Controller
{
    public function index(): JsonResponse
    {
        $skills = Skill::with(['studentSkills' => function ($q) {
            $q->where('student_id', auth()->id());
        }])->get();

        return response()->json($skills);
    }
}
