import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    function submit(e) {
        e.preventDefault();
        post('/login');
    }

    return (
        <GuestLayout>
            <Head title="Login" />
            <div className="mx-auto mt-10 max-w-md rounded bg-white p-6 shadow">
                <h2 className="mb-4 text-2xl font-bold">Login</h2>
                <form onSubmit={submit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" required />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" value={data.password} onChange={(e) => setData('password', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" required />
                        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                    </div>
                    <button type="submit" disabled={processing} className="w-full rounded bg-indigo-600 py-2 text-white hover:bg-indigo-700">
                        Log in
                    </button>
                </form>
                <div className="mt-4 text-sm">
                    <Link href="/forgot-password" className="text-indigo-600">
                        Forgot password?
                    </Link>
                </div>
                <div className="mt-2 text-sm">
                    <Link href="/register" className="text-indigo-600">
                        Create account
                    </Link>
                </div>
            </div>
        </GuestLayout>
    );
}
