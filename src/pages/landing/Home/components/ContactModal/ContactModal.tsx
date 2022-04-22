import { Button, Modal, InputText, TextArea, FormStatus } from 'components/common';
import HappySmile from 'components/Layout/HappySmile';
import useContactModal from './useContactModal';
import styles from './contact-modal.module.scss';
import { contactI18n } from 'constants/i18n-constant';

const ContactModal = () => {
  const {
    contactModalIsOpen,
    handleOpenModal,
    styleConfig,
    register,
    errors,
    handleSubmit,
    onSubmit,
    disabled,
    t,
  } = useContactModal();

  return (
    <Modal
      isOpen={contactModalIsOpen}
      handleClose={handleOpenModal}
      style={styleConfig}
      variant={styles.modal__wrap}
    >
      <HappySmile styleClass="smile-contact" />
      <h2>{t(contactI18n.PAGE_TITLE)}</h2>
      <FormStatus />
      <form data-testid="form" className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputText
          {...register('email')}
          className={styles.label}
          label={t(contactI18n.FORM_EMAIL)}
          type="text"
          name={'email'}
          required
          isVisibleRequiredIcon
          error={errors.email?.message}
        />
        <TextArea
          {...register('body')}
          className={styles.label}
          label={t(contactI18n.FORM_MESSAGE)}
          name={'body'}
          required
          isVisibleRequiredIcon
          error={errors.body?.message}
        />
        <Button type="submit" label={t(contactI18n.FORM_SUBMIT)} disabled={disabled} />
      </form>
    </Modal>
  );
};

export default ContactModal;
