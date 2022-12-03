import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setChatCollection } from 'state/actions/chat-actions';
import { Conversations } from 'interfaces/chat/conversations-interface';

export interface ChatState {
  matches: Conversations[];
}

const initialState: ChatState = {
  matches: [],
};

const handleSetChatCollection = (state: ChatState, { payload }: PayloadAction<Conversations[]>) => {
  state.matches = { ...payload };
};

export default createReducer(initialState, {
  [setChatCollection.type]: handleSetChatCollection,
});
