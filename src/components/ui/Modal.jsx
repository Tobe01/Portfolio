import { createPortal } from 'react-dom'
import useModal from '../../hooks/useModal'
import Icon from './Icon'

function Modal({ children, isOpen, onClose, titleId }) {
  const modalRef = useModal(isOpen, onClose)

  if (!isOpen) {
    return null
  }

  const handleBackdropMouseDown = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <div className="modal-backdrop" onMouseDown={handleBackdropMouseDown}>
      <div
        aria-labelledby={titleId}
        aria-modal="true"
        className="modal"
        ref={modalRef}
        role="dialog"
        tabIndex={-1}
      >
        <button
          aria-label="Close project details"
          className="modal__close"
          onClick={onClose}
          type="button"
        >
          <Icon name="close" size={18} />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}

export default Modal
