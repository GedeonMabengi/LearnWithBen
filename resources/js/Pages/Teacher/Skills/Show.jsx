import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function SkillsShow({ skill }) {
    return <AuthenticatedLayout><Head title={skill.name} /><div className="mb-4"><Link href="/teacher/skills" className="text-indigo-600">&larr; Back</Link></div><h1 className="text-2xl font-bold">{skill.name}</h1><p className="mt-2">{skill.description}</p></AuthenticatedLayout>;
}
