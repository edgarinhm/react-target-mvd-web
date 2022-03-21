import yupLocale from 'config/yup-locale';
import { string, ref, setLocale, mixed } from 'yup';

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
  gender: mixed()
    .transform((value: any) => {
      return value && value !== null ? value : null;
    })
    .required(),
};
