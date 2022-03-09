import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setErrors, setLoading } from 'state/actions/user-actions';

interface InterceptorState {
  isLoading: boolean;
  error?: string;
}

const initialState: InterceptorState = {
  error: '',
  isLoading: false,
};

const handleSetLoadingInterceptor = (
  state: InterceptorState,
  { payload }: PayloadAction<boolean>
) => {
  state.isLoading = payload;
};

const handleSetErrorsInterceptor = (
  state: InterceptorState,
  { payload }: PayloadAction<string>
) => {
  state.error = payload;
};

export default createReducer(initialState, {
  [setLoading.type]: handleSetLoadingInterceptor,
  [setErrors.type]: handleSetErrorsInterceptor,
});
