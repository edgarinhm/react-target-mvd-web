import { validationI18n } from 'constants/i18n-constant';

const yupLocale = {
  mixed: {
    default: {
      key: validationI18n.INVALID,
    },
    required: ({ path, type, value, originalValue, ref }: any) => ({
      key: validationI18n.REQUIRED,
      values: { path, type, value, originalValue, ref },
    }),
    notType: ({ path, type, value: { text }, originalValue, ref }: any) => ({
      key: validationI18n.INVALIDTYPE,
      values: { path, type, text, originalValue, ref },
    }),
    oneOf: ({ path, type, value, originalValue, ref }: any) => ({
      key: validationI18n.ONEOF,
      values: { path, type, value, originalValue, ref },
    }),
  },
  string: {
    email: {
      key: validationI18n.EMAIL,
    },
    min: ({ min }: any) => ({
      key: validationI18n.MIN,
      values: { min },
    }),
    max: ({ max }: any) => ({
      key: validationI18n.MAX,
      values: { max },
    }),
  },
  number: {
    min: ({ min }: any) => ({
      key: validationI18n.MIN,
      values: { min },
    }),
    max: ({ max }: any) => ({
      key: validationI18n.MAX,
      values: { max },
    }),
  },
  boolean: {},
};

export default yupLocale;
