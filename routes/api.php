<?php

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\SocialAuthController;
use App\Http\Controllers\Api\V1\Student\CourseController as StudentCourseController;
use App\Http\Controllers\Api\V1\Student\DashboardController as StudentDashboardController;
use App\Http\Controllers\Api\V1\Student\EnrollmentController as StudentEnrollmentController;
use App\Http\Controllers\Api\V1\Student\NotificationController as StudentNotificationController;
use App\Http\Controllers\Api\V1\Student\PurchaseController as StudentPurchaseController;
use App\Http\Controllers\Api\V1\Student\RecordingController as StudentRecordingController;
use App\Http\Controllers\Api\V1\Student\ResourceController as StudentResourceController;
use App\Http\Controllers\Api\V1\Student\SkillController as StudentSkillController;
use App\Http\Controllers\Api\V1\Student\TokenController as StudentTokenController;
use App\Http\Controllers\Api\V1\Teacher\CourseController as TeacherCourseController;
use App\Http\Controllers\Api\V1\Teacher\DashboardController as TeacherDashboardController;
use App\Http\Controllers\Api\V1\Teacher\EnrollmentController as TeacherEnrollmentController;
use App\Http\Controllers\Api\V1\Teacher\NotificationController as TeacherNotificationController;
use App\Http\Controllers\Api\V1\Teacher\RecordingController as TeacherRecordingController;
use App\Http\Controllers\Api\V1\Teacher\ResourceController as TeacherResourceController;
use App\Http\Controllers\Api\V1\Teacher\SkillController as TeacherSkillController;
use App\Http\Controllers\Api\V1\Teacher\StudentController as TeacherStudentController;
use App\Http\Controllers\Api\V1\Teacher\TeacherNoteController;
use App\Http\Controllers\Api\V1\Teacher\TokenController as TeacherTokenController;
use App\Http\Controllers\Api\V1\Teacher\TokenTypeController as TeacherTokenTypeController;
use App\Http\Controllers\Webhook\LiveKitController;
use App\Http\Controllers\Webhook\PayPalController;
use App\Http\Controllers\Webhook\StripeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group.
|
*/

