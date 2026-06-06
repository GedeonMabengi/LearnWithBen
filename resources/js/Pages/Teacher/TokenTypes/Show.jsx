import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function TokenTypesShow({ tokenType }) {
    return (
        <AuthenticatedLayout>
            <Head title={tokenType.name} />
            <div className="mb-4"><Link href="/teacher/token-types" className="text-indigo-600">&larr; Back</Link></div>
            <h1 className="text-2xl font-bold">{tokenType.name}</h1>
            <div className="mt-4 rounded bg-white p-4 shadow">
                <p>Type: {tokenType.type}</p>
                <p>Validity: {tokenType.validity_type}</p>
                <p>Max Uses: {tokenType.max_uses ?? 'Unlimited'}</p>
                <p>Price: {tokenType.price ? `$${tokenType.price / 100}` : 'Free'}</p>
                <p>Transferable: {tokenType.is_transferable ? 'Yes' : 'No'}</p>
            </div>
            <div className="mt-4">
                <Link href={`/teacher/token-types/${tokenType.id}/tokens`} className="rounded bg-indigo-600 px-4 py-2 text-white">View Tokens</Link>
            </div>
        </AuthenticatedLayout>
    );
}
