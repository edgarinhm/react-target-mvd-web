import localForage from 'localforage';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
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
import AppReducer from 'state/reducers/root-reducer';

const persistConfig = {
  key: 'root',
  version: 1,
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

const persistedStore = persistStore(store);

export type StoreType = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export { store, persistedStore };
