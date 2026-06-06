import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white p-4 shadow">
                <Link href="/" className="text-xl font-bold text-indigo-600">
                    EnglishApp
                </Link>
            </nav>
            <main className="p-6">{children}</main>
        </div>
    );
}
