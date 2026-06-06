<?php

namespace App\Http\Controllers\Web\Teacher;

use App\Http\Controllers\Controller;
use App\Models\TokenType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TokenTypeController extends Controller
{
    public function index(): Response
    {
        $tokenTypes = TokenType::where('teacher_id', auth()->id())->get();

        return Inertia::render('Teacher/TokenTypes/Index', compact('tokenTypes'));
    }

    public function create(): Response
    {
        return Inertia::render('Teacher/TokenTypes/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|in:single,pack,series,subscription',
            'validity_type' => 'required|in:date_range,usage_count,both',
            'valid_from' => 'nullable|date',
            'valid_until' => 'nullable|date|after:valid_from',
            'max_uses' => 'nullable|integer|min:1',
            'price' => 'nullable|integer|min:0',
            'currency' => 'nullable|string|size:3',
            'is_transferable' => 'boolean',
        ]);

        $data['teacher_id'] = auth()->id();
        TokenType::create($data);

        return redirect()->route('teacher.token-types.index')->with('success', 'Token type created.');
    }

    public function show(TokenType $tokenType): Response
    {
        return Inertia::render('Teacher/TokenTypes/Show', compact('tokenType'));
    }

    public function edit(TokenType $tokenType): Response
    {
        return Inertia::render('Teacher/TokenTypes/Edit', compact('tokenType'));
    }

    public function update(Request $request, TokenType $tokenType): RedirectResponse
    {
        $data = $request->validate([
            'name' => 'string|max:255',
            'type' => 'in:single,pack,series,subscription',
            'validity_type' => 'in:date_range,usage_count,both',
            'valid_from' => 'nullable|date',
            'valid_until' => 'nullable|date|after:valid_from',
            'max_uses' => 'nullable|integer|min:1',
            'price' => 'nullable|integer|min:0',
            'currency' => 'nullable|string|size:3',
            'is_transferable' => 'boolean',
        ]);

        $tokenType->update($data);

        return redirect()->route('teacher.token-types.index')->with('success', 'Token type updated.');
    }

    public function destroy(TokenType $tokenType): RedirectResponse
    {
        $tokenType->delete();

        return redirect()->route('teacher.token-types.index')->with('success', 'Token type deleted.');
    }
}
