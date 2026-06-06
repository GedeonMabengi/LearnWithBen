<?php

namespace App\Http\Controllers\Web\Student;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class NotificationController extends Controller
{
    public function index(): Response
    {
        $notifications = auth()->user()->notifications()->paginate(20);

        return Inertia::render('Student/Notifications/Index', compact('notifications'));
    }
}
