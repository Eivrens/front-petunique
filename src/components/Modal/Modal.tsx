import './Modal.css'
import React from 'react'

interface ModalProps {
  isOpen: boolean;
  isClosed: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({isOpen, isClosed, children}) => {

  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      isClosed();
    }
  };

  return (
    <div className='modal-background' onClick={handleBackgroundClick}>
      <div className='modal-content'>
        {children}
      </div>
    </div>
  )
}

export default Modal;
