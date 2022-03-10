import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import Geolocation from 'interfaces/geolocation/geolocation-interface';
import { getCurrentLocation, setUserLocation } from 'state/actions/place-actions';

export interface PlaceState {
  isLoading: boolean;
  userLocation: Geolocation;
}

const initialState: PlaceState = {
  isLoading: true,
  userLocation: {},
};

const handleSetLocation = (state: PlaceState, { payload }: PayloadAction<Geolocation>) => {
  state.isLoading = false;
  state.userLocation = payload;
};

export default createReducer(initialState, {
  [getCurrentLocation.fulfilled.type]: handleSetLocation,
  [setUserLocation.type]: handleSetLocation,
});
