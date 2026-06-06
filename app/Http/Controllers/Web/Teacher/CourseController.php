<?php

namespace App\Http\Controllers\Web\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\TokenType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class CourseController extends Controller
{
    public function index(): Response
    {
        $courses = Course::where('teacher_id', auth()->id())->with('tokenType')->get();

        return Inertia::render('Teacher/Courses/Index', compact('courses'));
    }

    public function create(): Response
    {
        $tokenTypes = TokenType::where('teacher_id', auth()->id())->get();

        return Inertia::render('Teacher/Courses/Create', compact('tokenTypes'));
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_time' => 'required|date',
            'end_time' => 'required|date|after:start_time',
            'timezone' => 'required|string',
            'max_participants' => 'nullable|integer|min:1',
            'visibility' => 'required|in:public,private,invite_only,token_gated',
            'token_type_id' => 'nullable|required_if:visibility,token_gated|exists:token_types,id',
            'access_code' => 'nullable|string|unique:courses,access_code',
        ]);

        $data['teacher_id'] = auth()->id();
        $data['access_code'] = $data['visibility'] === 'private' ? Str::uuid() : null;
        Course::create($data);

        return redirect()->route('teacher.courses.index')->with('success', 'Course created.');
    }

    public function show(Course $course): Response
    {
        $course->load('tokenType', 'invitations.student');

        return Inertia::render('Teacher/Courses/Show', compact('course'));
    }

    public function edit(Course $course): Response
    {
        $tokenTypes = TokenType::where('teacher_id', auth()->id())->get();

        return Inertia::render('Teacher/Courses/Edit', compact('course', 'tokenTypes'));
    }

    public function update(Request $request, Course $course): RedirectResponse
    {
        $data = $request->validate([
            'title' => 'string|max:255',
            'description' => 'nullable|string',
            'start_time' => 'date',
            'end_time' => 'date|after:start_time',
            'timezone' => 'string',
            'max_participants' => 'nullable|integer|min:1',
            'visibility' => 'in:public,private,invite_only,token_gated',
            'token_type_id' => 'nullable|required_if:visibility,token_gated|exists:token_types,id',
            'access_code' => 'nullable|string|unique:courses,access_code,'.$course->id,
        ]);

        if (($data['visibility'] ?? $course->visibility) === 'private' && ! $course->access_code) {
            $data['access_code'] = Str::uuid();
        }

        $course->update($data);

        return redirect()->route('teacher.courses.index')->with('success', 'Course updated.');
    }

    public function destroy(Course $course): RedirectResponse
    {
        $course->delete();

        return redirect()->route('teacher.courses.index')->with('success', 'Course deleted.');
    }

    public function invite(Course $course, Request $request): RedirectResponse
    {
        $request->validate(['student_ids' => 'required|array', 'student_ids.*' => 'exists:users,id,role,student']);
        $course->invitations()->createMany(
            collect($request->student_ids)->map(fn ($id) => ['student_id' => $id])
        );

        return back()->with('success', 'Students invited.');
    }

    public function participants(Course $course): Response
    {
        $enrollments = $course->enrollments()->with('student')->get();

        return Inertia::render('Teacher/Courses/Participants', compact('course', 'enrollments'));
    }
}
