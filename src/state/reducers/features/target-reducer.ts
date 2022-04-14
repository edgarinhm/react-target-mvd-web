import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setTarget, setTargetCollection } from 'state/actions/target-actions';
import Target from 'interfaces/target/target-interface';

export interface TargetState {
  targets: Target[];
}

const initialState: TargetState = {
  targets: [],
};

const handleSetTarget = (state: TargetState, { payload }: PayloadAction<Target>) => {
  state.targets?.push({ ...payload });
};

const handleSetTargetCollection = (state: TargetState, { payload }: PayloadAction<Target[]>) => {
  state.targets = { ...payload };
};

export default createReducer(initialState, {
  [setTarget.type]: handleSetTarget,
  [setTargetCollection.type]: handleSetTargetCollection,
});
