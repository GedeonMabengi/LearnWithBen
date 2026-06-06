<?php

namespace App\Http\Controllers\Web\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SkillController extends Controller
{
    public function index(): Response
    {
        $skills = Skill::where('teacher_id', auth()->id())->get();

        return Inertia::render('Teacher/Skills/Index', compact('skills'));
    }

    public function create(): Response
    {
        return Inertia::render('Teacher/Skills/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);
        $data['teacher_id'] = auth()->id();
        Skill::create($data);

        return redirect()->route('teacher.skills.index')->with('success', 'Skill created.');
    }

    public function show(Skill $skill): Response
    {
        return Inertia::render('Teacher/Skills/Show', compact('skill'));
    }

    public function edit(Skill $skill): Response
    {
        return Inertia::render('Teacher/Skills/Edit', compact('skill'));
    }

    public function update(Request $request, Skill $skill): RedirectResponse
    {
        $skill->update($request->validate([
            'name' => 'string|max:255',
            'description' => 'nullable|string',
        ]));

        return redirect()->route('teacher.skills.index')->with('success', 'Skill updated.');
    }

    public function destroy(Skill $skill): RedirectResponse
    {
        $skill->delete();

        return redirect()->route('teacher.skills.index')->with('success', 'Skill deleted.');
    }

    public function validateStudent(Skill $skill, User $student): RedirectResponse
    {
        if ($student->role !== 'student') {
            abort(404);
        }

        $skill->studentSkills()->updateOrCreate(
            ['student_id' => $student->id],
            ['validated_by' => auth()->id(), 'validated_at' => now()]
        );

        return back()->with('success', 'Skill validated for student.');
    }
}
