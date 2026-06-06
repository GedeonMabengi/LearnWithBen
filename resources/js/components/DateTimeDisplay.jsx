import PropTypes from 'prop-types';
import { formatInTimezone } from '@/Utils/timezone';
import useTimezone from '@/hooks/useTimezone';

/**
 * Display a date/time in the user's timezone.
 *
 * @param {Object} props
 * @param {string|Date} props.value - ISO string or Date (assumed UTC)
 * @param {string} [props.format='Pp'] - date-fns format string
 * @param {boolean} [props.showTimeZone=false] - append timezone abbreviation
 * @param {string} [props.className]
 */
export default function DateTimeDisplay({ value, format = 'Pp', showTimeZone = false, className = '' }) {
    const timezone = useTimezone();
    const formatted = formatInTimezone(value, format, timezone);
    const tzAbbr = showTimeZone ? ` (${formatInTimezone(value, 'zzz', timezone)})` : '';

    return <span className={className}>{formatted}{tzAbbr}</span>;
}

DateTimeDisplay.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    format: PropTypes.string,
    showTimeZone: PropTypes.bool,
    className: PropTypes.string,
};
