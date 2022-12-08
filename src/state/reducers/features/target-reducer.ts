import { createAction, createReducer } from '@reduxjs/toolkit';
import {
  removeTarget,
  setTarget,
  setTargetCollection,
  createTargetSuccess,
} from 'state/actions/target-actions';
import { TargetCollection } from 'interfaces/target/target-response-interface';
import { MatchConversation, MatchedUser } from 'interfaces/target/target-compatible-interface';

export interface TargetState {
  targets: TargetCollection[];
  matchConversation: MatchConversation[];
  matchedUser: MatchedUser[];
}

const initialState: TargetState = {
  targets: [],
  matchConversation: [],
  matchedUser: [],
};

const resetAction = createAction('reset-tracked-loading-state');

export default createReducer(initialState, builder => {
  builder
    .addCase(resetAction, () => initialState)
    .addCase(setTarget, (state, { payload }) => {
      state.targets = [...state.targets, { target: { ...payload } }];
    })
    .addCase(setTargetCollection, (state, { payload }) => {
      state.targets = [...payload];
    })
    .addCase(removeTarget, (state, { payload }) => {
      state.targets = state.targets.filter(collection => collection.target.id !== payload);
    })
    .addCase(createTargetSuccess, (state, { payload }) => {
      state.targets = [...state.targets, ...payload.targets];
      state.matchConversation = [payload.matchConversation];
      state.matchedUser = [...payload.matchedUser];
    });
});
