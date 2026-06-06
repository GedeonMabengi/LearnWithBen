import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ResourcesIndex({ resources }) {
    return <AuthenticatedLayout><Head title="Resources" /><div className="mb-4 flex items-center justify-between"><h1 className="text-2xl font-bold">Resources</h1><Link href="/teacher/resources/create" className="rounded bg-indigo-600 px-4 py-2 text-white">Upload New</Link></div><table className="min-w-full rounded bg-white shadow"><thead><tr><th className="px-6 py-3 text-left">Title</th><th className="px-6 py-3 text-left">Visibility</th><th className="px-6 py-3 text-left">Actions</th></tr></thead><tbody>{resources.map((res) => <tr key={res.id}><td className="px-6 py-4">{res.title}</td><td className="px-6 py-4">{res.visibility}</td><td className="space-x-2 px-6 py-4"><Link href={`/teacher/resources/${res.id}`} className="text-indigo-600">View</Link><Link href={`/teacher/resources/${res.id}/edit`} className="text-yellow-600">Edit</Link><Link href={`/teacher/resources/${res.id}`} method="delete" as="button" className="text-red-600">Delete</Link></td></tr>)}</tbody></table></AuthenticatedLayout>;
}
