import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { removeTarget, setTarget, setTargetCollection } from 'state/actions/target-actions';
import Target from 'interfaces/target/target-interface';
import { TargetColletion } from 'interfaces/target/target-response-interface';

export interface TargetState {
  targets: TargetColletion[];
}

const initialState: TargetState = {
  targets: [],
};

const handleSetTarget = (state: TargetState, { payload }: PayloadAction<Target>) => {
  state.targets?.push({ target: { ...payload } });
};

const handleSetTargetCollection = (
  state: TargetState,
  { payload }: PayloadAction<TargetColletion[]>
) => {
  state.targets = { ...payload };
};

const handleRemoveTarget = (state: TargetState, { payload }: PayloadAction<number>) => {
  state.targets = state.targets.filter(collection => collection.target.id !== payload);
};

export default createReducer(initialState, {
  [setTarget.type]: handleSetTarget,
  [setTargetCollection.type]: handleSetTargetCollection,
  [removeTarget.type]: handleRemoveTarget,
});
