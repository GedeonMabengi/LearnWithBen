<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\SocialiteController;
use App\Http\Controllers\Web\Student\CourseController as StudentCourseController;
use App\Http\Controllers\Web\Student\DashboardController as StudentDashboardController;
use App\Http\Controllers\Web\Student\EnrollmentController as StudentEnrollmentController;
use App\Http\Controllers\Web\Student\NotificationController as StudentNotificationController;
use App\Http\Controllers\Web\Student\PurchaseController;
use App\Http\Controllers\Web\Student\RecordingController as StudentRecordingController;
use App\Http\Controllers\Web\Student\ResourceController as StudentResourceController;
use App\Http\Controllers\Web\Student\SkillController as StudentSkillController;
use App\Http\Controllers\Web\Student\TokenController as StudentTokenController;
use App\Http\Controllers\Web\Teacher\CourseController;
use App\Http\Controllers\Web\Teacher\DashboardController as TeacherDashboardController;
use App\Http\Controllers\Web\Teacher\EnrollmentController as TeacherEnrollmentController;
use App\Http\Controllers\Web\Teacher\NotificationController as TeacherNotificationController;
use App\Http\Controllers\Web\Teacher\RecordingController as TeacherRecordingController;
use App\Http\Controllers\Web\Teacher\ResourceController as TeacherResourceController;
use App\Http\Controllers\Web\Teacher\SkillController;
use App\Http\Controllers\Web\Teacher\StudentController;
use App\Http\Controllers\Web\Teacher\TeacherNoteController;
use App\Http\Controllers\Web\Teacher\TokenController;
use App\Http\Controllers\Web\Teacher\TokenTypeController;
use App\Http\Controllers\Webhook\LiveKitController;
use App\Http\Controllers\Webhook\PayPalController;
use App\Http\Controllers\Webhook\StripeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group.
|
*/

// ---------- Landing page ----------
Route::get('/', function () {
    return inertia('Welcome');
})->name('home');

// ---------- Authentication (guest) ----------
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store']);
    Route::get('/register', [RegisteredUserController::class, 'create'])->name('register');
    Route::post('/register', [RegisteredUserController::class, 'store']);
    Route::get('/forgot-password', [PasswordResetLinkController::class, 'create'])->name('password.request');
    Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])->name('password.email');
    Route::get('/reset-password/{token}', [NewPasswordController::class, 'create'])->name('password.reset');
    Route::post('/reset-password', [NewPasswordController::class, 'store'])->name('password.update');
});

// ---------- Socialite ----------
Route::middleware('guest')->group(function () {
    Route::get('/auth/google/redirect', [SocialiteController::class, 'googleRedirect'])->name('auth.google');
    Route::get('/auth/google/callback', [SocialiteController::class, 'googleCallback']);
    Route::get('/auth/apple/redirect', [SocialiteController::class, 'appleRedirect'])->name('auth.apple');
    Route::post('/auth/apple/callback', [SocialiteController::class, 'appleCallback']);
});

