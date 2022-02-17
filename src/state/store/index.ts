import localForage from 'localforage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AppReducer from 'state/reducers';
import { useDispatch } from 'react-redux';

const persistConfig = {
  key: 'root',
  storage: localForage,
  whitelist: ['session'],
};

const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
  });
  middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, AppReducer);

const store = configureStore({
  reducer: persistedReducer,
  preloadedState: {},
  middleware: middlewares,
});

const persistor = persistStore(store);

export type StoreType = typeof store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export { store, persistor };
