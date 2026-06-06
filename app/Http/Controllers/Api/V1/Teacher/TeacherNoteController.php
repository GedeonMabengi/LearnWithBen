<?php

namespace App\Http\Controllers\Api\V1\Teacher;

use App\Http\Controllers\Controller;
use App\Models\TeacherNote;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TeacherNoteController extends Controller
{
    public function index(User $student): JsonResponse
    {
        return response()->json(TeacherNote::where('student_id', $student->id)->get());
    }

    public function store(User $student, Request $request): JsonResponse
    {
        $data = $request->validate(['note' => 'required|string', 'course_id' => 'nullable|exists:courses,id']);
        $data['teacher_id'] = auth()->id();
        $data['student_id'] = $student->id;

        return response()->json(TeacherNote::create($data), 201);
    }

    public function update(TeacherNote $note, Request $request): JsonResponse
    {
        $note->update($request->all());

        return response()->json($note);
    }

    public function destroy(TeacherNote $note): JsonResponse
    {
        $note->delete();

        return response()->json(null, 204);
    }
}
