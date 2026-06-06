import { useState } from 'react';
import Label from './Label';
import ErrorMessage from './ErrorMessage';

export default function FileInput({ label, name, accept, onChange, error, required, className = '' }) {
    const [fileName, setFileName] = useState('');

    const handleChange = (e) => {
        const file = e.target.files[0];
        setFileName(file ? file.name : '');
        if (onChange) onChange(e);
    };

    return (
        <div className="mb-4">
            {label && <Label htmlFor={name} required={required}>{label}</Label>}
            <div className="mt-1 flex items-center">
                <label className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Browse
                    <input
                        id={name}
                        name={name}
                        type="file"
                        accept={accept}
                        onChange={handleChange}
                        className="sr-only"
                    />
                </label>
                <span className="ml-3 text-sm text-gray-500">{fileName || 'No file selected'}</span>
            </div>
            {error && <ErrorMessage message={error} />}
        </div>
    );
}
