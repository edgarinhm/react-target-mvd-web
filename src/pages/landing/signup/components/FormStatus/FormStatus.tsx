import { FormStatusBase } from 'components/common';
import useInterceptor from 'hooks/useInterceptor';

interface FormStatusProps {
  isLoading: boolean;
  errors?: string;
}

const FormStatus = () => {
  const { isLoading, errors } = useInterceptor();
  const state: FormStatusProps = { isLoading, errors };
  return <FormStatusBase state={state} />;
};

export default FormStatus;
