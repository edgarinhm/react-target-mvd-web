import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import Target from 'interfaces/target/target-interface';
import TargetService from 'services/target-service';

export const createTarget = createAsyncThunk(
  'target/create',
  async (target: Target, { dispatch }) => {
    try {
      const data = await TargetService.createTarget(target);
      dispatch(setTargets(data));
      return data;
    } catch ({ response: { data } }) {
      throw data;
    }
  }
);

export const setTargets = createAction<Target | undefined>('target/setTargets');
