import { useEffect, useState } from 'react';
import Select from './Select';
import { detectUserTimezone, getCommonTimezones } from '@/Utils/timezone';

/**
 * Timezone selector component.
 * Can be used for course creation or user profile settings.
 */
export default function TimezonePicker({ label = 'Timezone', name = 'timezone', value, onChange, error, required = false, includeDetect = true }) {
    const [timezones] = useState(() => getCommonTimezones());
    const [selected, setSelected] = useState(value || detectUserTimezone());

    useEffect(() => {
        if (value) setSelected(value);
    }, [value]);

    const handleChange = (e) => {
        const val = e.target.value;
        setSelected(val);
        if (onChange) onChange({ target: { name, value: val } });
    };

    return (
        <div className="mb-4">
            <Select
                label={label}
                name={name}
                value={selected}
                onChange={handleChange}
                options={timezones}
                placeholder="Select timezone"
                error={error}
                required={required}
            />
            {includeDetect && (
                <button
                    type="button"
                    className="text-xs text-indigo-600 mt-1"
                    onClick={() => {
                        const detected = detectUserTimezone();
                        setSelected(detected);
                        if (onChange) onChange({ target: { name, value: detected } });
                    }}
                >
                    Use detected timezone ({detectUserTimezone()})
                </button>
            )}
        </div>
    );
}
