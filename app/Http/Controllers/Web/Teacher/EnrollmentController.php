<?php

namespace App\Http\Controllers\Web\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Enrollment;
use Illuminate\Http\RedirectResponse;

class EnrollmentController extends Controller
{
    public function markAttended(Enrollment $enrollment): RedirectResponse
    {
        $enrollment->status = 'attended';
        $enrollment->save();

        return back()->with('success', 'Marked as attended.');
    }

    public function markNoShow(Enrollment $enrollment): RedirectResponse
    {
        $enrollment->status = 'no_show';
        $enrollment->save();

        return back()->with('success', 'Marked as no-show.');
    }

    public function destroy(Enrollment $enrollment): RedirectResponse
    {
        $enrollment->delete();

        return back()->with('success', 'Enrollment removed.');
    }
}
