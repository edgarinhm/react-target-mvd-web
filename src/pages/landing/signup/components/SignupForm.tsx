import { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from 'constants/routesPaths';
import { InputText, Button, Dropdown } from 'components/common';
import { useForm } from 'react-hook-form';

import './signup-form.scss';
import { GENDER_OPTIONS } from 'constants/options';

export interface SignUpFormFields {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  gender: string;
}

export interface SignupFormProps {
  onSubmit: (values: SignUpFormFields) => void;
}
const SignupForm = ({ onSubmit }: SignupFormProps) => {
  const initialValues: SignUpFormFields = {
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
  } = useForm<SignUpFormFields>({
    defaultValues: initialValues,
  });

  return (
    <section>
      <form data-testid="form" className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputText type="text" label="name" placeholder="write your name" {...register('name')} />
        <InputText
          type="email"
          label="email"
          placeholder="write your e-mail"
          {...register('email')}
        />
        <InputText
          type="password"
          label="password"
          placeholder="min. 6 characters long"
          {...register('password')}
        />
        <InputText
          type="password"
          label="confirm password"
          placeholder="confirm your password"
          {...register('passwordConfirm')}
        />
        <Dropdown
          options={GENDER_OPTIONS}
          //value="male"
          label="gender"
          placeholder="select your gender"
          {...register('gender')}
        />
        <Button
          type="submit"
          label="sing up"
          onClick={() => {
            console.log('Button-submit onClick errors', errors.name);
          }}
        />
        <div className="line"></div>
        <Link data-testid="signup-form-link" to={routes.login} className="link">
          SIGN IN
        </Link>
      </form>
    </section>
  );
};

export default SignupForm;
