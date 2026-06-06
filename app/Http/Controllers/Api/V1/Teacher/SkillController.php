<?php

namespace App\Http\Controllers\Api\V1\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Skill::where('teacher_id', auth()->id())->get());
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate(['name' => 'required|string', 'description' => 'nullable|string']);
        $data['teacher_id'] = auth()->id();

        return response()->json(Skill::create($data), 201);
    }

    public function show(Skill $skill): JsonResponse
    {
        return response()->json($skill);
    }

    public function update(Request $request, Skill $skill): JsonResponse
    {
        $skill->update($request->all());

        return response()->json($skill);
    }

    public function destroy(Skill $skill): JsonResponse
    {
        $skill->delete();

        return response()->json(null, 204);
    }

    public function validateStudent(Skill $skill, User $student): JsonResponse
    {
        $skill->studentSkills()->updateOrCreate(
            ['student_id' => $student->id],
            ['validated_by' => auth()->id(), 'validated_at' => now()]
        );

        return response()->json(['message' => 'Validated']);
    }
}
