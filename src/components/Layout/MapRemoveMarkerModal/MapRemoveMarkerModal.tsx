import { Button, Modal } from 'components/common';
import useMapRemoveMarkerModal, { MapRemoveMarkerModalProps } from './useMapRemoveMarkerModal';
import { actionButtonsI18n, mapModalI18n } from 'constants/i18n-constant';
import './map-remove-marker-modal.scss';

const MapRemoveMarkerModal = ({ isOpen, handleClose, marker }: MapRemoveMarkerModalProps) => {
  const { handleOnClick, t } = useMapRemoveMarkerModal({ isOpen, handleClose, marker });
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div className="modal__header">
        <h3>
          {t(mapModalI18n.PAGE_TITLE)} {marker.name}
        </h3>
      </div>
      <div className="modal__body">{t(mapModalI18n.PAGE_SUBTITLE)}</div>
      <div className="modal__footer">
        <Button label={t(actionButtonsI18n.ACTION_CONFIRM)} onClick={handleOnClick} />
        <Button label={t(actionButtonsI18n.ACTION_CANCEL)} onClick={handleClose} />
      </div>
    </Modal>
  );
};

export default MapRemoveMarkerModal;
