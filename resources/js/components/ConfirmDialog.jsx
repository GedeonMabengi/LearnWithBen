import Modal from './Modal';
import Button from './Button';

export default function ConfirmDialog({ show, onClose, onConfirm, title, message, confirmText = 'Confirm', cancelText = 'Cancel', loading = false }) {
    return (
        <Modal show={show} onClose={onClose} title={title} size="sm">
            <p className="text-gray-700 mb-4">{message}</p>
            <div className="flex justify-end space-x-2">
                <Button variant="secondary" onClick={onClose}>{cancelText}</Button>
                <Button variant="danger" onClick={onConfirm} disabled={loading}>
                    {loading ? 'Processing...' : confirmText}
                </Button>
            </div>
        </Modal>
    );
}
