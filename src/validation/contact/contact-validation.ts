import yupLocale from 'config/yup-locale';
import { string, setLocale } from 'yup';

setLocale(yupLocale);

export const email = {
  email: string().email().required(),
};

export const body = {
  body: string().required(),
};
