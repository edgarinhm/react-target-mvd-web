import { createAction } from '@reduxjs/toolkit';
import { Conversations } from 'interfaces/chat/conversations-interface';

export const setChatCollection = createAction<Conversations[]>('chat/setChatCollection');

export const setCurrentChatId = createAction<number>('chat/setCurrentChatId');
