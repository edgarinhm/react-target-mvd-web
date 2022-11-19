import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import forgotPasswordValidation from 'validation/user/forgot-password-validation';
import { useTranslation } from 'hooks';
import { ForgotPassword } from 'interfaces/profile/forgot-password-interface';
import { InputText, SubmitButton } from 'components/common';
import testIds from 'constants/test-ids-constant';
import { forgotPasswordI18n } from 'constants/i18n-constant';

interface ForgotPasswordFormProps {
  onSubmit: (values: ForgotPassword) => void;
}

const ForgotPasswordForm = ({ onSubmit }: ForgotPasswordFormProps) => {
  const initialValues: ForgotPassword = {
    email: '',
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ForgotPassword>({
    defaultValues: initialValues,
    resolver: yupResolver(forgotPasswordValidation),
  });

  const t = useTranslation();

  return (
    <section>
      <form
        data-testid={testIds.FORM}
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <InputText
          type="email"
          label={t(forgotPasswordI18n.FORM_EMAIL)}
          placeholder=""
          error={errors.email?.message}
          {...register('email')}
        />
        <SubmitButton label={t(forgotPasswordI18n.FORM_SUBMIT)} />
      </form>
    </section>
  );
};

export default ForgotPasswordForm;
