import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'interfaces/user/user-interface';
import { updateSession, signUp, login } from 'state/actions/user-actions';

export interface SessionState {
  authenticated: boolean;
  accessToken?: string;
  user?: User;
}

const initialState: SessionState = {
  accessToken: undefined,
  authenticated: false,
};

const handleUpdateSession = (state: SessionState, { payload }: PayloadAction<string>) => {
  state.accessToken = payload;
};

const handleSignupFulfilled = (state: SessionState, { payload }: PayloadAction<User>) => {
  state.user = payload;
  state.authenticated = true;
};

const handleLoginFulfilled = (state: SessionState, { payload }: PayloadAction<User>) => {
  state.user = payload;
  state.authenticated = true;
};

export default createReducer(initialState, {
  [updateSession.type]: handleUpdateSession,
  [signUp.fulfilled.type]: handleSignupFulfilled,
  [login.fulfilled.type]: handleLoginFulfilled,
});
