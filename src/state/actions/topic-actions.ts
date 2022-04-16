import { createAction } from '@reduxjs/toolkit';

export const setTopicCollection = createAction<object | undefined>('topic/setTopicCollection');
