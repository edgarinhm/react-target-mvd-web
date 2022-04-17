import { useAppDispatch, useAppSelector, useTranslation } from 'hooks';
import { deleteMarker, setLocationCollection } from 'state/actions/place-actions';
import { MapMarker } from 'interfaces/map/map-marker-interface';

export interface MapRemoveMarkerModalProps {
  isOpen: boolean;
  handleClose: () => void;
  marker: MapMarker;
}

const useMapRemoveMarkerModal = ({ isOpen, handleClose, marker }: MapRemoveMarkerModalProps) => {
  const t = useTranslation();
  const dispatch = useAppDispatch();
  const { locationCollection } = useAppSelector(state => state.placeReducer);
  const markersCollection = locationCollection.filter(collection => collection.id !== marker.id);
  const handleOnClick = () => {
    dispatch(deleteMarker(marker.id));
    dispatch(setLocationCollection(markersCollection));
    handleClose();
  };
  return { handleOnClick, isOpen, handleClose, t };
};

export default useMapRemoveMarkerModal;
