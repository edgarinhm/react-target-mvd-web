import { createAction, createSlice } from '@reduxjs/toolkit';
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

const resetAction = createAction('reset-tracked-loading-state');

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(resetAction, () => initialState)
      .addCase(setChatCollection, (state, { payload }) => {
        state.matches = [...payload];
      })
      .addCase(setCurrentChatId, (state, action) => {
        state.currentChatId = action.payload;
      });
  },
});

export default chatsSlice.reducer;
