import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function StudentDashboard() {
    return <AuthenticatedLayout><Head title="Dashboard" /><h1 className="text-3xl font-bold">Student Dashboard</h1><div className="mt-6 grid grid-cols-2 gap-4"><div className="rounded bg-white p-4 shadow">Upcoming Courses: --</div><div className="rounded bg-white p-4 shadow">Tokens: --</div></div></AuthenticatedLayout>;
}
