import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ResourcesShow({ resource }) {
    return <AuthenticatedLayout><Head title={resource.title} /><div className="mb-4"><Link href="/teacher/resources" className="text-indigo-600">&larr; Back</Link></div><h1 className="text-2xl font-bold">{resource.title}</h1><div className="mt-4 rounded bg-white p-4 shadow"><p>{resource.description}</p><p>Visibility: {resource.visibility}</p><a href={resource.file_path} className="text-indigo-600 underline">Download</a></div></AuthenticatedLayout>;
}
