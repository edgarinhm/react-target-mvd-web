import { object } from 'yup';
import { email, password } from './user-validation';

const loginValidation = object().shape({
  ...email,
  ...password,
});

export default loginValidation;
