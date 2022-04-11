import { Spinner } from '../Spinner';
import useInterceptor from 'hooks/useInterceptor';
import testIds from 'constants/test-ids-constant';
import './form-status-styles.scss';

const FormStatus = () => {
  const { isLoading, error } = useInterceptor();
  return (
    <div data-testid={testIds.FORM_ERROR} className="error-wrap">
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
