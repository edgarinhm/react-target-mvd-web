import { yupLocale } from 'validation/yup-locale/yup-loacale';
import { string, ref, setLocale } from 'yup';

setLocale(yupLocale);

export const name = {
  name: string().required(),
};

export const email = {
  email: string().email().required(),
};

export const password = {
  password: string().min(8).required(),
};

export const passwordConfirm = {
  passwordConfirm: string()
    .required()
    .oneOf([ref('password')]),
};

export const gender = {
  gender: string().required(),
};
