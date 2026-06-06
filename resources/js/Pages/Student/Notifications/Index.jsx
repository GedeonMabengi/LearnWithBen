import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function StudentNotificationsIndex({ notifications }) {
    return <AuthenticatedLayout><Head title="Notifications" /><h1 className="mb-4 text-2xl font-bold">Notifications</h1><div className="space-y-2">{notifications?.data?.map((notif) => <div key={notif.id} className="rounded bg-white p-4 shadow"><p>{notif.data?.message}</p><p className="text-xs text-gray-500">{notif.created_at}</p></div>)}</div></AuthenticatedLayout>;
}
