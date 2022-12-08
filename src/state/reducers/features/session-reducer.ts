import { createAction, createReducer } from '@reduxjs/toolkit';
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

const resetAction = createAction('reset-tracked-loading-state');

export default createReducer(initialState, builder => {
  builder
    .addCase(resetAction, () => initialState)
    .addCase(updateSession, (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.clientToken = payload.clientToken;
      state.uid = payload.uid;
    })
    .addCase(signUp.fulfilled, (state, { payload }) => {
      state.user = { ...state.user, ...payload };
      state.authenticated = true;
    })
    .addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.authenticated = true;
    })
    .addCase(logout.fulfilled, () => {
      localStorage.clear();
      return initialState;
    });
});
