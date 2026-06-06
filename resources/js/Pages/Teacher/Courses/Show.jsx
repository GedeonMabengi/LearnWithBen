import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CoursesShow({ course }) {
    return (
        <AuthenticatedLayout>
            <Head title={course.title} />
            <div className="mb-4"><Link href="/teacher/courses" className="text-indigo-600">&larr; Back</Link></div>
            <h1 className="text-2xl font-bold">{course.title}</h1>
            <div className="mt-4 rounded bg-white p-4 shadow">
                <p>{course.description}</p>
                <p>Start: {new Date(course.start_time).toLocaleString()}</p>
                <p>End: {new Date(course.end_time).toLocaleString()}</p>
                <p>Visibility: {course.visibility}</p>
                {course.visibility === 'token_gated' && course.token_type && <p>Required token: {course.token_type.name}</p>}
                {course.visibility === 'private' && <p>Access Code: {course.access_code}</p>}
            </div>
            <div className="mt-4 space-x-2"><Link href={`/teacher/courses/${course.id}/participants`} className="rounded bg-indigo-600 px-4 py-2 text-white">View Participants</Link><Link href={`/teacher/courses/${course.id}/edit`} className="rounded bg-yellow-600 px-4 py-2 text-white">Edit</Link></div>
        </AuthenticatedLayout>
    );
}
