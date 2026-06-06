import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Participants({ course, enrollments }) {
    return (
        <AuthenticatedLayout>
            <Head title={`Participants - ${course.title}`} />
            <div className="mb-4"><Link href={`/teacher/courses/${course.id}`} className="text-indigo-600">&larr; Back to Course</Link></div>
            <h1 className="mb-4 text-2xl font-bold">Participants</h1>
            <table className="min-w-full rounded bg-white shadow"><thead><tr><th className="px-6 py-3 text-left">Student</th><th className="px-6 py-3 text-left">Status</th><th className="px-6 py-3 text-left">Actions</th></tr></thead><tbody>{enrollments.map((enrollment) => <tr key={enrollment.id}><td className="px-6 py-4">{enrollment.student?.name}</td><td className="px-6 py-4">{enrollment.status}</td><td className="space-x-2 px-6 py-4">{enrollment.status === 'registered' && <><button className="text-green-600">Mark Attended</button><button className="text-red-600">No Show</button></>}</td></tr>)}</tbody></table>
        </AuthenticatedLayout>
    );
}
