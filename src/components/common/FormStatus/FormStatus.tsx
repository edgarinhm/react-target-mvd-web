import './form-status-styles.scss';

import { Spinner } from '../Spinner';

interface FormStatusProps {
  state: {
    isLoading: boolean;
    mainError: string;
  };
}

const FormStatus = ({ state }: FormStatusProps) => {
  const { isLoading, mainError } = state;
  return (
    <div data-testid="error-wrap" className="error-wrap">
      {isLoading && <Spinner className="spinner" />}
      {mainError && (
        <span data-testid="main-error" className="error">
          {mainError}
        </span>
      )}
    </div>
  );
};

export default FormStatus;
