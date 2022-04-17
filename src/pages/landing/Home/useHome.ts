import { useCallback, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks';
import TargetService from 'services/target-service';
import TopicService from 'services/topic-service';
import { setHomeContent } from 'state/actions/home-actions';
import { setTargetCollection } from 'state/actions/target-actions';
import { MapMarker } from 'interfaces/map/map-marker-interface';
import { TopicColletion } from 'interfaces/topic/topic-response-interface';
import { setLocationCollection } from 'state/actions/place-actions';
import { setTopicCollection } from 'state/actions/topic-actions';

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

  const loadData = useCallback(async () => {
    const topicsCollection: TopicColletion[] = await TopicService.findAllTopics();
    const targetsCollecion = await TargetService.findAllTargets();
    const markers: MapMarker[] = targetsCollecion.map(targetOption => ({
      id: targetOption.target.id,
      name: targetOption.target.title,
      icon: TopicService.findTopicById(targetOption.target.topicId, topicsCollection)?.icon,
      location: { lat: targetOption.target.lat, lng: targetOption.target.lng },
      topic: TopicService.findTopicById(targetOption.target.topicId, topicsCollection)?.label,
    }));
    dispatch(setTopicCollection(topicsCollection));
    dispatch(setTargetCollection(targetsCollecion));
    dispatch(setLocationCollection(markers));
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    activeContent,
    handleMapClick,
    currentLocation,
  };
};
