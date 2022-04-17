import modalConfig from 'config/modal';
import ReactModal from 'react-modal';
import './modal.scss';

interface ModalProps {
  isOpen: boolean;
  title?: string;
  subtitle?: string;
  contentLabel?: string;
  bigModal?: boolean;
  showCloseButton?: boolean;
  afterOpenModal?: () => void;
  handleClose: () => void;
  children?: React.ReactNode;
}

const Modal = ({
  isOpen = false,
  title,
  subtitle,
  contentLabel,
  bigModal = false,
  showCloseButton = true,
  afterOpenModal,
  handleClose,
  children,
}: ModalProps) => {
  ReactModal.setAppElement('#root');
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={handleClose}
      style={modalConfig}
      contentLabel={contentLabel}
    >
      <div className="modal" style={bigModal ? { width: '70%' } : {}}>
        {title && <h1 className="modal__title">{title}</h1>}
        {subtitle && <h2 className="modal__subtitle">{subtitle}</h2>}
        {showCloseButton && (
          <div className="modal__close">
            <button onClick={handleClose}>x</button>
          </div>
        )}
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
