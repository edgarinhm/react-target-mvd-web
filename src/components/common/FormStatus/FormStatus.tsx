import './form-status-styles.scss';

import { Spinner } from '../Spinner';

interface FormStatusProps {
  isLoading: boolean;
  errors?: string;
}

const FormStatus = ({ isLoading, errors }: FormStatusProps) => {
  return (
    <div data-test-id="error-wrap" className="error-wrap">
      {isLoading && <Spinner className="spinner" />}
      {errors && (
        <span data-test-id="main-error" className="error">
          {errors}
        </span>
      )}
    </div>
  );
};

export default FormStatus;
