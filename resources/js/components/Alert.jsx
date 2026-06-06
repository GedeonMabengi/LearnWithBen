const variants = {
    success: 'bg-green-50 border-green-500 text-green-700',
    error: 'bg-red-50 border-red-500 text-red-700',
    warning: 'bg-yellow-50 border-yellow-500 text-yellow-700',
    info: 'bg-blue-50 border-blue-500 text-blue-700',
};

export default function Alert({ variant = 'info', message, onDismiss }) {
    if (!message) return null;

    return (
        <div className={`border-l-4 p-4 mb-4 ${variants[variant]}`} role="alert">
            <div className="flex justify-between">
                <p className="text-sm">{message}</p>
                {onDismiss && (
                    <button onClick={onDismiss} className="text-lg font-bold ml-4">&times;</button>
                )}
            </div>
        </div>
    );
}
