import { Link } from '@inertiajs/react';

const baseClasses = 'inline-flex items-center justify-center px-4 py-2 rounded font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500',
    link: 'text-indigo-600 hover:text-indigo-800 underline',
};

const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
};

export default function Button({
    variant = 'primary',
    size = 'md',
    type = 'button',
    href,
    method,
    as,
    className = '',
    children,
    ...props
}) {
    const computedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

    if (href) {
        return (
            <Link
                href={href}
                method={method}
                as={as || 'a'}
                className={computedClasses}
                {...props}
            >
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={computedClasses} {...props}>
            {children}
        </button>
    );
}
