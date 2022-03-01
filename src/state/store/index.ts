import localForage from 'localforage';
import { configureStore } from '@reduxjs/toolkit';
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

const persistedReducer = persistReducer(persistConfig, AppReducer);

const logger = createLogger({
  predicate: () => process.env.NODE_ENV === `development`,
  collapsed: true,
});

const store = configureStore({
  reducer: persistedReducer,
  preloadedState: {},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

const persistor = persistStore(store);

export type StoreType = typeof store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export { store, persistor };
