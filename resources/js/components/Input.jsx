import { forwardRef } from 'react';
import Label from './Label';
import ErrorMessage from './ErrorMessage';

const Input = forwardRef(({
    label,
    name,
    type = 'text',
    error,
    required,
    className = '',
    ...props
}, ref) => {
    return (
        <div className="mb-4">
            {label && <Label htmlFor={name} required={required}>{label}</Label>}
            <input
                ref={ref}
                id={name}
                name={name}
                type={type}
                className={`mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${error ? 'border-red-500' : ''} ${className}`}
                required={required}
                {...props}
            />
            {error && <ErrorMessage message={error} />}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
