import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function SkillsEdit({ skill }) {
    const { data, setData, put, processing } = useForm({ name: skill.name, description: skill.description });
    function submit(e) { e.preventDefault(); put(`/teacher/skills/${skill.id}`); }
    return <AuthenticatedLayout><Head title={`Edit ${skill.name}`} /><h1 className="mb-4 text-2xl font-bold">Edit Skill</h1><form onSubmit={submit} className="max-w-lg rounded bg-white p-6 shadow"><div className="mb-4"><label className="block text-sm font-medium text-gray-700">Name</label><input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" required /></div><div className="mb-4"><label className="block text-sm font-medium text-gray-700">Description</label><textarea value={data.description} onChange={(e) => setData('description', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm"></textarea></div><button type="submit" disabled={processing} className="rounded bg-yellow-600 px-4 py-2 text-white">Update</button></form></AuthenticatedLayout>;
}
