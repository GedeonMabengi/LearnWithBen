<?php

namespace App\Http\Controllers\Web\Student;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Token;
use Inertia\Inertia;
use Inertia\Response;

class CourseController extends Controller
{
    public function index(): Response
    {
        $courses = Course::where('visibility', 'public')
            ->orWhere(function ($query) {
                $query->where('visibility', 'invite_only')
                    ->whereHas('invitations', fn ($q) => $q->where('student_id', auth()->id()));
            })
            ->orWhere(function ($query) {
                $query->where('visibility', 'token_gated')
                    ->whereHas('tokenType.tokens', fn ($q) => $q->where('owner_id', auth()->id())->where('status', 'active'));
            })
            ->get();

        return Inertia::render('Student/Courses/Index', compact('courses'));
    }

    public function show(Course $course): Response
    {
        $this->authorizeStudentAccess($course);

        return Inertia::render('Student/Courses/Show', compact('course'));
    }

    protected function authorizeStudentAccess(Course $course): void
    {
        if ($course->visibility === 'private') {
            abort(404);
        } elseif ($course->visibility === 'invite_only') {
            if (! $course->invitations()->where('student_id', auth()->id())->exists()) {
                abort(404);
            }
        } elseif ($course->visibility === 'token_gated') {
            $hasToken = Token::where('token_type_id', $course->token_type_id)
                ->where('owner_id', auth()->id())
                ->where('status', 'active')
                ->exists();

            if (! $hasToken) {
                abort(404);
            }
        }
    }
}
