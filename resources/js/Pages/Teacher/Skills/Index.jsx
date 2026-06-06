import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function SkillsIndex({ skills }) {
    return <AuthenticatedLayout><Head title="Skills" /><div className="mb-4 flex items-center justify-between"><h1 className="text-2xl font-bold">Skills</h1><Link href="/teacher/skills/create" className="rounded bg-indigo-600 px-4 py-2 text-white">Add Skill</Link></div><table className="min-w-full rounded bg-white shadow"><thead><tr><th className="px-6 py-3 text-left">Name</th><th className="px-6 py-3 text-left">Actions</th></tr></thead><tbody>{skills.map((skill) => <tr key={skill.id}><td className="px-6 py-4">{skill.name}</td><td className="space-x-2 px-6 py-4"><Link href={`/teacher/skills/${skill.id}`} className="text-indigo-600">View</Link><Link href={`/teacher/skills/${skill.id}/edit`} className="text-yellow-600">Edit</Link><Link href={`/teacher/skills/${skill.id}`} method="delete" as="button" className="text-red-600">Delete</Link></td></tr>)}</tbody></table></AuthenticatedLayout>;
}
