import { object } from 'yup';
import { email } from './user-validation';

const forgotPasswordValidation = object().shape({
  ...email,
});

export default forgotPasswordValidation;
