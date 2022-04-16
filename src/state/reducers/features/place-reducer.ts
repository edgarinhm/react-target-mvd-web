import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import Geolocation from 'interfaces/geolocation/geolocation-interface';
import { MapMarker } from 'interfaces/map/map-marker-interface';
import {
  setMapLocation,
  setCurrentLocation,
  setLocationCollection,
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

const handleMapLocation = (state: PlaceState, { payload }: PayloadAction<Geolocation>) => {
  state.lng = payload.lng;
  state.lat = payload.lat;
  state.icon = payload.icon;
};

const handleCurrentLocation = (state: PlaceState, { payload }: PayloadAction<Geolocation>) => {
  state.currentLocation.lng = payload.lng;
  state.currentLocation.lat = payload.lat;
  state.currentLocation.icon = payload.icon;
};

const handlelocationCollection = (state: PlaceState, { payload }: PayloadAction<MapMarker[]>) => {
  state.locationCollection = [];
  payload.forEach(marker => {
    state.locationCollection.push(marker);
  });
};

export default createReducer(initialState, {
  [setMapLocation.type]: handleMapLocation,
  [setCurrentLocation.type]: handleCurrentLocation,
  [setLocationCollection.type]: handlelocationCollection,
});
