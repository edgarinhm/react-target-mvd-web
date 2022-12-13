import { useSelector } from 'react-redux';
import { AsyncThunk } from '@reduxjs/toolkit';
import { StatusResponse } from 'state/reducers/features/status-reducer';
import { RootState } from 'state/store/store';

const useStatus = (action: AsyncThunk<any, any, any>) =>
  useSelector(({ statusReducer }: RootState) => {
    const { status, error, payload }: StatusResponse = statusReducer[action?.typePrefix] || {};
    return { status, error, payload };
  });

export default useStatus;
