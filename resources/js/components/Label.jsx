export default function Label({ htmlFor, required, children, className = '' }) {
    return (
        <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 ${className}`}>
            {children}
            {required && <span className="text-red-500 ml-1">*</span>}
        </label>
    );
}
