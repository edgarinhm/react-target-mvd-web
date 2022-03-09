import { useMemo, useCallback, useRef } from 'react';
import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import mapMedia from 'assets/layout/media/map.png';
import './map.scss';

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
  const center = useMemo<LatLngLiteral>(() => defaultCenter, []);

  const onLoad = useCallback(map => (mapRef.current = map), []);

  if (!isLoaded) return <img src={mapMedia} alt="map of targets" />;

  return (
    <GoogleMap
      mapContainerClassName="map-container"
      options={options}
      center={center}
      zoom={12}
      onLoad={onLoad}
    />
  );
};

export default Map;
