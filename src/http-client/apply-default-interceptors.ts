import { EnhancedStore } from '@reduxjs/toolkit';

import { setErrors, setLoading, updateSession } from 'state/actions/user-actions';
import { AppDispatch } from 'state/store';
import { HttpClient } from 'http-client';
import { ErrorApiResponse } from 'interfaces/error-api-response.interface';
import ErrorApi from 'interfaces/error-api.interface';

const ACCESS_TOKEN = 'access-token';
const UNAUTHORIZED = 401;

const applyDefaultInterceptors = (store: EnhancedStore, client: HttpClient) => {
  const dispatch: AppDispatch = store.dispatch;

  client.interceptors.request.use(config => {
    dispatch(setLoading(true));
    dispatch(setErrors());
    const { accessToken } = store.getState().session;
    const { headers } = config;
    if (accessToken) {
      config.headers = {
        ...headers,
        [ACCESS_TOKEN]: accessToken,
      };
    }
    return config;
  });

  client.interceptors.response.use(
    async response => {
      dispatch(setLoading(false));
      const { headers } = response;
      const accessToken = headers[ACCESS_TOKEN];
      if (accessToken) {
        dispatch(updateSession(accessToken));
      }
      return response;
    },
    error => {
      dispatch(setLoading(false));
      if (error.response && error.response.status === UNAUTHORIZED) {
        // dispatch(logout());
      } else {
        // validate api error status
        const errorApi = (error.response.data as ErrorApi)?.error;
        if (errorApi) {
          dispatch(setErrors(errorApi));
        }
        const errorApiResponse = error.response.data as ErrorApiResponse;
        if (errorApiResponse?.status === 'error') {
          dispatch(setErrors(errorApiResponse.errors.full_messages[0]));
        }
      }
      return Promise.reject(error);
    }
  );
};

export default applyDefaultInterceptors;
