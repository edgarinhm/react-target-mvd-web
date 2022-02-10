import { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from 'constants/routesPaths';
import { InputText, Button } from 'components/common';
import './signup-form.scss';

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
  const [formData, setFormData] = useState(initialValues);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('SignupForm handleSubmit', event);
    setFormData(formData);
  };

  return (
    <form data-testid="form" className="form" onSubmit={handleSubmit} noValidate>
      <InputText type="text" name="name" label="name" placeholder="write your name" />
      <InputText type="email" name="email" label="email" placeholder="write your e-mail" />
      <InputText
        type="password"
        name="password"
        label="password"
        placeholder="write your password"
      />
      <InputText
        type="password"
        name="passwordConfirmation"
        label="confirm password"
        placeholder="confirm your password"
      />
      <Button label="sing up" />
      <div className="line">
        <Link data-testid="signup-form-link" to={routes.login} className="link">
          SIGN IN
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
