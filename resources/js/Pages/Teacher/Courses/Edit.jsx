import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CoursesEdit({ course }) {
    const { data, setData, put, processing } = useForm({ title: course.title, description: course.description, start_time: course.start_time?.slice(0, 16), end_time: course.end_time?.slice(0, 16), timezone: course.timezone, max_participants: course.max_participants || '', visibility: course.visibility, token_type_id: course.token_type_id || '', access_code: course.access_code });
    function submit(e) { e.preventDefault(); put(`/teacher/courses/${course.id}`); }
    return (
        <AuthenticatedLayout>
            <Head title={`Edit ${course.title}`} />
            <h1 className="mb-4 text-2xl font-bold">Edit Course</h1>
            <form onSubmit={submit} className="max-w-lg rounded bg-white p-6 shadow">
                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">Title</label><input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" required /></div>
                <button type="submit" disabled={processing} className="rounded bg-yellow-600 px-4 py-2 text-white">Update</button>
            </form>
        </AuthenticatedLayout>
    );
}
