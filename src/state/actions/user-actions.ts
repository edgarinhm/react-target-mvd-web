import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import userService from 'services/user-service';
import { User } from 'interfaces/user/user-interface';

export const signUp = createAsyncThunk('user/signUp', async (user: User) => {
  try {
    return await userService.signUp(user);
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const login = createAsyncThunk('user/login', async (user: User, { dispatch }) => {
  try {
    const data = await userService.login(user);
    const profileUser = await userService.profile(data.id);
    return { ...profileUser };
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const logout = createAsyncThunk('user/logout', async () => {
  try {
    return await userService.logout();
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const updateSession = createAction<object | undefined>('session/update');
export const setLoading = createAction<boolean | undefined>('interceptor/setLoading');
export const setErrors = createAction<string | undefined>('interceptor/setErrors');