// ---------- Authenticated routes ----------
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return request()->user()->role === 'teacher'
            ? redirect()->route('teacher.dashboard')
            : redirect()->route('student.dashboard');
    })->name('dashboard');

    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

    // ----- Teacher routes -----
    Route::prefix('teacher')->name('teacher.')->middleware('role:teacher')->group(function () {
        Route::get('/dashboard', [TeacherDashboardController::class, 'index'])->name('dashboard');

        Route::resource('/token-types', TokenTypeController::class);
        Route::post('/token-types/{token_type}/generate', [TokenController::class, 'generate'])->name('token-types.generate');
        Route::get('/token-types/{token_type}/tokens', [TokenController::class, 'indexByType'])->name('token-types.tokens');

        Route::post('/tokens/{token}/assign', [TokenController::class, 'assign'])->name('tokens.assign');
        Route::post('/tokens/{token}/revoke', [TokenController::class, 'revoke'])->name('tokens.revoke');
        Route::get('/tokens/{token}/qr', [TokenController::class, 'qrCode'])->name('tokens.qr');

        Route::resource('/courses', CourseController::class);
        Route::post('/courses/{course}/invite', [CourseController::class, 'invite'])->name('courses.invite');
        Route::get('/courses/{course}/participants', [CourseController::class, 'participants'])->name('courses.participants');

        Route::post('/enrollments/{enrollment}/mark-attended', [TeacherEnrollmentController::class, 'markAttended'])->name('enrollments.mark-attended');
        Route::post('/enrollments/{enrollment}/mark-no-show', [TeacherEnrollmentController::class, 'markNoShow'])->name('enrollments.mark-no-show');
        Route::delete('/enrollments/{enrollment}', [TeacherEnrollmentController::class, 'destroy'])->name('enrollments.destroy');

        Route::resource('/resources', TeacherResourceController::class);
        Route::post('/resources/{resource}/grant-access', [TeacherResourceController::class, 'grantAccess'])->name('resources.grant-access');

        Route::get('/recordings', [TeacherRecordingController::class, 'index'])->name('recordings.index');
        Route::post('/recordings', [TeacherRecordingController::class, 'store'])->name('recordings.store');
        Route::delete('/recordings/{recording}', [TeacherRecordingController::class, 'destroy'])->name('recordings.destroy');

        Route::resource('/skills', SkillController::class);
        Route::post('/skills/{skill}/validate/{student}', [SkillController::class, 'validateStudent'])->name('skills.validate');

        Route::get('/students', [StudentController::class, 'index'])->name('students.index');
        Route::get('/students/{student}', [StudentController::class, 'show'])->name('students.show');

        Route::get('/students/{student}/notes', [TeacherNoteController::class, 'index'])->name('students.notes.index');
        Route::post('/students/{student}/notes', [TeacherNoteController::class, 'store'])->name('students.notes.store');
        Route::put('/notes/{note}', [TeacherNoteController::class, 'update'])->name('notes.update');
        Route::delete('/notes/{note}', [TeacherNoteController::class, 'destroy'])->name('notes.destroy');

        Route::get('/notifications', [TeacherNotificationController::class, 'index'])->name('notifications.index');
        Route::post('/notifications/send', [TeacherNotificationController::class, 'send'])->name('notifications.send');
    });

    // ----- Student routes -----
    Route::prefix('student')->name('student.')->middleware('role:student')->group(function () {
        Route::get('/dashboard', [StudentDashboardController::class, 'index'])->name('dashboard');

        Route::get('/courses', [StudentCourseController::class, 'index'])->name('courses.index');
        Route::get('/courses/{course}', [StudentCourseController::class, 'show'])->name('courses.show');
        Route::post('/courses/{course}/enroll', [StudentEnrollmentController::class, 'store'])->name('courses.enroll');
        Route::delete('/enrollments/{enrollment}', [StudentEnrollmentController::class, 'destroy'])->name('enrollments.destroy');

        Route::get('/tokens', [StudentTokenController::class, 'index'])->name('tokens.index');
        Route::post('/tokens/redeem', [StudentTokenController::class, 'redeem'])->name('tokens.redeem');
        Route::post('/tokens/{token}/transfer', [StudentTokenController::class, 'transfer'])->name('tokens.transfer');
        Route::post('/tokens/claim', [StudentTokenController::class, 'claim'])->name('tokens.claim');

        Route::post('/token-types/{tokenType}/purchase', [PurchaseController::class, 'checkout'])->name('purchase.checkout');
        Route::get('/purchase/success', [PurchaseController::class, 'success'])->name('purchase.success');
        Route::get('/purchase/cancel', [PurchaseController::class, 'cancel'])->name('purchase.cancel');

        Route::get('/resources', [StudentResourceController::class, 'index'])->name('resources.index');
        Route::get('/resources/{resource}', [StudentResourceController::class, 'show'])->name('resources.show');

        Route::get('/recordings', [StudentRecordingController::class, 'index'])->name('recordings.index');
        Route::get('/recordings/{recording}', [StudentRecordingController::class, 'show'])->name('recordings.show');

        Route::get('/skills', [StudentSkillController::class, 'index'])->name('skills.index');

        Route::get('/notifications', [StudentNotificationController::class, 'index'])->name('notifications.index');
    });
});

// ---------- Webhooks ----------
Route::post('/webhooks/stripe', [StripeController::class, 'handleWebhook'])->name('webhook.stripe');
Route::post('/webhooks/paypal', [PayPalController::class, 'handleWebhook'])->name('webhook.paypal');
Route::post('/webhooks/livekit', [LiveKitController::class, 'handleWebhook'])->name('webhook.livekit');

require __DIR__.'/settings.php';
