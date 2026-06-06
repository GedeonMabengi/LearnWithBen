<?php

namespace App\Http\Controllers\Web\Student;

use App\Http\Controllers\Controller;
use App\Models\Recording;
use Inertia\Inertia;
use Inertia\Response;

class RecordingController extends Controller
{
    public function index(): Response
    {
        $recordings = Recording::whereHas('course.enrollments', function ($q) {
            $q->where('student_id', auth()->id())->where('status', 'attended');
        })->with('course')->get();

        return Inertia::render('Student/Recordings/Index', compact('recordings'));
    }

    public function show(Recording $recording): Response
    {
        if (! $recording->course->enrollments()->where('student_id', auth()->id())->where('status', 'attended')->exists()) {
            abort(404);
        }

        return Inertia::render('Student/Recordings/Show', compact('recording'));
    }
}
