import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setHomeContent, setHomeTargets } from 'state/actions/home-actions';
import { HomeContent } from 'pages/landing/Home/useHome';
import Target from 'interfaces/target/target-interface';

export interface HomeState {
  activeContent: HomeContent;
  targets?: Target[];
}

const initialState: HomeState = {
  activeContent: HomeContent.Empty,
};

const handleHomeContent = (state: HomeState, { payload }: PayloadAction<HomeContent>) => {
  state.activeContent = payload;
};

const handleHomeTargets = (state: HomeState, { payload }: PayloadAction<Target[]>) => {
  state.targets = payload;
};

export default createReducer(initialState, {
  [setHomeContent.type]: handleHomeContent,
  [setHomeTargets.type]: handleHomeTargets,
});
