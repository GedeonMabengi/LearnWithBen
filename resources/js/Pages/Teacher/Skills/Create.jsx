import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function SkillsCreate() {
    const { data, setData, post, processing } = useForm({ name: '', description: '' });
    function submit(e) { e.preventDefault(); post('/teacher/skills'); }
    return <AuthenticatedLayout><Head title="Create Skill" /><h1 className="mb-4 text-2xl font-bold">Create Skill</h1><form onSubmit={submit} className="max-w-lg rounded bg-white p-6 shadow"><div className="mb-4"><label className="block text-sm font-medium text-gray-700">Name</label><input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" required /></div><div className="mb-4"><label className="block text-sm font-medium text-gray-700">Description</label><textarea value={data.description} onChange={(e) => setData('description', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm"></textarea></div><button type="submit" disabled={processing} className="rounded bg-indigo-600 px-4 py-2 text-white">Create</button></form></AuthenticatedLayout>;
}
