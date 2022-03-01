import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import userService from 'services/user-service';
import { UserSignUp, UserLogin } from 'interfaces/user/user-interface';

export const signUp = createAsyncThunk('user/signUp', async (user: UserSignUp) => {
  try {
    const { data } = await userService.signUp(user);
    return data;
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const login = createAsyncThunk('user/login', async (user: UserLogin) => {
  try {
    const {
      data: { token },
    } = await userService.login(user);
    return token;
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const updateSession = createAction<string | undefined>('session/update');
export const setLoading = createAction<boolean | undefined>('interceptor/setLoading');
export const setErrors = createAction<string | undefined>('interceptor/setErrors');
export const { fulfilled: loginFulfilled } = login;
