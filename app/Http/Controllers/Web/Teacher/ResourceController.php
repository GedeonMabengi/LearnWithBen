<?php

namespace App\Http\Controllers\Web\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Resource as ResourceModel;
use App\Models\TokenType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ResourceController extends Controller
{
    public function index(): Response
    {
        $resources = ResourceModel::where('teacher_id', auth()->id())->with('tokenType')->get();

        return Inertia::render('Teacher/Resources/Index', compact('resources'));
    }

    public function create(): Response
    {
        $tokenTypes = TokenType::where('teacher_id', auth()->id())->get();

        return Inertia::render('Teacher/Resources/Create', compact('tokenTypes'));
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'file' => 'required|file',
            'visibility' => 'required|in:public,private,invite_only,token_gated',
            'token_type_id' => 'nullable|required_if:visibility,token_gated|exists:token_types,id',
        ]);

        $data['file_path'] = $request->file('file')->store('resources');
        $data['teacher_id'] = auth()->id();
        $data['access_code'] = $data['visibility'] === 'private' ? Str::uuid() : null;

        ResourceModel::create($data);

        return redirect()->route('teacher.resources.index')->with('success', 'Resource uploaded.');
    }

    public function show(ResourceModel $resource): Response
    {
        return Inertia::render('Teacher/Resources/Show', compact('resource'));
    }

    public function edit(ResourceModel $resource): Response
    {
        $tokenTypes = TokenType::where('teacher_id', auth()->id())->get();

        return Inertia::render('Teacher/Resources/Edit', compact('resource', 'tokenTypes'));
    }

    public function update(Request $request, ResourceModel $resource): RedirectResponse
    {
        $data = $request->validate([
            'title' => 'string|max:255',
            'description' => 'nullable|string',
            'visibility' => 'in:public,private,invite_only,token_gated',
            'token_type_id' => 'nullable|required_if:visibility,token_gated|exists:token_types,id',
        ]);

        $resource->update($data);

        return redirect()->route('teacher.resources.index')->with('success', 'Resource updated.');
    }

    public function destroy(ResourceModel $resource): RedirectResponse
    {
        Storage::delete($resource->file_path);
        $resource->delete();

        return redirect()->route('teacher.resources.index')->with('success', 'Resource deleted.');
    }

    public function grantAccess(ResourceModel $resource, Request $request): RedirectResponse
    {
        $request->validate(['student_ids' => 'required|array', 'student_ids.*' => 'exists:users,id,role,student']);
        $resource->accesses()->createMany(
            collect($request->student_ids)->map(fn ($id) => ['student_id' => $id])
        );

        return back()->with('success', 'Access granted.');
    }
}
