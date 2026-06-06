import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Welcome() {
    return (
        <GuestLayout>
            <Head title="Welcome" />
            <div className="mt-10 text-center">
                <h1 className="text-4xl font-bold text-gray-800">Learn English Online</h1>
                <p className="mt-4 text-gray-600">Join live classes with a dedicated teacher.</p>
                <div className="mt-6 space-x-4">
                    <Link href="/login" className="rounded bg-indigo-600 px-4 py-2 text-white">
                        Login
                    </Link>
                    <Link href="/register" className="rounded bg-green-600 px-4 py-2 text-white">
                        Register
                    </Link>
                </div>
            </div>
        </GuestLayout>
    );
}
