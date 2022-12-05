import { createAction } from '@reduxjs/toolkit';

export const setChatCollection = createAction<object | undefined>('chat/setChatCollection');

export const setCurrentChatId = createAction<number>('chat/setCurrentChatId');
