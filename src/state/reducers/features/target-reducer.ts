import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import Target from 'interfaces/target/target-interface';
import { setTargets } from 'state/actions/target-actions';
export interface TargetState {
  targets: Target[];
}

const initialState: TargetState = {
  targets: [],
};

const handleSetTargets = (state: TargetState, { payload }: PayloadAction<Target>) => {
  state.targets?.push(payload);
};

export default createReducer(initialState, {
  [setTargets.type]: handleSetTargets,
});
