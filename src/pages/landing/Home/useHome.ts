import { useAppSelector, useAppDispatch } from 'hooks';
import { MapMarker } from 'interfaces/map/map-marker-interface';
import { setHomeContent } from 'state/actions/home-actions';
import topics from 'data/topics.json';

export enum HomeContent {
  Empty,
  NewTarget,
  ViewChat,
}

interface HomeContentElement {
  content: JSX.Element;
}
export type homeContentDictionary = Record<HomeContent, HomeContentElement>;

export const useHome = () => {
  const { activeContent } = useAppSelector(state => state.homeReducer);
  const { targets } = useAppSelector(state => state.targetReducer);
  const dispatch = useAppDispatch();

  const handleMapClick = (content: HomeContent) => {
    dispatch(setHomeContent(content));
  };

  const markerTargets: MapMarker[] = targets?.map(target => ({
    id: target.id,
    name: target.title,
    icon: topics.find(opt => (opt.id === target.topicId ? opt.icon : null))?.icon,
    location: { lat: target.lat, lng: target.lng },
  }));

  const {
    currentLocation: { id, lat, lng, icon },
  } = useAppSelector(state => state.placeReducer);
  const currentLocation: MapMarker = { id, location: { lat, lng }, icon };

  return {
    activeContent,
    handleMapClick,
    markerTargets,
    currentLocation,
  };
};
