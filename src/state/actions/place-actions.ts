import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import TargetService from 'services/target-service';

export const setCurrentLocation = createAction<object | undefined>('location/setCurrentLocation');
export const setMapLocation = createAction<object | undefined>('location/setMapLocation');

export const deleteMarker = createAsyncThunk('location/delete', async (id: number) => {
  try {
    return await TargetService.deleteTarget(id);
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const setLocationCollection = createAction<object | undefined>(
  'location/setLocationCollection'
);