Route::prefix('v1')->name('api.v1.')->group(function () {
    // ---------- Auth ----------
    Route::post('/auth/register', [AuthController::class, 'register'])->name('auth.register');
    Route::post('/auth/login', [AuthController::class, 'login'])->name('auth.login');
    Route::post('/auth/refresh', [AuthController::class, 'refresh'])->name('auth.refresh');
    Route::post('/auth/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum')->name('auth.logout');

    // ---------- Social Auth ----------
    Route::post('/auth/social/google', [SocialAuthController::class, 'google'])->name('auth.social.google');
    Route::post('/auth/social/apple', [SocialAuthController::class, 'apple'])->name('auth.social.apple');

    // ---------- Authenticated ----------
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/user', [AuthController::class, 'user'])->name('user');

        // ----- Teacher routes -----
        Route::middleware('role:teacher')->prefix('teacher')->name('teacher.')->group(function () {
            Route::get('/dashboard', [TeacherDashboardController::class, 'index'])->name('dashboard');

            Route::apiResource('/token-types', TeacherTokenTypeController::class);
            Route::post('/token-types/{token_type}/generate', [TeacherTokenController::class, 'generate'])->name('token-types.generate');
            Route::get('/token-types/{token_type}/tokens', [TeacherTokenController::class, 'indexByType'])->name('token-types.tokens');

            Route::post('/tokens/{token}/assign', [TeacherTokenController::class, 'assign'])->name('tokens.assign');
            Route::post('/tokens/{token}/revoke', [TeacherTokenController::class, 'revoke'])->name('tokens.revoke');
            Route::get('/tokens/{token}/qr', [TeacherTokenController::class, 'qrCode'])->name('tokens.qr');

            Route::apiResource('/courses', TeacherCourseController::class);
            Route::post('/courses/{course}/invite', [TeacherCourseController::class, 'invite'])->name('courses.invite');
            Route::get('/courses/{course}/participants', [TeacherCourseController::class, 'participants'])->name('courses.participants');

            Route::post('/enrollments/{enrollment}/mark-attended', [TeacherEnrollmentController::class, 'markAttended'])->name('enrollments.mark-attended');
            Route::post('/enrollments/{enrollment}/mark-no-show', [TeacherEnrollmentController::class, 'markNoShow'])->name('enrollments.mark-no-show');
            Route::delete('/enrollments/{enrollment}', [TeacherEnrollmentController::class, 'destroy'])->name('enrollments.destroy');

            Route::apiResource('/resources', TeacherResourceController::class);
            Route::post('/resources/{resource}/grant-access', [TeacherResourceController::class, 'grantAccess'])->name('resources.grant-access');

            Route::apiResource('/recordings', TeacherRecordingController::class)->only(['index', 'store', 'destroy']);

            Route::apiResource('/skills', TeacherSkillController::class);
            Route::post('/skills/{skill}/validate/{student}', [TeacherSkillController::class, 'validateStudent'])->name('skills.validate');

            Route::get('/students', [TeacherStudentController::class, 'index'])->name('students.index');
            Route::get('/students/{student}', [TeacherStudentController::class, 'show'])->name('students.show');

            Route::get('/students/{student}/notes', [TeacherNoteController::class, 'index'])->name('students.notes.index');
            Route::post('/students/{student}/notes', [TeacherNoteController::class, 'store'])->name('students.notes.store');
            Route::put('/notes/{note}', [TeacherNoteController::class, 'update'])->name('notes.update');
            Route::delete('/notes/{note}', [TeacherNoteController::class, 'destroy'])->name('notes.destroy');

            Route::get('/notifications', [TeacherNotificationController::class, 'index'])->name('notifications.index');
            Route::post('/notifications/send', [TeacherNotificationController::class, 'send'])->name('notifications.send');
        });

        // ----- Student routes -----
        Route::middleware('role:student')->prefix('student')->name('student.')->group(function () {
            Route::get('/dashboard', [StudentDashboardController::class, 'index'])->name('dashboard');

            Route::get('/courses', [StudentCourseController::class, 'index'])->name('courses.index');
            Route::get('/courses/{course}', [StudentCourseController::class, 'show'])->name('courses.show');
            Route::post('/courses/{course}/enroll', [StudentEnrollmentController::class, 'store'])->name('courses.enroll');
            Route::delete('/enrollments/{enrollment}', [StudentEnrollmentController::class, 'destroy'])->name('enrollments.destroy');

            Route::get('/tokens', [StudentTokenController::class, 'index'])->name('tokens.index');
            Route::post('/tokens/redeem', [StudentTokenController::class, 'redeem'])->name('tokens.redeem');
            Route::post('/tokens/{token}/transfer', [StudentTokenController::class, 'transfer'])->name('tokens.transfer');
            Route::post('/tokens/claim', [StudentTokenController::class, 'claim'])->name('tokens.claim');

            Route::post('/token-types/{tokenType}/purchase', [StudentPurchaseController::class, 'checkout'])->name('purchase.checkout');
            Route::get('/purchase/success', [StudentPurchaseController::class, 'success'])->name('purchase.success');
            Route::get('/purchase/cancel', [StudentPurchaseController::class, 'cancel'])->name('purchase.cancel');

            Route::get('/resources', [StudentResourceController::class, 'index'])->name('resources.index');
            Route::get('/resources/{resource}', [StudentResourceController::class, 'show'])->name('resources.show');

            Route::get('/recordings', [StudentRecordingController::class, 'index'])->name('recordings.index');
            Route::get('/recordings/{recording}', [StudentRecordingController::class, 'show'])->name('recordings.show');

            Route::get('/skills', [StudentSkillController::class, 'index'])->name('skills.index');

            Route::get('/notifications', [StudentNotificationController::class, 'index'])->name('notifications.index');
        });

        // ---------- LiveKit ----------
        Route::post('/livekit/join-room', [App\Http\Controllers\Api\V1\LiveKitController::class, 'joinRoom'])->name('livekit.join-room');
    });

    // ---------- Webhooks ----------
    Route::post('/webhooks/stripe', [StripeController::class, 'handleWebhook'])->name('webhook.stripe');
    Route::post('/webhooks/paypal', [PayPalController::class, 'handleWebhook'])->name('webhook.paypal');
    Route::post('/webhooks/livekit', [LiveKitController::class, 'handleWebhook'])->name('webhook.livekit');
});

Route::fallback(function () {
    return response()->json(['message' => 'API endpoint not found.'], 404);
})->name('api.fallback');
