import { Spinner } from '../Spinner';
import useInterceptor from 'hooks/useInterceptor';
import './form-status-styles.scss';

const FormStatus = () => {
  const { isLoading, errors } = useInterceptor();
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
