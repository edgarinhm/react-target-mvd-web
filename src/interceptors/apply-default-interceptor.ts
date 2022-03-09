import { EnhancedStore } from '@reduxjs/toolkit';
import { setErrors, setLoading, updateSession } from 'state/actions/user-actions';
import { AppDispatch } from 'state/store';
import { HttpClient } from 'http-client';
import { ErrorApiResponse } from 'interfaces/api/error-api-response-interface';
import ErrorApi from 'interfaces/api/error-api-interface';
import { ACCESS_TOKEN, CLIENT, UID, UNAUTHORIZED } from 'constants/api-constants';

const applyDefaultInterceptor = (store: EnhancedStore, client: HttpClient) => {
  const dispatch: AppDispatch = store.dispatch;

  client.interceptors.request.use(config => {
    dispatch(setLoading(true));
    dispatch(setErrors());
    const { accessToken, clientToken, uid } = store.getState().session;
    const { headers } = config;
    if (accessToken) {
      config.headers = {
        ...headers,
        [ACCESS_TOKEN]: accessToken,
        [CLIENT]: clientToken,
        [UID]: uid,
      };
    }
    return config;
  });

  client.interceptors.response.use(
    async response => {
      dispatch(setLoading(false));
      const { headers } = response;
      const accessToken = headers[ACCESS_TOKEN];
      const clientToken = headers[CLIENT];
      const uid = headers[UID];
      if (accessToken) {
        const session = {
          accessToken,
          clientToken,
          uid,
        };
        dispatch(updateSession(session));
      }
      return response;
    },
    error => {
      dispatch(setLoading(false));
      const unauthorizedError = (error.response.data as ErrorApi)?.errors || '';
      if (error.response && error.response.status === UNAUTHORIZED) {
        dispatch(setErrors(unauthorizedError.at(0)));
      } else {
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

export default applyDefaultInterceptor;
