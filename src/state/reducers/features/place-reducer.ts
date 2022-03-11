import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import Geolocation from 'interfaces/geolocation/geolocation-interface';
import { setUserLocation } from 'state/actions/place-actions';

export interface PlaceState {
  lng: number;
  lat: number;
}

const initialState: PlaceState = {
  lng: 0,
  lat: 0,
};

const handleSetLocation = (state: PlaceState, { payload }: PayloadAction<Geolocation>) => {
  state.lng = payload.lng;
  state.lat = payload.lat;
};

export default createReducer(initialState, {
  [setUserLocation.type]: handleSetLocation,
});
