import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ children }) {
    const { auth } = usePage().props;
    const user = auth.user;
    const [menuOpen, setMenuOpen] = useState(false);

    const teacherLinks = [
        { href: '/teacher/dashboard', label: 'Dashboard' },
        { href: '/teacher/token-types', label: 'Token Types' },
        { href: '/teacher/courses', label: 'Courses' },
        { href: '/teacher/resources', label: 'Resources' },
        { href: '/teacher/recordings', label: 'Recordings' },
        { href: '/teacher/skills', label: 'Skills' },
        { href: '/teacher/students', label: 'Students' },
        { href: '/teacher/notifications', label: 'Notifications' },
    ];

    const studentLinks = [
        { href: '/student/dashboard', label: 'Dashboard' },
        { href: '/student/courses', label: 'Courses' },
        { href: '/student/tokens', label: 'My Tokens' },
        { href: '/student/resources', label: 'Resources' },
        { href: '/student/recordings', label: 'Recordings' },
        { href: '/student/skills', label: 'Progress' },
        { href: '/student/notifications', label: 'Notifications' },
    ];

    const links = user.role === 'teacher' ? teacherLinks : studentLinks;

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <Link href="/dashboard" className="flex flex-shrink-0 items-center text-xl font-bold text-indigo-600">
                                EnglishApp
                            </Link>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-4 text-sm text-gray-500">{user.name}</span>
                            <Link href="/logout" method="post" as="button" className="text-sm text-red-500">
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="p-6">{children}</main>
        </div>
    );
}
