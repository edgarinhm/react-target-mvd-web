import { Link } from 'react-router-dom';
import { useTranslation } from 'hooks';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputText, SubmitButton } from 'components/common';
import { User } from 'interfaces/user/user-interface';
import routes from 'constants/routes-paths-constant';
import loginValidation from 'validation/user/login-validation';
import './login-form.scss';
import testIds from 'constants/test-ids-constant';
import { loginFormI18n } from 'constants/i18n-constant';
export interface LoginFormProps {
  onSubmit: (values: User) => void;
}
const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const initialValues: User = {
    email: '',
    password: '',
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>({
    defaultValues: initialValues,
    resolver: yupResolver(loginValidation),
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
          label={t(loginFormI18n.FORM_EMAIL)}
          placeholder=""
          error={errors.email?.message}
          {...register('email')}
        />
        <InputText
          type="password"
          label={t(loginFormI18n.FORM_PASSWORD)}
          placeholder=""
          error={errors.password?.message}
          {...register('password')}
        />
        <SubmitButton label={t(loginFormI18n.FORM_SUBMIT)} />
        <Link
          data-testid="password-reset-form-link"
          to={routes.passwordReset}
          className="link capital-case margin-forgot-password"
        >
          {t(loginFormI18n.FORM_FORGOT_PASSWORD)}
        </Link>
        <Link
          data-testid={testIds.FACEBOOK_LINK}
          to={routes.signupFacebook}
          className="link upper-case margin-facebook"
        >
          {t(loginFormI18n.FORM_CONNECT_FACEBOOK)}
        </Link>
        <div className="line"></div>
        <Link
          data-testid={testIds.SIGNUP_LINK}
          to={routes.signup}
          className="link upper-case margin-sign-up"
        >
          {t(loginFormI18n.FORM_SIGNUP)}
        </Link>
      </form>
    </section>
  );
};

export default LoginForm;
