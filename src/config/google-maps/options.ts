import { LATITUDE, LONGITUDE } from 'constants/map-constant';

export const defaultCenter = {
  lat: LATITUDE,
  lng: LONGITUDE,
};

export const defaultOptions: google.maps.MapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  clickableIcons: false,
  zoom: 12,
};
