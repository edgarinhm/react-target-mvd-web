import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import userService from 'services/user/user.service';
import User from 'interfaces/user.interface';

export const signUp = createAsyncThunk('user/signUp', async (user: User) => {
  try {
    const { data } = await userService.signUp(user);
    return data;
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const updateSession = createAction<object | undefined>('session/update');
