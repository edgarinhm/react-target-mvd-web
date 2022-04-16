import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setTopicCollection } from 'state/actions/topic-actions';
import { TopicColletion } from 'interfaces/topic/topic-response-interface';

export interface TopicState {
  topics: TopicColletion[];
}

const initialState: TopicState = {
  topics: [],
};

const handleSetTopicCollection = (
  state: TopicState,
  { payload }: PayloadAction<TopicColletion[]>
) => {
  state.topics = { ...payload };
};

export default createReducer(initialState, {
  [setTopicCollection.type]: handleSetTopicCollection,
});
