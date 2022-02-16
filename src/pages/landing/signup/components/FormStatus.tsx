import { FormStatusBase } from 'components/common';
// import { useState } from 'react';

const FormStatus = () => {
  // const [error] = useState();
  const state = { isLoading: false, mainError: 'si hay error' };
  return <FormStatusBase state={{ state }} />;
};

export default FormStatus;
