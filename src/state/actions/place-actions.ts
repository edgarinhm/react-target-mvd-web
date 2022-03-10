import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { getUserLocation } from 'utils';

export const getCurrentLocation = createAsyncThunk('location/current', async () => {
  try {
    return await getUserLocation();
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const setUserLocation = createAction<object | undefined>('location/setUserLocation');
