import { createAction, createReducer } from '@reduxjs/toolkit';
import { setErrors, setLoading } from 'state/actions/user-actions';

interface InterceptorState {
  isLoading: boolean;
  error?: string;
}

const initialState: InterceptorState = {
  error: '',
  isLoading: false,
};

const resetAction = createAction('reset-tracked-loading-state');

export default createReducer(initialState, builder => {
  builder
    .addCase(resetAction, () => initialState)
    .addCase(setLoading, (state, { payload }) => {
      state.isLoading = payload;
    })
    .addCase(setErrors, (state, { payload }) => {
      state.error = payload;
    });
});
