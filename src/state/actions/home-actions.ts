import { createAction } from '@reduxjs/toolkit';
import { HomeContent } from 'pages/landing/Home/useHome';

export const setHomeContent = createAction<HomeContent | undefined>('home/setHomeContent');
export const setHomeSidebar = createAction<boolean>('home/setHomeSidebar');
