import { Modal } from 'components/common';
import useMapRemoveMarkerModal, { MapRemoveMarkerModalProps } from './useMapRemoveMarkerModal';
import { actionButtonsI18n, mapModalI18n } from 'constants/i18n-constant';

const MapRemoveMarkerModal = ({ isOpen, handleClose, marker }: MapRemoveMarkerModalProps) => {
  const { handleOnClick, t } = useMapRemoveMarkerModal({ isOpen, handleClose, marker });
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div className="modal_header">
        {t(mapModalI18n.PAGE_TITLE)} {marker.name}
      </div>
      <div className="modal_body">{t(mapModalI18n.PAGE_SUBTITLE)}</div>
      <div className="modal_footer">
        <button onClick={handleOnClick}>{t(actionButtonsI18n.ACTION_CONFIRM)}</button>
        <button onClick={handleClose}>{t(actionButtonsI18n.ACTION_CANCEL)}</button>
      </div>
    </Modal>
  );
};

export default MapRemoveMarkerModal;
