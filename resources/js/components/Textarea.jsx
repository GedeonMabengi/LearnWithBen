import Label from './Label';
import ErrorMessage from './ErrorMessage';

export default function Textarea({
    label,
    name,
    value,
    onChange,
    rows = 3,
    error,
    required,
    className = '',
    ...props
}) {
    return (
        <div className="mb-4">
            {label && <Label htmlFor={name} required={required}>{label}</Label>}
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                rows={rows}
                className={`mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${error ? 'border-red-500' : ''} ${className}`}
                required={required}
                {...props}
            />
            {error && <ErrorMessage message={error} />}
        </div>
    );
}
