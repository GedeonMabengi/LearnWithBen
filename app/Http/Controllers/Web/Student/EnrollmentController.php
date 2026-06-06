<?php

namespace App\Http\Controllers\Web\Student;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Enrollment;
use App\Models\Token;
use Illuminate\Http\RedirectResponse;

class EnrollmentController extends Controller
{
    public function store(Course $course): RedirectResponse
    {
        if ($course->max_participants && $course->enrollments()->where('status', 'registered')->count() >= $course->max_participants) {
            return back()->withErrors('Course is full.');
        }

        if ($course->visibility === 'token_gated') {
            $token = Token::where('token_type_id', $course->token_type_id)
                ->where('owner_id', auth()->id())
                ->where('status', 'active')
                ->first();

            if (! $token) {
                return back()->withErrors('You need a valid token to enroll.');
            }

            if ($token->remaining_uses !== null) {
                $token->decrement('remaining_uses');

                if ($token->remaining_uses <= 0) {
                    $token->status = 'used';
                    $token->save();
                }
            }

            Enrollment::create([
                'course_id' => $course->id,
                'student_id' => auth()->id(),
                'token_id' => $token->id,
                'status' => 'registered',
            ]);
        } else {
            Enrollment::create([
                'course_id' => $course->id,
                'student_id' => auth()->id(),
                'status' => 'registered',
            ]);
        }

        return redirect()->route('student.courses.index')->with('success', 'Enrolled successfully.');
    }

    public function destroy(Enrollment $enrollment): RedirectResponse
    {
        if ($enrollment->student_id !== auth()->id()) {
            abort(403);
        }

        $enrollment->status = 'cancelled';
        $enrollment->cancelled_at = now();
        $enrollment->save();

        return back()->with('success', 'Enrollment cancelled.');
    }
}
