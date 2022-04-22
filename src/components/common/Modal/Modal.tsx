import modalConfig from 'config/modal';
import ReactModal from 'react-modal';
import styles from './modal.module.scss';

export interface ModalConfig {
  content?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    marginRight?: string;
    transform?: string;
    width?: string;
  };
  overlay?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    backgroundColor?: string;
    zIndex?: number;
    opacity?: number;
  };
}
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
  setTo?: string;
  style?: ModalConfig;
  variant?: string;
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
  setTo = 'root',
  style,
  variant = '',
}: ModalProps) => {
  ReactModal.setAppElement(`#${setTo}`);
  const styleConfig = { ...modalConfig, ...style };

  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={handleClose}
      style={styleConfig}
      contentLabel={contentLabel}
    >
      <div
        className={variant ? variant : styles.modal__wrap}
        style={bigModal ? { width: '70%' } : {}}
      >
        {title && <h1 className={styles.modal__title}>{title}</h1>}
        {subtitle && <h2 className={styles.modal__subtitle}>{subtitle}</h2>}
        {showCloseButton && (
          <div className={styles.modal__close}>
            <button onClick={handleClose}>x</button>
          </div>
        )}
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
