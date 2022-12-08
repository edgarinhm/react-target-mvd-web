import { EnhancedStore } from '@reduxjs/toolkit';
import { setErrors, setLoading, updateSession } from 'state/actions/user-actions';
import { AppDispatch } from 'state/store';
import { HttpClient } from 'http-client';
import { ErrorApiResponse } from 'interfaces/api/error-api-response-interface';
import ErrorApi from 'interfaces/api/error-api-interface';
import { ACCESS_TOKEN, CLIENT, UID } from 'constants/api-constants';
import humps from 'humps';

const applyDefaultInterceptor = (store: EnhancedStore, client: HttpClient) => {
  const dispatch: AppDispatch = store.dispatch;

  client.interceptors.request.use(config => {
    dispatch(setLoading(true));
    dispatch(setErrors(''));
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
    config.data = humps.decamelizeKeys(config.data);
    return config;
  });

  client.interceptors.response.use(
    async response => {
      dispatch(setLoading(false));
      const { headers } = response;
      const accessToken = headers[ACCESS_TOKEN] || '';
      const clientToken = headers[CLIENT] || '';
      const uid = headers[UID] || '';
      const { authenticated, user } = store.getState().session;

      if (accessToken) {
        const session = {
          accessToken,
          clientToken,
          uid,
          authenticated,
          user,
        };
        dispatch(updateSession(session));
      }

      response.data = humps.camelizeKeys(response.data);
      return response;
    },
    error => {
      dispatch(setLoading(false));
      const globalErrors = (error.response.data as ErrorApi)?.errors || '';
      if (error.response && globalErrors.length > 0) {
        dispatch(setErrors(globalErrors.at(0) || ''));
      } else {
        const errorApi = (error.response.data as ErrorApi)?.error;
        if (errorApi) {
          dispatch(setErrors(errorApi));
        }
        const errorApiResponse = error.response.data as ErrorApiResponse;
        if (errorApiResponse?.status === 'error' || !errorApiResponse?.status) {
          dispatch(setErrors(errorApiResponse.errors.full_messages[0]));
        }
      }
      return Promise.reject(error);
    }
  );
};

export default applyDefaultInterceptor;
