import { persistCombineReducers } from 'redux-persist';
import { Reducer } from 'redux';
import { counterReducer } from 'store/reducers/all/counterReducer';
import { PersistConfig } from 'redux-persist/es/types';
import { todosReducer } from './all/todosReducer';
import { userReducer } from './all/userReducer';
import { todoFilterReducer } from './all/todoFilterReducer';
import * as StoreState from 'store/types/StoreState';
import * as StoreActions from 'store/types/StoreActions';
import * as localForage from 'localforage';
import { routerReducer } from 'react-router-redux';

const persistConfig: PersistConfig = {
  key: 'app',
  storage: localForage,
  blacklist: ['routing'],
};

const appReducer = persistCombineReducers<StoreState.All>(persistConfig, {
  counter: counterReducer,
  todos: todosReducer,
  todoFilter: todoFilterReducer,
  user: userReducer,
  routing: routerReducer
});

export const rootReducer: Reducer<StoreState.PersistedStoreState> =
  (state: StoreState.PersistedStoreState, action: StoreActions.ActionTypes): StoreState.PersistedStoreState => {
  if (action.type === StoreActions.TypeKeys.USER_LOGOUT) {
    // const { routing } = state;
    // state = { routing };
  }

  return appReducer(state, action);
};
