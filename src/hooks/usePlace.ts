import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'state/reducers';

const usePlace = () =>
  useSelector(
    ({ placeReducer: { isLoading, userLocation } }: RootState) => ({
      isLoading,
      userLocation,
    }),
    shallowEqual
  );

export default usePlace;
