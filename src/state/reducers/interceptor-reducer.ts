import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setErrors, setLoading } from 'state/actions/user-actions';

interface InterceptorState {
  isLoading: boolean;
  errors?: string;
}

const initialState: InterceptorState = {
  errors: '',
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
  state.errors = payload;
};

export default createReducer(initialState, {
  [setLoading.type]: handleSetLoadingInterceptor,
  [setErrors.type]: handleSetErrorsInterceptor,
});
