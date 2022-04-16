import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import Target from 'interfaces/target/target-interface';
import { TargetColletion } from 'interfaces/target/target-response-interface';
import TargetService from 'services/target-service';
import { setMapLocation } from './place-actions';

export const createTarget = createAsyncThunk(
  'target/create',
  async (target: Target, { dispatch }) => {
    try {
      const data = await TargetService.createTarget(target);
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

export const setTarget = createAction<Target | undefined>('target/setTarget');
export const setTargetCollection = createAction<TargetColletion[] | undefined>(
  'target/TargetCollection'
);
export const removeTarget = createAction<number | undefined>('target/removeTarget');
