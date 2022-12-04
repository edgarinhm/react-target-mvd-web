import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  removeTarget,
  setTarget,
  setTargetCollection,
  createTargetSuccess,
} from 'state/actions/target-actions';
import Target from 'interfaces/target/target-interface';
import { TargetColletion } from 'interfaces/target/target-response-interface';
import { MatchConversation, MatchedUser } from 'interfaces/target/target-compatible-interface';
import { TargetColletionResponse } from '../../../interfaces/target/target-response-interface';

export interface TargetState {
  targets: TargetColletion[];
  matchConversation: MatchConversation[];
  matchedUser: MatchedUser[];
}

const initialState: TargetState = {
  targets: [],
  matchConversation: [],
  matchedUser: [],
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

const handleCreateTargetSuccess = (
  state: TargetState,
  { payload }: PayloadAction<TargetColletionResponse>
) => {
  state.targets = { ...state.targets, ...payload.targets };
  state.matchConversation = { ...payload.matchConversation };
  state.matchedUser = { ...payload.matchedUser };
};

export default createReducer(initialState, {
  [setTarget.type]: handleSetTarget,
  [setTargetCollection.type]: handleSetTargetCollection,
  [removeTarget.type]: handleRemoveTarget,
  [createTargetSuccess.type]: handleCreateTargetSuccess,
});
