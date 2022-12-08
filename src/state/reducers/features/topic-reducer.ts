import { createAction, createReducer } from '@reduxjs/toolkit';
import { setTopicCollection } from 'state/actions/topic-actions';
import { TopicCollection } from 'interfaces/topic/topic-response-interface';

export interface TopicState {
  topics: TopicCollection[];
}

const initialState: TopicState = {
  topics: [],
};

const resetAction = createAction('reset-tracked-loading-state');

const chatReducer = createReducer(initialState, builder => {
  builder
    .addCase(resetAction, () => initialState)
    .addCase(setTopicCollection, (state, { payload }) => {
      state.topics = [...payload];
    });
});

export default chatReducer;
