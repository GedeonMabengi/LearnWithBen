<?php

namespace App\Http\Controllers\Web\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Recording;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RecordingController extends Controller
{
    public function index(): Response
    {
        $recordings = Recording::with('course')->get();

        return Inertia::render('Teacher/Recordings/Index', compact('recordings'));
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'course_id' => 'required|exists:courses,id',
            'file_url' => 'required|string',
            'duration' => 'nullable|integer',
        ]);

        Recording::create($data);

        return back()->with('success', 'Recording saved.');
    }

    public function destroy(Recording $recording): RedirectResponse
    {
        $recording->delete();

        return back()->with('success', 'Recording deleted.');
    }
}
