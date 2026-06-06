<?php

namespace App\Http\Controllers\Api\V1\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CourseController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Course::where('teacher_id', auth()->id())->with('tokenType')->get());
    }

    public function store(Request $request): JsonResponse
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

        return response()->json(Course::create($data), 201);
    }

    public function show(Course $course): JsonResponse
    {
        return response()->json($course->load('tokenType', 'invitations.student'));
    }

    public function update(Request $request, Course $course): JsonResponse
    {
        $course->update($request->all());

        return response()->json($course);
    }

    public function destroy(Course $course): JsonResponse
    {
        $course->delete();

        return response()->json(null, 204);
    }

    public function invite(Course $course, Request $request): JsonResponse
    {
        $request->validate(['student_ids' => 'required|array', 'student_ids.*' => 'exists:users,id,role,student']);
        $course->invitations()->createMany(
            collect($request->student_ids)->map(fn ($id) => ['student_id' => $id])
        );

        return response()->json(['message' => 'Students invited']);
    }

    public function participants(Course $course): JsonResponse
    {
        return response()->json($course->enrollments()->with('student')->get());
    }
}
