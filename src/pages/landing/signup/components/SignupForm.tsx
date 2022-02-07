import { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from 'constants/routesPaths';

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
    console.log('handleSubmit', event);
    setFormData(formData);
  };

  
  return (
    <form data-testid="form" className="signup-wrap" onSubmit={handleSubmit} noValidate>
      {/*< Input type="text" name="name" placeholder="Digite seu nome" />
    <Input type="email" name="email" placeholder="Digite seu e-mail" />
    <Input type="password" name="password" placeholder="Digite sua senha" />
    <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha" />
    <SubmitButton text="Cadastrar" /> */}
      <Link data-testid="signup-form-link" to={routes.login} className="link">
        SIGN IN
      </Link>
    </form>
  );
};

export default SignupForm;
