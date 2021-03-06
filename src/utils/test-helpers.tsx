import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import MockAdapter from 'axios-mock-adapter';

import reducer from 'state/reducers/root-reducer';
import { httpClient } from 'http-client';
import { applyDefaultInterceptor } from 'interceptors';
import { StoreType } from 'state/store';

export const configureStore = (initialState = {}) => {
  return createStore(reducer, initialState, applyMiddleware(...getDefaultMiddleware()));
};

export const configureAuthenticatedStore = (initialState = {}) =>
  configureStore({
    session: {
      accessToken: 'accessToken',
      authenticated: true,
    },
    ...initialState,
  });

export const renderWithRedux = (Component: () => ReactElement, store: StoreType): any => ({
  ...render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>
  ),
  store,
});

export const mockedHttpClient = (store: StoreType, options = {}) => {
  applyDefaultInterceptor(store, httpClient);
  return new MockAdapter(httpClient, options);
};
