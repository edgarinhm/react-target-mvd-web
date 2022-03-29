import { useSelector } from 'react-redux';
import { AsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'state/reducers/root-reducer';
import { StatusResponse } from 'state/reducers/features/status-reducer';

const useStatus = (action: AsyncThunk<any, any, any>) =>
  useSelector(({ statusReducer }: RootState) => {
    const { status, error, payload }: StatusResponse = statusReducer[action?.typePrefix] || {};
    return { status, error, payload };
  });

export default useStatus;
