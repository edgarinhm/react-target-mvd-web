import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import mapMedia from 'assets/layout/media/map.png';
import trashIcon from 'assets/layout/icons/trash-icon.svg';
import { MapMarker } from 'interfaces/map/map-marker-interface';
import { useMap } from './useMap';
import './map.scss';

interface MapProps {
  onMapClick: () => void;
  marker?: MapMarker;
}

const Map = ({ onMapClick, marker }: MapProps) => {
  const {
    selectedLocation,
    isLoaded,
    options,
    onLoad,
    markerIcon,
    handleMapClick,
    defaultCenter,
    handleSelected,
    selected,
    handleDelete,
    locationCollection,
  } = useMap();

  const onClick = (e: google.maps.MapMouseEvent) => {
    handleMapClick(e);
    onMapClick();
  };

  if (!isLoaded) return <img src={mapMedia} alt="map of targets" />;

  console.log('locationCollection', locationCollection);

  const markers = locationCollection?.map(contaniner => (
    <Marker
      key={contaniner.id}
      position={contaniner.location}
      icon={markerIcon(contaniner.icon!)}
      onClick={() => handleSelected(contaniner)}
    />
  ));

  return (
    <GoogleMap
      mapContainerClassName="map-container"
      options={options}
      onLoad={onLoad}
      onClick={onClick}
      center={defaultCenter}
    >
      {selectedLocation && (
        <Marker position={selectedLocation.location} icon={markerIcon(selectedLocation.icon!)} />
      )}

      {marker && <Marker position={marker.location} icon={markerIcon(marker.icon!)} />}
      {markers}
      {selected && (
        <InfoWindow
          position={{ lat: selected.location.lat, lng: selected.location.lng }}
          onCloseClick={() => handleSelected(null)}
        >
          <div className="map-container__infoview-marker">
            <h2 className="map-container__infoview-title">{selected.name}</h2>
            <p className="map-container__infoview-topic">{selected.topic}</p>
            <button
              className="map-container__trash-button"
              onClick={() => handleDelete(selected.id)}
            >
              <img
                className="map-container__trash-icon"
                src={trashIcon}
                alt={`delete ${selected.name}`}
              />
            </button>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default Map;
