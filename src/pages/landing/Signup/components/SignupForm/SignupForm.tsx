import { Link } from 'react-router-dom';
import { useTranslation } from 'hooks';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputText, Dropdown, Button } from 'components/common';
import { User } from 'interfaces/user/user-interface';
import signupValidation from 'validation/user/signup-validation';
import routes from 'constants/routes-paths-constant';
import { GENDER_OPTIONS } from 'constants/gender-options-constant';
import './signup-form.scss';
import { signupFormI18n } from 'constants/i18n-constant';

export interface SignupFormProps {
  onSubmit: (values: User) => void;
}
const SignupForm = ({ onSubmit }: SignupFormProps) => {
  const initialValues: User = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    gender: '',
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>({
    defaultValues: initialValues,
    resolver: yupResolver(signupValidation),
  });

  const t = useTranslation();

  return (
    <section>
      <form data-testid="form" className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputText
          type="text"
          label={t(signupFormI18n.FORM_NAME)}
          placeholder={t(signupFormI18n.FORM_NAME_PLACEHOLDER)}
          error={errors.name?.message}
          {...register('name')}
        />
        <InputText
          type="email"
          label={t(signupFormI18n.FORM_EMAIL)}
          placeholder={t(signupFormI18n.FORM_EMAIL_PLACEHOLDER)}
          error={errors.email?.message}
          {...register('email')}
        />
        <InputText
          type="password"
          label={t(signupFormI18n.FORM_PASSWORD)}
          placeholder={t(signupFormI18n.FORM_PASSWORD_PLACEHOLDER)}
          error={errors.password?.message}
          {...register('password')}
        />
        <InputText
          type="password"
          label={t(signupFormI18n.FORM_CONFIRM_PASSWORD)}
          placeholder={t(signupFormI18n.FORM_CONFIRM_PASSWORD_PLACEHOLDER)}
          error={errors.passwordConfirm?.message}
          {...register('passwordConfirm')}
        />
        <Dropdown
          options={GENDER_OPTIONS}
          placeholder={t(signupFormI18n.FORM_GENDER_DEFAULT)}
          label={t(signupFormI18n.FORM_GENDER)}
          error={errors.gender?.message}
          {...register('gender')}
        />
        <Button type="submit" label={t(signupFormI18n.FORM_SUBMIT)} />
        <div className="line"></div>
        <Link data-testid="signup-form-link" to={routes.index} className="link">
          {t(signupFormI18n.FORM_LOGIN)}
        </Link>
      </form>
    </section>
  );
};

export default SignupForm;
