import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function TokenTypesIndex({ tokenTypes }) {
    return (
        <AuthenticatedLayout>
            <Head title="Token Types" />
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Token Types</h1>
                <Link href="/teacher/token-types/create" className="rounded bg-indigo-600 px-4 py-2 text-white">Create New</Link>
            </div>
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {tokenTypes.map((tt) => (
                            <tr key={tt.id}>
                                <td className="whitespace-nowrap px-6 py-4">{tt.name}</td>
                                <td className="whitespace-nowrap px-6 py-4">{tt.type}</td>
                                <td className="whitespace-nowrap px-6 py-4">{tt.price ? `$${tt.price / 100}` : 'Free'}</td>
                                <td className="space-x-2 whitespace-nowrap px-6 py-4">
                                    <Link href={`/teacher/token-types/${tt.id}`} className="text-indigo-600 hover:text-indigo-900">View</Link>
                                    <Link href={`/teacher/token-types/${tt.id}/edit`} className="text-yellow-600 hover:text-yellow-900">Edit</Link>
                                    <Link href={`/teacher/token-types/${tt.id}`} method="delete" as="button" className="text-red-600 hover:text-red-900">Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
