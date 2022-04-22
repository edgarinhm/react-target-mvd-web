import { object } from 'yup';
import { email, body } from './contact-validation';

const contactValidation = object().shape({
  ...email,
  ...body,
});

export default contactValidation;
