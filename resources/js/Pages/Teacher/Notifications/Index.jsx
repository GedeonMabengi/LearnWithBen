import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function NotificationsIndex() {
    return <AuthenticatedLayout><Head title="Notifications" /><h1 className="mb-4 text-2xl font-bold">Notifications Sent</h1><div className="rounded bg-white p-4 shadow"><p>Notification history will appear here.</p></div></AuthenticatedLayout>;
}
