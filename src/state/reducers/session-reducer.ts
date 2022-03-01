import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { updateSession, signUp } from 'state/actions/user-actions';

export interface SessionState {
  accessToken?: string;
  authenticated: boolean;
}

const initialState: SessionState = {
  accessToken: undefined,
  authenticated: false,
};
const handleUpdateSession = (state: SessionState, { payload }: PayloadAction<string>) => {
  state.accessToken = payload;
};

const handleSignupFulfilled = (state: SessionState) => {
  state.authenticated = true;
};

export default createReducer(initialState, {
  [updateSession.type]: handleUpdateSession,
  [signUp.fulfilled.type]: handleSignupFulfilled,
});
