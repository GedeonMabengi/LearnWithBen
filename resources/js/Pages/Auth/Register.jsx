import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    function submit(e) {
        e.preventDefault();
        post('/register');
    }

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className="mx-auto mt-10 max-w-md rounded bg-white p-6 shadow">
                <h2 className="mb-4 text-2xl font-bold">Register</h2>
                <form onSubmit={submit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" required />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
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
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="password" value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} className="mt-1 block w-full rounded border-gray-300 shadow-sm" required />
                    </div>
                    <button type="submit" disabled={processing} className="w-full rounded bg-green-600 py-2 text-white hover:bg-green-700">
                        Register
                    </button>
                </form>
                <div className="mt-4 text-sm">
                    <Link href="/login" className="text-indigo-600">
                        Already have an account?
                    </Link>
                </div>
            </div>
        </GuestLayout>
    );
}
