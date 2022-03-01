import { object } from 'yup';
import { name, email, password, passwordConfirm, gender } from './user-validation';

const signupValidation = object().shape({
  ...name,
  ...email,
  ...password,
  ...passwordConfirm,
  ...gender,
});

export default signupValidation;
