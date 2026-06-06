<?php

namespace App\Http\Controllers\Web\Student;

use App\Http\Controllers\Controller;
use App\Models\Resource;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class ResourceController extends Controller
{
    public function index(): Response
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

        return Inertia::render('Student/Resources/Index', compact('resources'));
    }

    public function show(Resource $resource): Response
    {
        if (! Gate::allows('view-resource', $resource)) {
            abort(404);
        }

        return Inertia::render('Student/Resources/Show', compact('resource'));
    }
}
