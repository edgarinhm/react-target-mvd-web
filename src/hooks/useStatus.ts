import { useSelector } from 'react-redux';

import { RootState } from 'state/reducers';
import { GenericAsyncThunk } from 'state/reducers/statusReducer';

const useStatus = (action: GenericAsyncThunk) =>
  useSelector(({ statusReducer }: RootState) => {
    // const { status, error } = statusReducer[action?.typePrefix] || {};
    // return { status, error };
    return {};
  });

export default useStatus;
