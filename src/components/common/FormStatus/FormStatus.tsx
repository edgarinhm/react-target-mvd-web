import { Spinner } from '../Spinner';
import useInterceptor from 'hooks/useInterceptor';
import './form-status-styles.scss';

const FormStatus = () => {
  const { isLoading, errors } = useInterceptor();
  return (
    <div data-testid="error-wrap" className="error-wrap">
      {isLoading && <Spinner className="spinner" />}
      {errors && (
        <span data-testid="main-error" className="error">
          {errors}
        </span>
      )}
    </div>
  );
};

export default FormStatus;
