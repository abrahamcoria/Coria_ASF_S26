import React from 'react';

const ConfirmModal = ({
                          isOpen,
                          onClose,
                          onConfirm,
                          title = "Confirm Action",
                          message = "Are you sure?",
                          confirmText = "Confirm",
                          cancelText = "Cancel"
                      }) => {
    if (!isOpen) return null;

    return (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-dark text-light border border-warning">
                    <div className="modal-header border-warning">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {message}
                    </div>
                    <div className="modal-footer border-warning">
                        <button className="btn btn-secondary" onClick={onClose}>
                            {cancelText}
                        </button>
                        <button className="btn btn-warning" onClick={onConfirm}>
                            {confirmText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;