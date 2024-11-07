import React from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '../../assets/icons';

export default function ModalProvider ({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close plain-button" onClick={onClose}><CloseIcon /></button>
        {children}
      </div>
    </div>,
    document.getElementById('portal-root')
  );
};
