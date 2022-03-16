import { useMemo, useCallback, useRef, useEffect } from 'react';
import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import { setUserLocation } from 'state/actions/place-actions';
import { getUserLocation } from 'utils';
import mapMedia from 'assets/layout/media/map.png';
import './map.scss';
import { useAppDispatch } from 'hooks/useDispatch';

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

  const moveTo = (location: LatLngLiteral) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat: location.lat, lng: location.lng });
    }
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    getUserLocation().then(([lng, lat]) => {
      const location: LatLngLiteral = { lng, lat };
      moveTo(location);
      dispatch(setUserLocation(location));
    });
  }, [dispatch]);

  if (!isLoaded) return <img src={mapMedia} alt="map of targets" />;

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
