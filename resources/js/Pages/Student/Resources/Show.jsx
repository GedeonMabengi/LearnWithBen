import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function StudentResourcesShow({ resource }) {
    return (
        <AuthenticatedLayout>
            <Head title={resource.title} />
            <div className="mb-4">
                <Link href="/student/resources" className="text-indigo-600">&larr; Back</Link>
            </div>
            <h1 className="text-2xl font-bold">{resource.title}</h1>
            <div className="bg-white p-4 shadow rounded mt-4">
                <p>{resource.description}</p>
                <p className="text-sm text-gray-500">Visibility: {resource.visibility}</p>
                <a
                    href={route('download.resource', resource.id)}
                    className="text-indigo-600 underline mt-2 inline-block"
                >
                    Download
                </a>
            </div>
        </AuthenticatedLayout>
    );
}
