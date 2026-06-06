<?php

namespace App\Http\Controllers\Api\V1\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Resource as ResourceModel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ResourceController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(ResourceModel::where('teacher_id', auth()->id())->get());
    }

    public function store(Request $request): JsonResponse
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

        return response()->json(ResourceModel::create($data), 201);
    }

    public function show(ResourceModel $resource): JsonResponse
    {
        return response()->json($resource);
    }

    public function update(Request $request, ResourceModel $resource): JsonResponse
    {
        $resource->update($request->all());

        return response()->json($resource);
    }

    public function destroy(ResourceModel $resource): JsonResponse
    {
        Storage::delete($resource->file_path);
        $resource->delete();

        return response()->json(null, 204);
    }

    public function grantAccess(ResourceModel $resource, Request $request): JsonResponse
    {
        $request->validate(['student_ids' => 'required|array', 'student_ids.*' => 'exists:users,id,role,student']);
        $resource->accesses()->createMany(
            collect($request->student_ids)->map(fn ($id) => ['student_id' => $id])
        );

        return response()->json(['message' => 'Access granted']);
    }
}
