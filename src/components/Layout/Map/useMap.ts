import { useCallback, useMemo, useRef } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { useAppSelector, useAppDispatch } from 'hooks';
import { MapMarker } from 'interfaces/map/map-marker-interface';
import { defaultCenter, defaultOptions } from 'config/google-maps';
import { setMapLocation } from 'state/actions/place-actions';

export const useMap = () => {
  const { id, lat, lng, icon } = useAppSelector(state => state.placeReducer);
  const selectedMarker: MapMarker = { id, location: { lat, lng }, icon };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!,
  });
  const options = useMemo<google.maps.MapOptions>(() => defaultOptions, []);
  const mapRef = useRef<GoogleMap | null>();

  const onLoad = useCallback(map => (mapRef.current = map), []);

  const moveTo = (location: google.maps.LatLngLiteral) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat: location.lat, lng: location.lng });
    }
  };

  const markerIcon = (url: string) => {
    return url === ''
      ? undefined
      : {
          url,
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(15, 15),
          scaledSize: new window.google.maps.Size(30, 30),
        };
  };

  const dispatch = useAppDispatch();

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    moveTo({ lat: e.latLng!.lat(), lng: e.latLng!.lng() });
    dispatch(setMapLocation({ lat: e.latLng!.lat(), lng: e.latLng!.lng(), icon }));
  };

  return {
    selectedMarker,
    isLoaded,
    options,
    onLoad,
    markerIcon,
    handleMapClick,
    defaultCenter,
  };
};
