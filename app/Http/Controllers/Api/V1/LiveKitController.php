<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Livekit\AccessToken;
use Livekit\VideoGrant;

class LiveKitController extends Controller
{
    public function joinRoom(Request $request): JsonResponse
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id',
        ]);

        $course = Course::findOrFail($request->course_id);
        $roomName = 'course-'.$course->id;

        $accessToken = new AccessToken(env('LIVEKIT_API_KEY'), env('LIVEKIT_API_SECRET'));
        $accessToken->setIdentity(auth()->id().'-'.auth()->user()->name);
        $accessToken->setName(auth()->user()->name);

        $grant = new VideoGrant;
        $grant->setRoom($roomName);
        $accessToken->setVideoGrant($grant);

        return response()->json([
            'token' => $accessToken->toJwt(),
            'url' => env('LIVEKIT_HOST'),
            'room' => $roomName,
        ]);
    }
}
