import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { InputText, SubmitButton } from 'components/common';
import { UserLogin } from 'interfaces/user/user-interface';
import routes from 'constants/routes-paths-constant';
import './login-form.scss';

export interface LoginFormProps {
  onSubmit: (values: UserLogin) => void;
}
const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const initialValues: UserLogin = {
    email: '',
    password: '',
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserLogin>({
    defaultValues: initialValues,
  });

  return (
    <section>
      <form data-test-id="form" className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputText
          type="email"
          label="email"
          placeholder=""
          error={errors.email?.message}
          {...register('email')}
        />
        <InputText
          type="password"
          label="password"
          placeholder=""
          error={errors.password?.message}
          {...register('password')}
        />
        <SubmitButton label="sign in" />
        <Link
          data-test-id="signup-form-link"
          to={routes.signUp}
          className="link capital-case margin-forgot-password"
        >
          forgot your password?
        </Link>
        <Link
          data-test-id="signup-form-link"
          to={routes.signUp}
          className="link upper-case margin-facebook"
        >
          connect with facebook
        </Link>
        <div className="line"></div>
        <Link
          data-test-id="signup-form-link"
          to={routes.signUp}
          className="link upper-case margin-sign-up"
        >
          sign up
        </Link>
      </form>
    </section>
  );
};

export default LoginForm;
