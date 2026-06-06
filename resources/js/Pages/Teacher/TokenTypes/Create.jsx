import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function TokenTypesCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        type: 'single',
        validity_type: 'date_range',
        valid_from: '',
        valid_until: '',
        max_uses: '',
        price: '',
        currency: 'EUR',
        is_transferable: false,
    });

    function submit(e) {
        e.preventDefault();
        post('/teacher/token-types');
    }

    return (
        <AuthenticatedLayout>
            <Head title="Create Token Type" />
            <h1 className="mb-4 text-2xl font-bold">Create Token Type</h1>
            <form onSubmit={submit} className="max-w-lg rounded bg-white p-6 shadow">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" required />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Type</label>
                    <select value={data.type} onChange={(e) => setData('type', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm">
                        <option value="single">Single</option>
                        <option value="pack">Pack</option>
                        <option value="series">Series</option>
                        <option value="subscription">Subscription</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Validity Type</label>
                    <select value={data.validity_type} onChange={(e) => setData('validity_type', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm">
                        <option value="date_range">Date Range</option>
                        <option value="usage_count">Usage Count</option>
                        <option value="both">Both</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Valid From</label>
                    <input type="datetime-local" value={data.valid_from} onChange={(e) => setData('valid_from', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Valid Until</label>
                    <input type="datetime-local" value={data.valid_until} onChange={(e) => setData('valid_until', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Max Uses</label>
                    <input type="number" value={data.max_uses} onChange={(e) => setData('max_uses', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Price (cents)</label>
                    <input type="number" value={data.price} onChange={(e) => setData('price', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" />
                </div>
                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input type="checkbox" checked={data.is_transferable} onChange={(e) => setData('is_transferable', e.target.checked)} className="rounded border-gray-300 shadow-sm" />
                        <span className="ml-2 text-sm">Allow transfer between students</span>
                    </label>
                </div>
                <button type="submit" disabled={processing} className="rounded bg-indigo-600 px-4 py-2 text-white">Create</button>
            </form>
        </AuthenticatedLayout>
    );
}
