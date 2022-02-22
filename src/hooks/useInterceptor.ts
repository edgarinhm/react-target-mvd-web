import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'state/reducers';

const useInterceptor = () =>
  useSelector(
    ({ interceptorReducer: { isLoading, errors } }: RootState) => ({
      isLoading,
      errors,
    }),
    shallowEqual
  );

export default useInterceptor;
