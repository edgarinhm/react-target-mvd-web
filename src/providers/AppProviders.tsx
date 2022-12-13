import { ReactNode, Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistedStore, store } from 'state/store';
import { ModalProvider } from 'context/ModalContext';
import { applyDefaultInterceptor } from 'interceptors';
import { httpClient } from 'http-client';
import { BrowserRouter } from 'react-router-dom';

const AppProviders = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ModalProvider>
          <BrowserRouter>
            <Suspense fallback={<div>...</div>}>{children}</Suspense>
          </BrowserRouter>
        </ModalProvider>
      </PersistGate>
    </Provider>
  );
};

applyDefaultInterceptor(store, httpClient);

export default AppProviders;
