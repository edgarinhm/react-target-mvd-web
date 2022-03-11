import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'state/reducers/root-reducer';

const usePlace = () =>
  useSelector(
    ({ placeReducer: { lng, lat } }: RootState) => ({
      lng,
      lat,
    }),
    shallowEqual
  );

export default usePlace;
