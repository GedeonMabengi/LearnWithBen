import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function StudentRecordingsIndex({ recordings }) {
    return <AuthenticatedLayout><Head title="Recordings" /><h1 className="mb-4 text-2xl font-bold">Recordings</h1><table className="min-w-full rounded bg-white shadow"><thead><tr><th className="px-6 py-3 text-left">Course</th><th className="px-6 py-3 text-left">Duration</th><th className="px-6 py-3 text-left">Actions</th></tr></thead><tbody>{recordings.map((rec) => <tr key={rec.id}><td className="px-6 py-4">{rec.course?.title}</td><td className="px-6 py-4">{rec.duration}s</td><td className="px-6 py-4"><Link href={`/student/recordings/${rec.id}`} className="text-indigo-600">View</Link></td></tr>)}</tbody></table></AuthenticatedLayout>;
}
