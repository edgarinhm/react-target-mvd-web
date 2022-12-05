import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setChatCollection, setCurrentChatId } from 'state/actions/chat-actions';
import { Conversations } from 'interfaces/chat/conversations-interface';

export interface ChatState {
  matches: Conversations[];
  currentChatId: number;
}

const initialState: ChatState = {
  matches: [],
  currentChatId: 0,
};

const handleSetChatCollection = (state: ChatState, { payload }: PayloadAction<Conversations[]>) => {
  state.matches = { ...payload };
};

const handleSetCurrentChatId = (state: ChatState, { payload }: PayloadAction<number>) => {
  state.currentChatId = payload;
};

export default createReducer(initialState, {
  [setChatCollection.type]: handleSetChatCollection,
  [setCurrentChatId.type]: handleSetCurrentChatId,
});
