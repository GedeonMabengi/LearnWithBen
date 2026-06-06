import { Head, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function ForgotPassword() {
    const { data, setData, post, processing, errors } = useForm({ email: '' });

    function submit(e) {
        e.preventDefault();
        post('/forgot-password');
    }

    return (
        <GuestLayout>
            <Head title="Forgot Password" />
            <div className="mx-auto mt-10 max-w-md rounded bg-white p-6 shadow">
                <h2 className="mb-4 text-2xl font-bold">Forgot Password</h2>
                <form onSubmit={submit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" required />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <button type="submit" disabled={processing} className="w-full rounded bg-indigo-600 py-2 text-white">
                        Send Reset Link
                    </button>
                </form>
            </div>
        </GuestLayout>
    );
}
