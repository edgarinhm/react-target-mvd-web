import { FormStatusBase } from 'components/common';
// import { useState } from 'react';

interface FormStatusProps {
  isLoading: boolean;
  error: string;
}

const FormStatus = ({ isLoading, error }: FormStatusProps) => {
  // const [error] = useState();
  const state = { isLoading: isLoading, mainError: error };
  return <FormStatusBase state={state} />;
};

export default FormStatus;
