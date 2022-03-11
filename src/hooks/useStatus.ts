import { useSelector } from 'react-redux';

import { RootState } from 'state/reducers/root-reducer';
import { GenericAsyncThunk } from 'state/reducers/status-reducer';

const useStatus = (action: GenericAsyncThunk) =>
  useSelector(({ statusReducer }: RootState) => {
    return {};
  });

export default useStatus;
