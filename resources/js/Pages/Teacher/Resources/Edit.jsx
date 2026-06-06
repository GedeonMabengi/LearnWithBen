import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ResourcesEdit({ resource }) {
    const { data, setData, put, processing } = useForm({ title: resource.title, description: resource.description, visibility: resource.visibility, token_type_id: resource.token_type_id || '' });
    function submit(e) { e.preventDefault(); put(`/teacher/resources/${resource.id}`); }
    return <AuthenticatedLayout><Head title={`Edit ${resource.title}`} /><h1 className="mb-4 text-2xl font-bold">Edit Resource</h1><form onSubmit={submit} className="max-w-lg rounded bg-white p-6 shadow"><div className="mb-4"><label className="block text-sm font-medium text-gray-700">Title</label><input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" required /></div><button type="submit" disabled={processing} className="rounded bg-yellow-600 px-4 py-2 text-white">Update</button></form></AuthenticatedLayout>;
}
