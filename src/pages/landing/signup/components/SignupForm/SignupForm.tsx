import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputText, Dropdown, Button } from 'components/common';
import { User } from 'interfaces/user/user-interface';
import signupValidation from 'validation/user/signup-validation';
import routes from 'constants/routes-paths-constant';
import { GENDER_OPTIONS } from 'constants/gender-options-constant';
import './signup-form.scss';
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

  return (
    <section>
      <form data-testid="form" className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
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
        <Button type="submit" label="sign up" />
        <div className="line"></div>
        <Link data-testid="signup-form-link" to={routes.index} className="link">
          SIGN IN
        </Link>
      </form>
    </section>
  );
};

export default SignupForm;
