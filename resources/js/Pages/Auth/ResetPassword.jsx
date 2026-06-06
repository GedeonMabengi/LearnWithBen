import { Head, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    function submit(e) {
        e.preventDefault();
        post('/reset-password');
    }

    return (
        <GuestLayout>
            <Head title="Reset Password" />
            <div className="mx-auto mt-10 max-w-md rounded bg-white p-6 shadow">
                <h2 className="mb-4 text-2xl font-bold">Reset Password</h2>
                <form onSubmit={submit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" value={data.email} disabled className="mt-1 block w-full rounded border-gray-300 bg-gray-100" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">New Password</label>
                        <input type="password" value={data.password} onChange={(e) => setData('password', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" required />
                        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="password" value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" required />
                    </div>
                    <button type="submit" disabled={processing} className="w-full rounded bg-indigo-600 py-2 text-white">
                        Reset Password
                    </button>
                </form>
            </div>
        </GuestLayout>
    );
}
