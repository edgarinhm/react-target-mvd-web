import { createAction, createReducer } from '@reduxjs/toolkit';
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

const resetAction = createAction('reset-tracked-loading-state');

export default createReducer(initialState, builder => {
  builder
    .addCase(resetAction, () => initialState)
    .addCase(setHomeContent, (state, { payload }) => {
      state.activeContent = payload;
    })
    .addCase(setHomeSidebar, (state, { payload }) => {
      state.activeSidebar = payload;
    });
});
