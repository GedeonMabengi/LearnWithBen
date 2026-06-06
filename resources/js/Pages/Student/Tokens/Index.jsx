import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function StudentTokensIndex({ tokens }) {
    const { data, setData, post } = useForm({ code: '' });
    function redeem(e) { e.preventDefault(); post('/student/tokens/redeem'); }
    return <AuthenticatedLayout><Head title="My Tokens" /><h1 className="mb-4 text-2xl font-bold">My Tokens</h1><div className="mb-4 rounded bg-white p-4 shadow"><form onSubmit={redeem} className="flex space-x-2"><input type="text" value={data.code} onChange={(e) => setData('code', e.target.value)} placeholder="Enter token code" className="flex-1 rounded border-gray-300 shadow-sm" required /><button type="submit" className="rounded bg-indigo-600 px-4 py-2 text-white">Redeem</button></form></div><table className="min-w-full rounded bg-white shadow"><thead><tr><th className="px-6 py-3 text-left">Type</th><th className="px-6 py-3 text-left">Status</th><th className="px-6 py-3 text-left">Remaining Uses</th><th className="px-6 py-3 text-left">Expires</th></tr></thead><tbody>{tokens.map((token) => <tr key={token.id}><td className="px-6 py-4">{token.token_type?.name}</td><td className="px-6 py-4">{token.status}</td><td className="px-6 py-4">{token.remaining_uses ?? 'Unlimited'}</td><td className="px-6 py-4">{token.expires_at ?? '-'}</td></tr>)}</tbody></table></AuthenticatedLayout>;
}
