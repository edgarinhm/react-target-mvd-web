import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import Geolocation from 'interfaces/geolocation/geolocation-interface';
import { setUserLocation, setMapLocation } from 'state/actions/place-actions';

export interface PlaceState {
  lng: number;
  lat: number;
  icon?: string;
}
const initialState: PlaceState = {
  lng: 0,
  lat: 0,
  icon: '',
};

const handleUserLocation = (state: PlaceState, { payload }: PayloadAction<Geolocation>) => {
  state.lng = payload.lng;
  state.lat = payload.lat;
  state.icon = payload.icon;
};

const handleMapLocation = (state: PlaceState, { payload }: PayloadAction<Geolocation>) => {
  state.lng = payload.lng;
  state.lat = payload.lat;
  state.icon = payload.icon;
};

export default createReducer(initialState, {
  [setUserLocation.type]: handleUserLocation,
  [setMapLocation.type]: handleMapLocation,
});
