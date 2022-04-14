import { useCallback, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks';
import { MapMarker } from 'interfaces/map/map-marker-interface';
import { setHomeContent } from 'state/actions/home-actions';
import topics from 'data/topics.json';
import TargetService from 'services/target-service';
import { setTargetCollection } from 'state/actions/target-actions';

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
  const dispatch = useAppDispatch();

  const handleMapClick = (content: HomeContent) => {
    dispatch(setHomeContent(content));
  };

  const {
    currentLocation: { id, lat, lng, icon },
  } = useAppSelector(state => state.placeReducer);

  const currentLocation: MapMarker = { id, location: { lat, lng }, icon };

  const [markerTargets, setMarkerTargets] = useState<MapMarker[]>([]);

  const loadData = useCallback(async () => {
    const targetsCollecion = await TargetService.findAllTargets();
    const markers: MapMarker[] = targetsCollecion.map(targetOption => ({
      id: targetOption.target.id,
      name: targetOption.target.title,
      icon: topics.find(opt => (opt.id === targetOption.target.topicId ? opt.icon : null))?.icon,
      location: { lat: targetOption.target.lat, lng: targetOption.target.lng },
    }));
    dispatch(setTargetCollection(targetsCollecion));
    setMarkerTargets(markers);
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    activeContent,
    handleMapClick,
    markerTargets,
    currentLocation,
  };
};
