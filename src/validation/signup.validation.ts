import { object, string, ref } from 'yup';

const signupValidation = object().shape({
  name: string().required('You must enter a name'),
  email: string().email('You must enter a valid email').required('You must enter an email'),
  password: string().min(8, 'Enter at least 8 characters').required('You must enter a password'),
  passwordConfirm: string()
    .required('You must enter a password')
    .oneOf([ref('password'), null], 'Passwords must match'),
  gender: string().required('You must enter a gender'),
});

export default signupValidation;
