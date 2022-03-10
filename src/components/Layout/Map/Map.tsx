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

  const moveTo = (position: LatLngLiteral) => {
    if (mapRef.current) {
      mapRef.current?.panTo({ lat: position.lat, lng: position.lng });
    }
  };

  const location = getUserLocation();
  location.then(([lng, lat]) => {
    const position: LatLngLiteral = { lng, lat };
    moveTo(position);
    dispatch(setUserLocation(position));
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
