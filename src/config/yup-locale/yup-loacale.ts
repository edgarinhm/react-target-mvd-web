import { validationI18n } from 'constants/i18n-constant';

const yupLocale = {
  mixed: {
    default: {
      key: validationI18n.INVALID,
    },
    required: {
      key: validationI18n.REQUIRED,
    },
    notType: ({ type }: any) => ({
      key: validationI18n.INVALIDTYPE,
      values: { type },
    }),
    oneOf: ({ ref }: any) => ({
      key: validationI18n.ONEOF,
      values: { ref },
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
