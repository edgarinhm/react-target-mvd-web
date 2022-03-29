import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import Geolocation from 'interfaces/geolocation/geolocation-interface';
import { setMapLocation } from 'state/actions/place-actions';

export interface PlaceState {
  id: string;
  lng: number;
  lat: number;
  icon?: string;
}
const initialState: PlaceState = {
  id: '',
  lng: 0,
  lat: 0,
  icon: '',
};

const handleMapLocation = (state: PlaceState, { payload }: PayloadAction<Geolocation>) => {
  state.lng = payload.lng;
  state.lat = payload.lat;
  state.icon = payload.icon;
};

export default createReducer(initialState, {
  [setMapLocation.type]: handleMapLocation,
});
