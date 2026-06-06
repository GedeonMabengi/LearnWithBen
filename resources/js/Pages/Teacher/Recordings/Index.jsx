import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function RecordingsIndex({ recordings }) {
    return <AuthenticatedLayout><Head title="Recordings" /><h1 className="mb-4 text-2xl font-bold">Recordings</h1><table className="min-w-full rounded bg-white shadow"><thead><tr><th className="px-6 py-3 text-left">Course</th><th className="px-6 py-3 text-left">File URL</th><th className="px-6 py-3 text-left">Duration</th><th className="px-6 py-3 text-left">Actions</th></tr></thead><tbody>{recordings.map((rec) => <tr key={rec.id}><td className="px-6 py-4">{rec.course?.title}</td><td className="px-6 py-4"><a href={rec.file_url} className="text-indigo-600">Link</a></td><td className="px-6 py-4">{rec.duration ? `${rec.duration} s` : '-'}</td><td className="px-6 py-4"><Link href={`/teacher/recordings/${rec.id}`} method="delete" as="button" className="text-red-600">Delete</Link></td></tr>)}</tbody></table></AuthenticatedLayout>;
}
