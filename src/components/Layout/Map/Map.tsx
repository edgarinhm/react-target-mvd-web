import { useMemo, useCallback, useRef } from 'react';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { setMapLocation } from 'state/actions/place-actions';
import { useAppDispatch, useAppSelector } from 'hooks';
import mapMedia from 'assets/layout/media/map.png';
import './map.scss';

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;
type MapMouseEvent = google.maps.MapMouseEvent;
export interface MapMarker {
  location: LatLngLiteral;
  id?: string;
  name?: string;
  icon?: string;
}

export const defaultCenter = {
  lat: 3.43722,
  lng: -76.5225,
};

export const defaultOptions: MapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  clickableIcons: false,
  zoom: 12,
};

interface MapProps {
  onMapClick?: () => void;
  marker?: MapMarker;
}

const Map = ({ onMapClick }: MapProps) => {
  const { lat, lng, icon } = useAppSelector(state => state.placeReducer);
  const selectedMarker: MapMarker = { location: { lat, lng }, icon: icon ? icon : '' };

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

  const markerIcon = (url: string) => {
    return {
      url,
      origin: new window.google.maps.Point(0, 0),
      anchor: new window.google.maps.Point(15, 15),
      scaledSize: new window.google.maps.Size(30, 30),
    };
  };

  const dispatch = useAppDispatch();

  const handleMapClick = (e: MapMouseEvent) => {
    moveTo({ lat: e.latLng!.lat(), lng: e.latLng!.lng() });
    dispatch(setMapLocation({ lat: e.latLng!.lat(), lng: e.latLng!.lng(), icon }));
    if (onMapClick) {
      onMapClick();
    }
  };

  if (!isLoaded) return <img src={mapMedia} alt="map of targets" />;

  return (
    <GoogleMap
      mapContainerClassName="map-container"
      options={options}
      onLoad={onLoad}
      onClick={handleMapClick}
      center={defaultCenter}
    >
      {selectedMarker && (
        <Marker position={selectedMarker.location} icon={markerIcon(selectedMarker.icon!)} />
      )}
    </GoogleMap>
  );
};

export default Map;
