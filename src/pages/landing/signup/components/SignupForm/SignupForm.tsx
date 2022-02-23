import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputText, Dropdown, SubmitButton } from 'components/common';
import { UserSignUp } from 'interfaces/user-interface';
import signupValidation from 'validation/signup.validation';
import routes from 'constants/routes-paths';
import { GENDER_OPTIONS } from 'constants/gender-options';
import './signup-form.scss';

export interface SignupFormProps {
  onSubmit: (values: UserSignUp) => void;
}
const SignupForm = ({ onSubmit }: SignupFormProps) => {
  const initialValues: UserSignUp = {
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
  } = useForm<UserSignUp>({
    defaultValues: initialValues,
    resolver: yupResolver(signupValidation),
  });

  return (
    <section>
      <form data-test-id="form" className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputText
          type="text"
          label="name"
          placeholder="write your name"
          error={errors.name?.message}
          {...register('name')}
        />
        <InputText
          type="email"
          label="email"
          placeholder="write your e-mail"
          error={errors.email?.message}
          {...register('email')}
        />
        <InputText
          type="password"
          label="password"
          placeholder="min. 8 characters long"
          error={errors.password?.message}
          {...register('password')}
        />
        <InputText
          type="password"
          label="confirm password"
          placeholder="confirm your password"
          error={errors.passwordConfirm?.message}
          {...register('passwordConfirm')}
        />
        <Dropdown
          options={GENDER_OPTIONS}
          defaultOption={'select your gender'}
          label="gender"
          placeholder="select your gender"
          error={errors.gender?.message}
          {...register('gender')}
        />
        <SubmitButton label="sign up" />
        <div className="line"></div>
        <Link data-test-id="signup-form-link" to={routes.index} className="link">
          SIGN IN
        </Link>
      </form>
    </section>
  );
};

export default SignupForm;
