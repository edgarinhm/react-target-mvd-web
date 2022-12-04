import { useCallback, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks';
import TargetService from 'services/target-service';
import TopicService from 'services/topic-service';
import ChatService from 'services/chat-service';
import { setHomeContent } from 'state/actions/home-actions';
import { setTargetCollection } from 'state/actions/target-actions';
import { setChatCollection } from 'state/actions/chat-actions';
import { setLocationCollection } from 'state/actions/place-actions';
import { setTopicCollection } from 'state/actions/topic-actions';
import { MapMarker } from 'interfaces/map/map-marker-interface';
import { Conversations } from 'interfaces/chat/conversations-interface';
import { TopicColletion } from 'interfaces/topic/topic-response-interface';

export enum HomeContent {
  Empty,
  TargetNewView,
  ChatView,
  AboutView,
  ProfileEditView,
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
    const targetsCollection = await TargetService.findAllTargets();
    const markers: MapMarker[] = targetsCollection.map(targetOption => ({
      id: targetOption.target.id,
      name: targetOption.target.title,
      icon: TopicService.findTopicById(targetOption.target.topicId, topicsCollection)?.icon,
      location: { lat: targetOption.target.lat, lng: targetOption.target.lng },
      topic: TopicService.findTopicById(targetOption.target.topicId, topicsCollection)?.label,
    }));

    dispatch(setTopicCollection(topicsCollection));
    dispatch(setTargetCollection(targetsCollection));
    dispatch(setLocationCollection(markers));
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const loadChatData = useCallback(async () => {
    const chatCollection: Conversations[] = await ChatService.findAllChats();
    if (chatCollection.length && activeContent === HomeContent.Empty) {
      dispatch(setHomeContent(HomeContent.ChatView));
    }
    dispatch(setChatCollection(chatCollection));
  }, [activeContent, dispatch]);

  useEffect(() => {
    loadChatData();
  }, [loadChatData]);

  const { activeSidebar } = useAppSelector(state => state.homeReducer);

  return {
    activeContent,
    handleMapClick,
    currentLocation,
    activeSidebar,
  };
};
