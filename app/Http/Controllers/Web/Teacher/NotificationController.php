<?php

namespace App\Http\Controllers\Web\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class NotificationController extends Controller
{
    public function index(): Response
    {
        $notifications = Notification::where('notifiable_type', 'teacher')->latest()->get();

        return Inertia::render('Teacher/Notifications/Index', compact('notifications'));
    }

    public function send(Request $request): RedirectResponse
    {
        $request->validate([
            'title' => 'required|string',
            'body' => 'required|string',
            'student_ids' => 'nullable|array',
            'student_ids.*' => 'exists:users,id,role,student',
            'token_type_id' => 'nullable|exists:token_types,id',
        ]);

        return back()->with('success', 'Notification sent.');
    }
}
