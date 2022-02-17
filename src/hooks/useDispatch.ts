import { useCallback } from 'react';
import { useDispatch as useReduxDispatch } from 'react-redux';

import { GenericAsyncThunk } from 'state/reducers/statusReducer';

const useDispatch = (action: GenericAsyncThunk, ...dependencies: any) => {
  const dispatch = useReduxDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(payload => dispatch(action(payload)), [dispatch, action, ...dependencies]);
};

export default useDispatch;
