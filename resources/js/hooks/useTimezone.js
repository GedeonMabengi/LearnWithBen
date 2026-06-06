import { usePage } from '@inertiajs/react';
import { detectUserTimezone } from '@/Utils/timezone';

/**
 * Hook to get the current user's timezone.
 *
 * Priority:
 * 1. Authenticated user's timezone from DB (passed as prop 'auth.user.timezone')
 * 2. Detected from browser
 * 3. 'UTC' fallback
 */
export default function useTimezone() {
    const { auth } = usePage().props;
    const userTimezone = auth?.user?.timezone;

    return userTimezone || detectUserTimezone() || 'UTC';
}
