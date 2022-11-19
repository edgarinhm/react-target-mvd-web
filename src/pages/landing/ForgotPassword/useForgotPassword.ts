import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation, useAppDispatch } from 'hooks';
import { ForgotPassword } from 'interfaces/profile/forgot-password-interface';
import forgotPasswordValidation from 'validation/user/forgot-password-validation';
import UserService from 'services/user-service';
import { OK } from 'constants/api-constants';
import { setErrors } from 'state/actions/user-actions';
import { forgotPasswordI18n } from 'constants/i18n-constant';

const useForgotPassword = () => {
  const initialValues: ForgotPassword = {
    email: '',
  };

  const {
    handleSubmit,
    register,
    formState: { errors, dirtyFields, isValid },
  } = useForm<ForgotPassword>({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(forgotPasswordValidation),
  });

  const t = useTranslation();
  const disabled = !Object.keys(dirtyFields).length || !isValid;
  const dispatch = useAppDispatch();

  const onSubmit = (formData: ForgotPassword) => {
    UserService.resetPassword(formData.email).then(response => {
      if (response === OK) {
        dispatch(setErrors(forgotPasswordI18n.PAGE_TITLE));
      }
    });
  };

  return { handleSubmit, register, errors, t, disabled, onSubmit, forgotPasswordI18n };
};

export default useForgotPassword;
