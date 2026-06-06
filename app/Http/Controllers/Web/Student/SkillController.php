<?php

namespace App\Http\Controllers\Web\Student;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Inertia\Inertia;
use Inertia\Response;

class SkillController extends Controller
{
    public function index(): Response
    {
        $skills = Skill::with(['studentSkills' => function ($q) {
            $q->where('student_id', auth()->id());
        }])->get();

        return Inertia::render('Student/Skills/Index', compact('skills'));
    }
}
