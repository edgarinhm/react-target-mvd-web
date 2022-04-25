import { object } from 'yup';
import { email, currentPassword, password, passwordConfirm } from './user-validation';

const profileValidation = object().shape({
  ...email,
  ...currentPassword,
  ...password,
  ...passwordConfirm,
});

export default profileValidation;
