import { createAction } from '@reduxjs/toolkit';
import { TopicCollection } from 'interfaces/topic/topic-response-interface';

export const setTopicCollection = createAction<TopicCollection[]>('topic/setTopicCollection');
