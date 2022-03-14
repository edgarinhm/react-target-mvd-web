import { useTranslation as useTranslator } from 'react-i18next';

const useTranslation = () => {
  const { t } = useTranslator();
  return (key: string, values?: object | undefined) => t(key, values);
};

export default useTranslation;
