import { useMemo, useCallback, useRef } from 'react';
import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import mapMedia from 'assets/layout/media/map.png';
import './maps.scss';

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

// Center
export const defaultCenter = {
  lat: 3.43722,
  lng: -76.5225,
};

// Disable default UI
export const defaultOptions: MapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  clickableIcons: false,
};

const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!,
  });

  const options = useMemo<MapOptions>(() => defaultOptions, []);

  // Save map in ref if we want to access the map
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
    ></GoogleMap>
  );
};

export default Maps;
