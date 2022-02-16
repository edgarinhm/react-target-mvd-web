import Styles from './form-status-styles.scss';

import { Spinner } from '../Spinner';

interface FormStatusProps {
  state: any;
}

const FormStatus = ({ state }: FormStatusProps) => {
  const { isLoading, mainError } = state;
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {mainError && (
        <span data-testid="main-error" className={Styles.error}>
          {mainError}
        </span>
      )}
    </div>
  );
};

export default FormStatus;
