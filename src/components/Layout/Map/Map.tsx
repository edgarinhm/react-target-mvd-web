import { GoogleMap, Marker } from '@react-google-maps/api';
import mapMedia from 'assets/layout/media/map.png';
import { MapMarker } from 'interfaces/map/map-marker-interface';
import { useMap } from './useMap';
import './map.scss';

interface MapProps {
  onMapClick: () => void;
  marker?: MapMarker;
  markerContainer?: MapMarker[];
}

const Map = ({ onMapClick, markerContainer, marker }: MapProps) => {
  const { selectedMarker, isLoaded, options, onLoad, markerIcon, handleMapClick, defaultCenter } =
    useMap();

  const onClick = (e: google.maps.MapMouseEvent) => {
    handleMapClick(e);
    onMapClick();
  };

  const markers = markerContainer?.map(contaniner => (
    <Marker
      key={contaniner.id}
      position={contaniner.location}
      icon={markerIcon(contaniner.icon!)}
    />
  ));

  if (!isLoaded) return <img src={mapMedia} alt="map of targets" />;

  return (
    <GoogleMap
      mapContainerClassName="map-container"
      options={options}
      onLoad={onLoad}
      onClick={onClick}
      center={defaultCenter}
    >
      {selectedMarker && (
        <Marker position={selectedMarker.location} icon={markerIcon(selectedMarker.icon!)} />
      )}

      {marker && <Marker position={marker.location} icon={markerIcon(marker.icon!)} />}
      {markers}
    </GoogleMap>
  );
};

export default Map;
