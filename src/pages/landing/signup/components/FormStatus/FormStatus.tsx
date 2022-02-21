import { FormStatusBase } from 'components/common';
// import { useState } from 'react';

interface FormStatusProps {
  isLoading: boolean;
  error: string;
}

const FormStatus = () => {
  // const [error] = useState();
  const state = { isLoading: true, mainError: '' };
  return <FormStatusBase state={state} />;
};

export default FormStatus;
