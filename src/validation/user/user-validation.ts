import { string, ref } from 'yup';
export const name = {
  name: string().required('You must enter a name'),
};

export const email = {
  email: string().email('You must enter a valid email').required('You must enter an email'),
};

export const password = {
  password: string().min(8, 'Enter at least 8 characters').required('You must enter a password'),
};

export const passwordConfirm = {
  passwordConfirm: string()
    .required('You must enter a password')
    .oneOf([ref('password'), null], 'Passwords must match'),
};

export const gender = {
  gender: string().required('You must enter a gender'),
};
