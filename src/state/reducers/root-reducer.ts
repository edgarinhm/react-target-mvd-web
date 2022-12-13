import { combineReducers } from 'redux';
import localForage from 'localforage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import statusReducer from './features/status-reducer';
import session, { SessionState } from './features/session-reducer';
import interceptorReducer from './features/interceptor-reducer';
import placeReducer from './features/place-reducer';
import homeReducer from './features/home-reducer';
import targetReducer from './features/target-reducer';
import topicReducer from './features/topic-reducer';
import chatReducer from './features/chat-reducer';

const sessionPersistConfig = {
  key: 'session',
  storage: localForage,
  whitelist: ['authenticated', 'accessToken'],
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  session: persistReducer<SessionState>(sessionPersistConfig, session),
  statusReducer,
  interceptorReducer,
  placeReducer,
  homeReducer,
  targetReducer,
  topicReducer,
  chatReducer,
});

export default rootReducer;
