import { useTranslation } from 'react-i18next';
import { ValidationError } from 'interfaces/validation/validation-error-interface';

export interface ErrorMessageProps {
  error?: ValidationError | string;
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  const { t } = useTranslation();

  if (error === undefined) {
    return null;
  } else if (typeof error === 'string') {
    return <div className="input-error">{error}</div>;
  } else {
    const { key, values } = error;
    return <div className="input-error">{t(key, values)}</div>;
  }
};
