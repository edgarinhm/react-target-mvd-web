import modalConfig from 'config/modal';
import ReactModal from 'react-modal';
import styles from './modal.scss';

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
      <div className={styles['modal']} style={bigModal ? { width: '70%' } : {}}>
        {title && <h1 className={styles['modal__title']}>{title}</h1>}
        {subtitle && <h2 className={styles['modal__subtitle']}>{subtitle}</h2>}
        {showCloseButton && (
          <button className={styles['modal__close']} onClick={handleClose}>
            x
          </button>
        )}
        <div className={styles['modal__body']}>{children}</div>
      </div>
    </ReactModal>
  );
};

export default Modal;
