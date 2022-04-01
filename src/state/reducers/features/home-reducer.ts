import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setHomeContent } from 'state/actions/home-actions';
import { HomeContent } from 'pages/landing/Home/useHome';

export interface HomeState {
  activeContent: HomeContent;
}

const initialState: HomeState = {
  activeContent: HomeContent.Empty,
};

const handleHomeContent = (state: HomeState, { payload }: PayloadAction<HomeContent>) => {
  state.activeContent = payload;
};

export default createReducer(initialState, {
  [setHomeContent.type]: handleHomeContent,
});
