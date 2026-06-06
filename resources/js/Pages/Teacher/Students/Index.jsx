import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function StudentsIndex({ students }) {
    return <AuthenticatedLayout><Head title="Students" /><h1 className="mb-4 text-2xl font-bold">Students</h1><table className="min-w-full rounded bg-white shadow"><thead><tr><th className="px-6 py-3 text-left">Name</th><th className="px-6 py-3 text-left">Email</th><th className="px-6 py-3 text-left">Timezone</th><th className="px-6 py-3 text-left">Actions</th></tr></thead><tbody>{students.data.map((student) => <tr key={student.id}><td className="px-6 py-4">{student.name}</td><td className="px-6 py-4">{student.email}</td><td className="px-6 py-4">{student.timezone}</td><td className="px-6 py-4"><Link href={`/teacher/students/${student.id}`} className="text-indigo-600">View</Link></td></tr>)}</tbody></table></AuthenticatedLayout>;
}
