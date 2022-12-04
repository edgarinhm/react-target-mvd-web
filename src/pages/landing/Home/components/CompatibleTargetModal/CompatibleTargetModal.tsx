import { Button, Modal } from 'components/common';
import HappySmile from 'components/Layout/HappySmile';
import useCompatibleTargetModal from './useCompatibleTargetModal';
import { targetCompatibleModalI18n } from 'constants/i18n-constant';
import styles from './compatible-target-modal.module.scss';
import { validateLocalSrc } from 'utils';
import { DEFAULT_AVATAR, MEDIA_AVATARS } from 'constants/assets-constants';

const CompatibleTargetModal = () => {
  const {
    compatibleTargetModalIsOpen,
    handleOpenModal,
    styleConfig,
    t,
    matchedUserArray,
    handleOnSubmit,
  } = useCompatibleTargetModal();

  return (
    <Modal
      isOpen={compatibleTargetModalIsOpen}
      handleClose={handleOpenModal}
      style={styleConfig}
      variant={styles.modal__wrap}
    >
      <HappySmile styleClass="smile-contact" />
      <h2>{t(targetCompatibleModalI18n.PAGE_TITLE)}</h2>
      <form data-testid="form" className="form" onSubmit={handleOnSubmit} noValidate>
        <label className={styles.label}>{t(targetCompatibleModalI18n.FORM_TEXT)}</label>
        {matchedUserArray &&
          matchedUserArray.map(user => {
            return (
              <div key={user.id} className="group-detail">
                <img
                  className="avatar-chat"
                  src={validateLocalSrc(
                    user.avatar.normalUrl,
                    process.env.PUBLIC_URL +
                      MEDIA_AVATARS +
                      (user.avatar.normalUrl || DEFAULT_AVATAR)
                  )}
                  alt={`avatar ${user.fullName}`}
                />
                <div className="group-chats">
                  <span>
                    <strong>{user.fullName}</strong>
                  </span>
                </div>
              </div>
            );
          })}
        <div>
          <Button type="submit" label={t(targetCompatibleModalI18n.FORM_SUBMIT)} />
        </div>
      </form>
    </Modal>
  );
};

export default CompatibleTargetModal;
