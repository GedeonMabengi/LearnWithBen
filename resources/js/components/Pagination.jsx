import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {
    if (!links || links.length === 0) return null;

    return (
        <nav className="mt-4 flex justify-center">
            <div className="flex space-x-1">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url || '#'}
                        preserveScroll
                        className={`px-3 py-1 rounded text-sm font-medium ${
                            link.active
                                ? 'bg-indigo-600 text-white'
                                : link.url
                                ? 'text-gray-700 hover:bg-gray-100'
                                : 'text-gray-400 cursor-not-allowed'
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>
        </nav>
    );
}
