import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function StudentResourcesIndex({ resources }) {
    return <AuthenticatedLayout><Head title="Resources" /><h1 className="mb-4 text-2xl font-bold">Resources</h1><div className="grid grid-cols-1 gap-4 md:grid-cols-2">{resources.map((res) => <div key={res.id} className="rounded bg-white p-4 shadow"><h2 className="font-semibold">{res.title}</h2><p className="text-sm text-gray-500">{res.visibility}</p><Link href={`/student/resources/${res.id}`} className="text-indigo-600">View</Link></div>)}</div></AuthenticatedLayout>;
}
