import { Spinner } from '../Spinner';
import useInterceptor from 'hooks/useInterceptor';
import './form-status-styles.scss';

const FormStatus = () => {
  const { isLoading, error } = useInterceptor();
  return (
    <div data-testid="error-wrap" className="error-wrap">
      {isLoading && <Spinner className="spinner" />}
      {error && (
        <span data-test-id="main-error" className="error">
          {error}
        </span>
      )}
    </div>
  );
};

export default FormStatus;
