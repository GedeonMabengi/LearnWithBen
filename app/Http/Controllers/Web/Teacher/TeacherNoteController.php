<?php

namespace App\Http\Controllers\Web\Teacher;

use App\Http\Controllers\Controller;
use App\Models\TeacherNote;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TeacherNoteController extends Controller
{
    public function index(User $student): Response
    {
        $notes = TeacherNote::where('student_id', $student->id)->with('course')->get();

        return Inertia::render('Teacher/Notes/Index', compact('student', 'notes'));
    }

    public function store(User $student, Request $request): RedirectResponse
    {
        $data = $request->validate([
            'note' => 'required|string',
            'course_id' => 'nullable|exists:courses,id',
        ]);
        $data['teacher_id'] = auth()->id();
        $data['student_id'] = $student->id;
        TeacherNote::create($data);

        return back()->with('success', 'Note added.');
    }

    public function update(TeacherNote $note, Request $request): RedirectResponse
    {
        $data = $request->validate(['note' => 'required|string']);
        $note->update($data);

        return back()->with('success', 'Note updated.');
    }

    public function destroy(TeacherNote $note): RedirectResponse
    {
        $note->delete();

        return back()->with('success', 'Note deleted.');
    }
}
