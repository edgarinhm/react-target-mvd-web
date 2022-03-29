import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import Target from 'interfaces/target/target-interface';
import { createTarget } from 'state/actions/target-actions';

export interface TargetState {
  title: string;
  radius: number;
  lat: number;
  lng: number;
  topicId: number | string;
  id?: number;
}

const initialState: TargetState = {
  title: '',
  radius: 0,
  lat: 0,
  lng: 0,
  topicId: '',
};

const handleCreateFulfilled = (state: TargetState, { payload }: PayloadAction<Target>) => {
  state.title = payload.title;
  state.radius = payload.radius;
  state.lat = payload.lat;
  state.lng = payload.lng;
  state.topicId = payload.topicId;
};

export default createReducer(initialState, {
  [createTarget.fulfilled.type]: handleCreateFulfilled,
});
