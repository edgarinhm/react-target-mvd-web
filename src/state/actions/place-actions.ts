import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import TargetService from 'services/target-service';
import { MapMarker } from 'interfaces/map/map-marker-interface';
import Geolocation from 'interfaces/geolocation/geolocation-interface';

export const setCurrentLocation = createAction<Geolocation>('location/setCurrentLocation');
export const setMapLocation = createAction<Geolocation>('location/setMapLocation');

export const deleteMarker = createAsyncThunk('location/delete', async (id: number) => {
  try {
    return await TargetService.deleteTarget(id);
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const setLocationCollection = createAction<MapMarker[]>('location/setLocationCollection');

export const addLocationToCollection = createAction<MapMarker>('location/addLocationToCollection');
