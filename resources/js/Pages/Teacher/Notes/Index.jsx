import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function NotesIndex({ student, notes }) {
    const { data, setData, post, processing } = useForm({ note: '', course_id: '' });
    function submit(e) { e.preventDefault(); post(`/teacher/students/${student.id}/notes`); }
    return <AuthenticatedLayout><Head title={`Notes for ${student.name}`} /><div className="mb-4"><Link href={`/teacher/students/${student.id}`} className="text-indigo-600">&larr; Back to Student</Link></div><h1 className="mb-4 text-2xl font-bold">Notes for {student.name}</h1><div className="mb-4 rounded bg-white p-4 shadow"><h2 className="mb-2 font-semibold">Add Note</h2><form onSubmit={submit} className="space-y-2"><textarea value={data.note} onChange={(e) => setData('note', e.target.value)} className="block w-full rounded border-gray-300 shadow-sm" placeholder="Write a note..." required></textarea><button type="submit" disabled={processing} className="rounded bg-indigo-600 px-4 py-2 text-white">Add Note</button></form></div><div className="space-y-2">{notes.map((note) => <div key={note.id} className="rounded bg-white p-4 shadow"><p>{note.note}</p><p className="text-xs text-gray-500">{note.created_at}</p>{note.course && <p className="text-xs text-gray-500">Course: {note.course.title}</p>}</div>)}</div></AuthenticatedLayout>;
}
