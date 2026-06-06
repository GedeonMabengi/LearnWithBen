<?php

namespace App\Http\Controllers\Api\V1\Student;

use App\Http\Controllers\Controller;
use App\Models\Resource;
use Illuminate\Http\JsonResponse;

class ResourceController extends Controller
{
    public function index(): JsonResponse
    {
        $resources = Resource::where(function ($query) {
            $query->where('visibility', 'public')
                ->orWhere(function ($q) {
                    $q->where('visibility', 'invite_only')
                        ->whereHas('accesses', fn ($a) => $a->where('student_id', auth()->id()));
                })
                ->orWhere(function ($q) {
                    $q->where('visibility', 'token_gated')
                        ->whereHas('tokenType.tokens', fn ($t) => $t->where('owner_id', auth()->id())->where('status', 'active'));
                });
        })->get();

        return response()->json($resources);
    }

    public function show(Resource $resource): JsonResponse
    {
        return response()->json($resource);
    }
}
