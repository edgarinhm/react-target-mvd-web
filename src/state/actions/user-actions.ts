import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import userService from 'services/user-service';
import { User } from 'interfaces/user/user-interface';

export const signUp = createAsyncThunk('user/signUp', async (user: User) => {
  try {
    const { data } = await userService.signUp(user);
    return data;
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const updateSession = createAction<string | undefined>('session/update');
export const setLoading = createAction<boolean | undefined>('interceptor/setLoading');
export const setErrors = createAction<string | undefined>('interceptor/setErrors');
