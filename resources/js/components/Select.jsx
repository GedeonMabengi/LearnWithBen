import Label from './Label';
import ErrorMessage from './ErrorMessage';

export default function Select({
    label,
    name,
    options = [],
    placeholder = 'Select an option',
    value,
    onChange,
    error,
    required,
    className = '',
    ...props
}) {
    return (
        <div className="mb-4">
            {label && <Label htmlFor={name} required={required}>{label}</Label>}
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={`mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${error ? 'border-red-500' : ''} ${className}`}
                required={required}
                {...props}
            >
                {placeholder && <option value="">{placeholder}</option>}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <ErrorMessage message={error} />}
        </div>
    );
}
