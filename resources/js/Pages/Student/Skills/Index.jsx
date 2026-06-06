import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function StudentSkillsIndex({ skills }) {
    const { auth } = usePage().props;

    return (
        <AuthenticatedLayout>
            <Head title="My Progress" />
            <h1 className="mb-4 text-2xl font-bold">My Skills</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {skills.map((skill) => {
                    const studentSkill = skill.student_skills?.find((ss) => ss.student_id === auth.user.id);
                    return (
                        <div key={skill.id} className="rounded bg-white p-4 shadow">
                            <h2 className="font-semibold">{skill.name}</h2>
                            <p>{skill.description}</p>
                            {studentSkill ? <span className="text-green-600">Validated on {new Date(studentSkill.validated_at).toLocaleDateString()}</span> : <span className="text-red-500">Not yet validated</span>}
                        </div>
                    );
                })}
            </div>
        </AuthenticatedLayout>
    );
}
