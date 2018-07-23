import { persistCombineReducers } from 'redux-persist';
import { Reducer } from 'redux';
import { counterReducer } from 'store/reducers/all/counterReducer';
import { PersistConfig } from 'redux-persist/es/types';
import * as StoreState from 'store/types/StoreState';
import * as StoreActions from 'store/types/StoreActions';
import * as localForage from 'localforage';
import { routerReducer } from 'react-router-redux';

const persistConfig: PersistConfig = {
  key: 'app',
  storage: localForage,
  blacklist: ['routing'],
};

const appReducer = persistCombineReducers<StoreState.Store>(persistConfig, {
  counter: counterReducer,
  routing: routerReducer
});

export const rootReducer: Reducer<StoreState.PersistedStoreState> =
  (state: StoreState.PersistedStoreState, action: StoreActions.ActionTypes): StoreState.PersistedStoreState => {
  return appReducer(state, action);
};
