import { createAction, createReducer } from '@reduxjs/toolkit';
import { MapMarker } from 'interfaces/map/map-marker-interface';
import {
  setMapLocation,
  setCurrentLocation,
  setLocationCollection,
  addLocationToCollection,
} from 'state/actions/place-actions';

export interface PlaceState {
  id: number;
  lng: number;
  lat: number;
  icon: string;
  currentLocation: { id: number; lng: number; lat: number; icon: string };
  locationCollection: MapMarker[];
}
const initialState: PlaceState = {
  id: 0,
  lng: 0,
  lat: 0,
  icon: '',
  currentLocation: { id: 0, lng: 0, lat: 0, icon: '' },
  locationCollection: [],
};

const resetAction = createAction('reset-tracked-loading-state');

export default createReducer(initialState, builder => {
  builder
    .addCase(resetAction, () => initialState)
    .addCase(setMapLocation, (state, { payload }) => {
      state.lng = payload.lng;
      state.lat = payload.lat;
      state.icon = payload.icon;
    })
    .addCase(setCurrentLocation, (state, { payload }) => {
      state.currentLocation.lng = payload.lng;
      state.currentLocation.lat = payload.lat;
      state.currentLocation.icon = payload.icon;
    })
    .addCase(setLocationCollection, (state, { payload }) => {
      state.locationCollection = [...state.locationCollection, ...payload];
    })
    .addCase(addLocationToCollection, (state, { payload }) => {
      state.locationCollection = [...state.locationCollection, payload];
    });
});
