<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
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

        $user = User::where('google_id', $googleUser->getId())
            ->orWhere('email', $googleUser->getEmail())
            ->first();

        if (! $user) {
            $user = new User([
                'password' => Hash::make(Str::random(32)),
                'role' => 'student',
            ]);
        }

        $user->forceFill([
            'name' => $googleUser->getName() ?: $googleUser->getNickname() ?: 'Google User',
            'email' => $googleUser->getEmail(),
            'email_verified_at' => now(),
            'google_id' => $googleUser->getId(),
            'avatar_url' => $googleUser->getAvatar(),
        ])->save();

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
        $email = $appleUser->getEmail() ?? $appleUser->getId().'@apple.local';

        $user = User::where('apple_id', $appleUser->getId())
            ->orWhere('email', $email)
            ->first();

        if (! $user) {
            $user = new User([
                'password' => Hash::make(Str::random(32)),
                'role' => 'student',
            ]);
        }

        $user->forceFill([
            'name' => $appleUser->getName() ?: $user->name ?: 'Apple User',
            'email' => $email,
            'email_verified_at' => now(),
            'apple_id' => $appleUser->getId(),
        ])->save();

        Auth::login($user);

        return redirect()->route('dashboard');
    }
}
