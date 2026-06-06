import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function TokensIndex({ tokenType, tokens }) {
    return (
        <AuthenticatedLayout>
            <Head title={`Tokens of ${tokenType.name}`} />
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Tokens: {tokenType.name}</h1>
                <form method="post" action={`/teacher/token-types/${tokenType.id}/generate`} className="inline">
                    <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]').content} />
                    <input type="number" name="count" defaultValue="1" min="1" className="w-20 rounded border-gray-300" />
                    <button type="submit" className="ml-2 rounded bg-green-600 px-4 py-2 text-white">Generate</button>
                </form>
            </div>
            <table className="min-w-full rounded bg-white shadow">
                <thead><tr><th className="px-6 py-3 text-left">Code</th><th className="px-6 py-3 text-left">Owner</th><th className="px-6 py-3 text-left">Status</th><th className="px-6 py-3 text-left">Remaining</th><th className="px-6 py-3 text-left">Actions</th></tr></thead>
                <tbody>{tokens.map((tok) => <tr key={tok.id}><td className="px-6 py-4">{tok.code}</td><td className="px-6 py-4">{tok.owner?.name || 'Unassigned'}</td><td className="px-6 py-4">{tok.status}</td><td className="px-6 py-4">{tok.remaining_uses ?? 'Unlimited'}</td><td className="space-x-2 px-6 py-4">{!tok.owner && <button className="text-indigo-600">Assign</button>}<Link href={`/teacher/tokens/${tok.id}/qr`} className="text-indigo-600">QR</Link><button className="text-red-600">Revoke</button></td></tr>)}</tbody>
            </table>
        </AuthenticatedLayout>
    );
}
