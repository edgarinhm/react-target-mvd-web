import { ActionReducerMapBuilder, AsyncThunk, createAction, createReducer } from '@reduxjs/toolkit';

import { FULFILLED, REJECTED, PENDING } from 'constants/action-status-constant';

export type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export interface StatusResponse {
  status: string;
  error?: string;
  payload?: object;
}
const DELIMITER = '/';

const getActionKey = (type: string) => {
  let types = type.split(DELIMITER);
  types.pop();
  return types.join(DELIMITER);
};

const initialState: Record<string, StatusResponse> = {};
const resetAction = createAction('reset-tracked-loading-state');

export default createReducer(initialState, (builder: ActionReducerMapBuilder<any>) => {
  builder
    .addCase(resetAction, () => initialState)
    .addMatcher(
      (action): action is RejectedAction => action.type.endsWith(`/${REJECTED}`),
      (state, { type, error, payload }) => {
        state[getActionKey(type)] = { status: REJECTED, error: error, payload: payload };
      }
    )
    .addMatcher(
      (action): action is FulfilledAction => action.type.endsWith(`/${FULFILLED}`),
      (state, { type, payload }) => {
        state[getActionKey(type)] = { status: FULFILLED, payload: payload };
      }
    )
    .addMatcher(
      (action): action is PendingAction => action.type.endsWith(`/${PENDING}`),
      (state, { type }) => {
        state[getActionKey(type)] = { status: PENDING };
      }
    );
});
