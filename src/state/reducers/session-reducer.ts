import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'interfaces/user/user-interface';
import { updateSession, signUp, login, logout } from 'state/actions/user-actions';

export interface SessionState {
  authenticated: boolean;
  accessToken?: string;
  user?: User;
  clientToken?: string;
  uid?: string;
}

const initialState: SessionState = {
  accessToken: undefined,
  authenticated: false,
  user: undefined,
  clientToken: undefined,
  uid: undefined,
};

const handleUpdateSession = (state: SessionState, { payload }: PayloadAction<SessionState>) => {
  state.accessToken = payload.accessToken;
  state.clientToken = payload.clientToken;
  state.uid = payload.uid;
};

const handleSignupFulfilled = (state: SessionState, { payload }: PayloadAction<User>) => {
  state.user = payload;
  state.authenticated = true;
};

const handleLoginFulfilled = (state: SessionState, { payload }: PayloadAction<User>) => {
  state.user = payload;
  state.authenticated = true;
};

const handleLogoutFulfilled = () => {
  return initialState;
};

export default createReducer(initialState, {
  [updateSession.type]: handleUpdateSession,
  [signUp.fulfilled.type]: handleSignupFulfilled,
  [login.fulfilled.type]: handleLoginFulfilled,
  [logout.fulfilled.type]: handleLogoutFulfilled,
});
