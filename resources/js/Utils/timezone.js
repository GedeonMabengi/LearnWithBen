/**
 * Utility functions for timezone handling.
 */

import { format, fromZonedTime, toZonedTime } from 'date-fns-tz';
import { fr } from 'date-fns/locale';

/**
 * Get the user's detected timezone from the browser.
 */
export function detectUserTimezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

/**
 * Format a date string (ISO) to display in a given timezone.
 *
 * @param {string|Date} dateInput - ISO string or Date object (assumed UTC)
 * @param {string} formatStr - Desired format string (date-fns)
 * @param {string} timezone - IANA timezone identifier
 * @param {Object} options - Extra options (locale, etc.)
 * @returns {string}
 */
export function formatInTimezone(dateInput, formatStr = 'Pp', timezone = 'UTC', options = {}) {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    const zonedDate = toZonedTime(date, timezone);
    return format(zonedDate, formatStr, { timeZone: timezone, locale: options.locale || fr, ...options });
}

/**
 * Convert a local date/time from a specific timezone to UTC ISO string.
 *
 * @param {string|Date} dateInput - Local date in the given timezone
 * @param {string} timezone - Source timezone
 * @returns {string} ISO 8601 UTC string
 */
export function convertToUTC(dateInput, timezone) {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    const utcDate = fromZonedTime(date, timezone);
    return utcDate.toISOString();
}

/**
 * Get a list of common timezones with labels.
 */
export function getCommonTimezones() {
    return [
        { value: 'UTC', label: 'UTC' },
        { value: 'Europe/Paris', label: 'Europe/Paris (UTC+1/+2)' },
        { value: 'Europe/London', label: 'Europe/London (UTC+0/+1)' },
        { value: 'Europe/Berlin', label: 'Europe/Berlin (UTC+1/+2)' },
        { value: 'America/New_York', label: 'America/New_York (UTC-5/-4)' },
        { value: 'America/Chicago', label: 'America/Chicago (UTC-6/-5)' },
        { value: 'America/Denver', label: 'America/Denver (UTC-7/-6)' },
        { value: 'America/Los_Angeles', label: 'America/Los_Angeles (UTC-8/-7)' },
        { value: 'Asia/Tokyo', label: 'Asia/Tokyo (UTC+9)' },
        { value: 'Asia/Shanghai', label: 'Asia/Shanghai (UTC+8)' },
        { value: 'Asia/Kolkata', label: 'Asia/Kolkata (UTC+5:30)' },
        { value: 'Australia/Sydney', label: 'Australia/Sydney (UTC+10/+11)' },
        { value: 'Pacific/Auckland', label: 'Pacific/Auckland (UTC+12/+13)' },
        { value: 'Africa/Cairo', label: 'Africa/Cairo (UTC+2)' },
        { value: 'Africa/Lagos', label: 'Africa/Lagos (UTC+1)' },
    ];
}

/**
 * Get the offset abbreviation for a timezone at a given date.
 */
export function getTimezoneAbbreviation(timezone, date = new Date()) {
    const zonedDate = toZonedTime(date, timezone);
    const formatted = format(zonedDate, 'zzz', { timeZone: timezone });
    return formatted;
}
