import { GoogleMap, Marker } from '@react-google-maps/api';
import mapMedia from 'assets/layout/media/map.png';
import { MapMarker } from 'interfaces/map/map-marker-interface';
import { useMap } from './useMap';
import './map.scss';

interface MapProps {
  onMapClick: () => void;
  marker?: MapMarker;
}

const Map = ({ onMapClick }: MapProps) => {
  const { selectedMarker, isLoaded, options, onLoad, markerIcon, handleMapClick, defaultCenter } =
    useMap();

  const onClick = (e: google.maps.MapMouseEvent) => {
    handleMapClick(e);
    onMapClick();
  };

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
    </GoogleMap>
  );
};

export default Map;
