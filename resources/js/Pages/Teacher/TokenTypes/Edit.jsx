import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function TokenTypesEdit({ tokenType }) {
    const { data, setData, put, processing } = useForm({
        name: tokenType.name,
        type: tokenType.type,
        validity_type: tokenType.validity_type,
        valid_from: tokenType.valid_from?.slice(0, 16) || '',
        valid_until: tokenType.valid_until?.slice(0, 16) || '',
        max_uses: tokenType.max_uses || '',
        price: tokenType.price || '',
        currency: tokenType.currency,
        is_transferable: tokenType.is_transferable,
    });

    function submit(e) {
        e.preventDefault();
        put(`/teacher/token-types/${tokenType.id}`);
    }

    return (
        <AuthenticatedLayout>
            <Head title={`Edit ${tokenType.name}`} />
            <h1 className="mb-4 text-2xl font-bold">Edit Token Type</h1>
            <form onSubmit={submit} className="max-w-lg rounded bg-white p-6 shadow">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" required />
                </div>
                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input type="checkbox" checked={data.is_transferable} onChange={(e) => setData('is_transferable', e.target.checked)} className="rounded border-gray-300 shadow-sm" />
                        <span className="ml-2 text-sm">Allow transfer</span>
                    </label>
                </div>
                <button type="submit" disabled={processing} className="rounded bg-yellow-600 px-4 py-2 text-white">Update</button>
            </form>
        </AuthenticatedLayout>
    );
}
