import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from 'state/store';
import { httpClient } from 'http-client';
import { applyDefaultInterceptor } from 'interceptors';
import { ModalProvider } from 'context/ModalContext';
import './assets/themes/mvd/theme.scss';
import './assets/styles/styles.scss';
import './config/i18n';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Suspense fallback={<div>...</div>}>
          <ModalProvider>
            <App />
          </ModalProvider>
        </Suspense>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
applyDefaultInterceptor(store, httpClient);
