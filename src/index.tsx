import ReactDOM from 'react-dom';
import './assets/themes/mvd/theme.scss';
import './assets/styles/styles.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'state/store';
import { BrowserRouter } from 'react-router-dom';
import { httpClient, applyDefaultInterceptors } from 'http-client';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
applyDefaultInterceptors(store, httpClient);
