import { AsyncThunk } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch as useReduxDispatch } from 'react-redux';
import { AppDispatch } from 'state/store';

export const useAppDispatch = () => useReduxDispatch<AppDispatch>();

const useDispatch = (action: AsyncThunk<any, any, any>, ...dependencies: any) => {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(payload => dispatch(action(payload)), [dispatch, action, dependencies]);
};

export default useDispatch;
