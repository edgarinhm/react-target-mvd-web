import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { updateSession, signUp, loginFulfilled } from 'state/actions/user-actions';

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

const handleLoginFulfilled = (state: SessionState, { payload }: PayloadAction<string>) => {
  state.accessToken = payload;
  state.authenticated = true;
};

export default createReducer(initialState, {
  [updateSession.type]: handleUpdateSession,
  [signUp.fulfilled.type]: handleSignupFulfilled,
  [loginFulfilled.type]: handleLoginFulfilled,
});
