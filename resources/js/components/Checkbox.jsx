export default function Checkbox({ label, name, checked, onChange, error, className = '', ...props }) {
    return (
        <div className="flex items-center mb-4">
            <input
                id={name}
                name={name}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className={`rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ${className}`}
                {...props}
            />
            {label && (
                <label htmlFor={name} className="ml-2 block text-sm text-gray-700">
                    {label}
                </label>
            )}
        </div>
    );
}
