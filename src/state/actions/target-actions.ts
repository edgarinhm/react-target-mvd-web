import { createAsyncThunk } from '@reduxjs/toolkit';
import Target from 'interfaces/target/target-interface';
import TargetService from 'services/target-service';

export const createTarget = createAsyncThunk('target/create', async (target: Target) => {
  try {
    return await TargetService.createTarget(target);
  } catch ({ response: { data } }) {
    throw data;
  }
});
