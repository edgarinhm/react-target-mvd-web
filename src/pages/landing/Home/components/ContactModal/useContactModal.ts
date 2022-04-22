import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ModalContext } from 'context/ModalContext';
import { useAppDispatch, useTranslation } from 'hooks';
import { setErrors } from 'state/actions/user-actions';
import ContactService from 'services/contact-service';
import { Question } from 'interfaces/contact/question-interface';
import { ModalConfig } from 'components/common/Modal/Modal';
import contactValidation from 'validation/contact/question-validation';
import modalConfig from 'config/modal';
import { OK } from 'constants/api-constants';

const useContactModal = () => {
  const { contactModalIsOpen, setContactModalIsOpen } = useContext(ModalContext);

  const handleOpenModal = () => {
    setContactModalIsOpen(isOpen => !isOpen);
  };

  const styleConfig: ModalConfig = {
    content: { ...modalConfig.content, width: '22rem' },
    overlay: { ...modalConfig.overlay, right: '70%' },
  };

  const initialValues: Question = { email: '', body: '' };
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, dirtyFields },
  } = useForm<Question>({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(contactValidation),
  });

  const disabled = !Object.keys(dirtyFields).length || !isValid;
  const dispatch = useAppDispatch();

  const onSubmit = (question: Question) => {
    question.email = '';
    question.body = '';
    ContactService.sendQuestion(question)
      .then(status => {
        if (status === OK) handleOpenModal();
      })
      .catch(error => dispatch(setErrors(error.message)));
  };

  const t = useTranslation();

  return {
    contactModalIsOpen,
    handleOpenModal,
    styleConfig,
    register,
    errors,
    isValid,
    handleSubmit,
    onSubmit,
    disabled,
    t,
  };
};

export default useContactModal;
