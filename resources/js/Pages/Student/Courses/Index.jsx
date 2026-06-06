import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function StudentCoursesIndex({ courses }) {
    return <AuthenticatedLayout><Head title="Courses" /><h1 className="mb-4 text-2xl font-bold">Available Courses</h1><div className="grid grid-cols-1 gap-4 md:grid-cols-2">{courses.map((course) => <div key={course.id} className="rounded bg-white p-4 shadow"><h2 className="font-semibold">{course.title}</h2><p>{new Date(course.start_time).toLocaleString()}</p><p className="text-sm text-gray-500">{course.visibility}</p><Link href={`/student/courses/${course.id}`} className="mt-2 inline-block text-indigo-600">View Details</Link></div>)}</div></AuthenticatedLayout>;
}
