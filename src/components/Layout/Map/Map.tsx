import { useMemo, useCallback, useRef } from 'react';
import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import mapMedia from 'assets/layout/media/map.png';
import './map.scss';
import { setUserLocation } from 'state/actions/place-actions';
import { getUserLocation } from 'utils/getUserLocation';
import { AppDispatch, store } from 'state/store';

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

export const defaultCenter = {
  lat: 3.43722,
  lng: -76.5225,
};

export const defaultOptions: MapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  clickableIcons: false,
};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!,
  });

  const options = useMemo<MapOptions>(() => defaultOptions, []);
  const mapRef = useRef<GoogleMap | null>();

  const onLoad = useCallback(map => (mapRef.current = map), []);

  if (!isLoaded) return <img src={mapMedia} alt="map of targets" />;

  const dispatch: AppDispatch = store.dispatch;

  const moveTo = (location: LatLngLiteral) => {
    mapRef.current?.panTo({ lat: location.lat, lng: location.lng });
  };

  getUserLocation().then(([lng, lat]) => {
    const location: LatLngLiteral = { lng, lat };
    moveTo(location);
    dispatch(setUserLocation(location));
  });

  return (
    <GoogleMap
      mapContainerClassName="map-container"
      options={options}
      center={defaultCenter}
      zoom={12}
      onLoad={onLoad}
    />
  );
};

export default Map;
