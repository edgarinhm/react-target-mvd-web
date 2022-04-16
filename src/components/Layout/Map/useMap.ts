import { useCallback, useMemo, useRef, useState } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { useAppSelector, useAppDispatch } from 'hooks';
import { MapMarker } from 'interfaces/map/map-marker-interface';
import { defaultCenter, defaultOptions } from 'config/google-maps';
import { deleteMarker, setMapLocation, setLocationCollection } from 'state/actions/place-actions';

export const useMap = () => {
  const { id, lat, lng, icon } = useAppSelector(state => state.placeReducer);
  const selectedLocation: MapMarker = { id, location: { lat, lng }, icon };

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
          scaledSize: new window.google.maps.Size(40, 40),
        };
  };

  const dispatch = useAppDispatch();

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    moveTo({ lat: e.latLng!.lat(), lng: e.latLng!.lng() });
    dispatch(setMapLocation({ lat: e.latLng!.lat(), lng: e.latLng!.lng(), icon }));
  };

  const [selected, setSelected] = useState<MapMarker | null>();

  const handleSelected = (marker: MapMarker | null) => {
    setSelected(marker);
  };

  const { locationCollection } = useAppSelector(state => state.placeReducer);

  const handleDelete = (markerId: number) => {
    dispatch(deleteMarker(markerId));
    const markersCollection = locationCollection.filter(collection => collection.id !== markerId);
    dispatch(setLocationCollection(markersCollection));
  };

  return {
    selectedLocation,
    isLoaded,
    options,
    onLoad,
    markerIcon,
    handleMapClick,
    defaultCenter,
    selected,
    handleSelected,
    handleDelete,
    locationCollection,
  };
};
