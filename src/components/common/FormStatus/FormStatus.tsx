import './form-status-styles.scss';

import { Spinner } from '../Spinner';

interface FormStatusProps {
  state: {
    isLoading: boolean;
    errors?: string;
  };
}

const FormStatus = ({ state }: FormStatusProps) => {
  const { isLoading, errors } = state;
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
