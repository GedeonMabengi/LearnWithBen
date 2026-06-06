import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function StudentCoursesShow({ course }) {
    return <AuthenticatedLayout><Head title={course.title} /><div className="mb-4"><Link href="/student/courses" className="text-indigo-600">&larr; Back</Link></div><h1 className="text-2xl font-bold">{course.title}</h1><div className="mt-4 rounded bg-white p-4 shadow"><p>{course.description}</p><p>Start: {new Date(course.start_time).toLocaleString()}</p><p>End: {new Date(course.end_time).toLocaleString()}</p><p>Max participants: {course.max_participants ?? 'No limit'}</p><form method="post" action={`/student/courses/${course.id}/enroll`} className="mt-4"><button type="submit" className="rounded bg-indigo-600 px-4 py-2 text-white">Enroll</button></form></div></AuthenticatedLayout>;
}
