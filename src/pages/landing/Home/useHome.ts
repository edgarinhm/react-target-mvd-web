import { useCallback, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks';
import TargetService from 'services/target-service';
import TopicService from 'services/topic-service';
import { setHomeContent } from 'state/actions/home-actions';
import { setTargetCollection } from 'state/actions/target-actions';
import { MapMarker } from 'interfaces/map/map-marker-interface';
import { TopicColletion } from 'interfaces/topic/topic-response-interface';
import { DropdownOption } from 'components/common/Dropdown';
import { setLocationCollection } from 'state/actions/place-actions';

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
    const topics: DropdownOption[] = topicsCollection.map(option => ({
      value: option.topic.id,
      text: option.topic.label,
      icon: option.topic.icon,
    }));
    const targetsCollecion = await TargetService.findAllTargets();
    const markers: MapMarker[] = targetsCollecion.map(targetOption => ({
      id: targetOption.target.id,
      name: targetOption.target.title,
      icon: topics.find(opt => (opt.value === targetOption.target.topicId ? opt.icon : null))?.icon,
      location: { lat: targetOption.target.lat, lng: targetOption.target.lng },
      topic: topics.find(opt => (opt.value === targetOption.target.topicId ? opt.text : ''))?.text,
    }));
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
