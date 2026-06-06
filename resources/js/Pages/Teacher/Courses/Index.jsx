import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CoursesIndex({ courses }) {
    return (
        <AuthenticatedLayout>
            <Head title="Courses" />
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold">My Courses</h1>
                <Link href="/teacher/courses/create" className="rounded bg-indigo-600 px-4 py-2 text-white">Create Course</Link>
            </div>
            <div className="rounded bg-white shadow">
                <table className="min-w-full">
                    <thead><tr><th className="px-6 py-3 text-left">Title</th><th className="px-6 py-3 text-left">Date</th><th className="px-6 py-3 text-left">Visibility</th><th className="px-6 py-3 text-left">Actions</th></tr></thead>
                    <tbody>{courses.map((course) => <tr key={course.id}><td className="px-6 py-4">{course.title}</td><td className="px-6 py-4">{new Date(course.start_time).toLocaleString()}</td><td className="px-6 py-4">{course.visibility}</td><td className="space-x-2 px-6 py-4"><Link href={`/teacher/courses/${course.id}`} className="text-indigo-600">View</Link><Link href={`/teacher/courses/${course.id}/edit`} className="text-yellow-600">Edit</Link><Link href={`/teacher/courses/${course.id}`} method="delete" as="button" className="text-red-600">Delete</Link></td></tr>)}</tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
