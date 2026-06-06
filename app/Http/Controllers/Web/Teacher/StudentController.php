<?php

namespace App\Http\Controllers\Web\Teacher;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class StudentController extends Controller
{
    public function index(): Response
    {
        $students = User::where('role', 'student')->paginate(20);

        return Inertia::render('Teacher/Students/Index', compact('students'));
    }

    public function show(User $student): Response
    {
        $student->load('enrollments.course', 'tokens.tokenType', 'studentSkills.skill', 'teacherNotes');

        return Inertia::render('Teacher/Students/Show', compact('student'));
    }
}
