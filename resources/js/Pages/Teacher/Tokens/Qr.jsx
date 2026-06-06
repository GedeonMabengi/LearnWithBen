import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function TokenQr({ token, qrCode }) {
    return (
        <AuthenticatedLayout>
            <Head title={`QR Code for ${token.code}`} />
            <h1 className="mb-4 text-2xl font-bold">QR Code</h1>
            <div className="rounded bg-white p-4 text-center shadow">
                <p>Token: {token.code}</p>
                <img src={qrCode} alt="QR Code" className="mx-auto mt-4" />
                <p className="mt-2 text-sm text-gray-500">Scan to claim or access course</p>
            </div>
        </AuthenticatedLayout>
    );
}
