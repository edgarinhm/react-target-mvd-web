import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import Target from 'interfaces/target/target-interface';
import TargetService from 'services/target-service';
import { setMapLocation } from './place-actions';

export const createTarget = createAsyncThunk(
  'target/create',
  async (target: Target, { dispatch }) => {
    try {
      const data = await TargetService.createTarget(target);
      dispatch(setTargets(data));
      dispatch(
        setMapLocation({
          id: 0,
          lng: 0,
          lat: 0,
          icon: '',
        })
      );
      return data;
    } catch ({ response: { data } }) {
      throw data;
    }
  }
);

export const findAllTargets = createAsyncThunk('target/all', async () => {
  try {
    return await TargetService.findAllTargets();
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const setTargets = createAction<Target | undefined>('target/setTargets');
