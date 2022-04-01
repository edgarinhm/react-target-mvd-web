import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import Target from 'interfaces/target/target-interface';
import { createTarget, setTargets } from 'state/actions/target-actions';

export interface TargetState {
  title: string;
  radius: number;
  lat: number;
  lng: number;
  topicId: number | string;
  id: number;
  targets: Target[];
}

const initialState: TargetState = {
  title: '',
  radius: 0,
  lat: 0,
  lng: 0,
  id: 0,
  topicId: '',
  targets: [],
};

const handleCreateFulfilled = (state: TargetState, { payload }: PayloadAction<Target>) => {
  state.title = payload.title;
  state.radius = payload.radius;
  state.lat = payload.lat;
  state.lng = payload.lng;
  state.topicId = payload.topicId;
};

const handleSetTargets = (state: TargetState, { payload }: PayloadAction<Target>) => {
  state.targets?.push(payload);
};

export default createReducer(initialState, {
  [createTarget.fulfilled.type]: handleCreateFulfilled,
  [setTargets.type]: handleSetTargets,
});
