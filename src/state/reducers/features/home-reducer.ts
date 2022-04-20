import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setHomeContent, setHomeSidebar } from 'state/actions/home-actions';
import { HomeContent } from 'pages/landing/Home/useHome';

export interface HomeState {
  activeContent: HomeContent;
  activeSidebar: boolean;
}

const initialState: HomeState = {
  activeContent: HomeContent.Empty,
  activeSidebar: false,
};

const handleHomeContent = (state: HomeState, { payload }: PayloadAction<HomeContent>) => {
  state.activeContent = payload;
};

const handleActiveSidebar = (state: HomeState, { payload }: PayloadAction<boolean>) => {
  state.activeSidebar = payload;
};

export default createReducer(initialState, {
  [setHomeContent.type]: handleHomeContent,
  [setHomeSidebar.type]: handleActiveSidebar,
});
