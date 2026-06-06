<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Laravel\Socialite\Facades\Socialite;

class SocialiteController extends Controller
{
    /**
     * Redirect to Google authentication.
     */
    public function googleRedirect(): RedirectResponse
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Handle Google callback.
     */
    public function googleCallback(): RedirectResponse
    {
        try {
            $googleUser = Socialite::driver('google')->user();
        } catch (\Exception $e) {
            Log::error('Google auth error: ' . $e->getMessage());
            return redirect()->route('login')->withErrors(['email' => 'Google authentication failed.']);
        }

        $user = User::updateOrCreate(
            ['google_id' => $googleUser->getId()],
            [
                'name' => $googleUser->getName(),
                'email' => $googleUser->getEmail(),
                'google_id' => $googleUser->getId(),
                'role' => 'student',
            ]
        );

        Auth::login($user);

        return redirect()->route('dashboard');
    }

    /**
     * Redirect to Apple authentication.
     */
    public function appleRedirect(): RedirectResponse
    {
        return Socialite::driver('apple')->redirect();
    }

    /**
     * Handle Apple callback.
     */
    public function appleCallback(): RedirectResponse
    {
        try {
            $appleUser = Socialite::driver('apple')->user();
        } catch (\Exception $e) {
            Log::error('Apple auth error: ' . $e->getMessage());
            return redirect()->route('login')->withErrors(['email' => 'Apple authentication failed.']);
        }

        // Apple may not return email on subsequent logins
        $user = User::updateOrCreate(
            ['apple_id' => $appleUser->getId()],
            [
                'name' => $appleUser->getName() ?? 'Apple User',
                'email' => $appleUser->getEmail() ?? $appleUser->getId() . '@apple.local',
                'apple_id' => $appleUser->getId(),
                'role' => 'student',
            ]
        );

        Auth::login($user);

        return redirect()->route('dashboard');
    }
}
