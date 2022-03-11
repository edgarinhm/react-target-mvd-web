import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'state/reducers/root-reducer';

const useInterceptor = () =>
  useSelector(
    ({ interceptorReducer: { isLoading, error } }: RootState) => ({
      isLoading,
      error,
    }),
    shallowEqual
  );

export default useInterceptor;
