import { FormStatusBase } from 'components/common';
import useInterceptor from 'hooks/useInterceptor';

const FormStatus = () => {
  const { isLoading, errors } = useInterceptor();
  return <FormStatusBase isLoading={isLoading} errors={errors} />;
};

export default FormStatus;
