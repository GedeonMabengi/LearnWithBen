import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function TeacherDashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Teacher Dashboard" />
            <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
            <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded bg-white p-4 shadow">Active Students: --</div>
                <div className="rounded bg-white p-4 shadow">Courses this week: --</div>
                <div className="rounded bg-white p-4 shadow">Revenue: --</div>
            </div>
        </AuthenticatedLayout>
    );
}
