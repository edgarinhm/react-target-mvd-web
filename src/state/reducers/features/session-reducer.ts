import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ProfileUser } from 'interfaces/profile/profile-response-interface';
import { updateSession, signUp, login, logout } from 'state/actions/user-actions';

export interface SessionState {
  authenticated: boolean;
  accessToken: string;
  clientToken: string;
  uid: string;
  user: ProfileUser;
}

const initialState: SessionState = {
  accessToken: '',
  authenticated: false,
  clientToken: '',
  uid: '',
  user: {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    fullName: '',
    username: '',
    gender: '',
    avatar: {
      originalUrl: '',
      normalUrl: '',
      smallThumbUrl: '',
    },
    pushToken: '',
  },
};

const handleUpdateSession = (state: SessionState, { payload }: PayloadAction<SessionState>) => {
  state.accessToken = payload.accessToken;
  state.clientToken = payload.clientToken;
  state.uid = payload.uid;
};

const handleSignupFulfilled = (state: SessionState, { payload }: PayloadAction<ProfileUser>) => {
  state.user = payload;
  state.authenticated = true;
};

const handleLoginFulfilled = (state: SessionState, { payload }: PayloadAction<ProfileUser>) => {
  state.user = payload;
  state.authenticated = true;
};

const handleLogoutFulfilled = () => {
  localStorage.clear();
  return initialState;
};

export default createReducer(initialState, {
  [updateSession.type]: handleUpdateSession,
  [signUp.fulfilled.type]: handleSignupFulfilled,
  [login.fulfilled.type]: handleLoginFulfilled,
  [logout.fulfilled.type]: handleLogoutFulfilled,
});
