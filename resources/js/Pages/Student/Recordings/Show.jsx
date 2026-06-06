import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function StudentRecordingsShow({ recording }) {
    return <AuthenticatedLayout><Head title={`Recording - ${recording.course?.title}`} /><div className="mb-4"><Link href="/student/recordings" className="text-indigo-600">&larr; Back</Link></div><h1 className="text-2xl font-bold">Recording: {recording.course?.title}</h1><video controls className="mt-4 w-full max-w-2xl" src={recording.file_url}></video></AuthenticatedLayout>;
}
