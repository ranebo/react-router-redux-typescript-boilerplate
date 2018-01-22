import { persistCombineReducers, PersistedState } from 'redux-persist';
import { Reducer } from 'redux';
import { counterReducer } from 'store/reducers/all/counterReducer';
import { PersistConfig } from 'redux-persist/es/types';
import { todosReducer } from './all/todosReducer';
import { todoFilterReducer } from './all/todoFilterReducer';
import * as StoreState from 'types/store/state';
import * as localForage from 'localforage';
import { routerReducer } from 'react-router-redux'
import { ActionTypeKeys, ActionTypes } from 'store/actions';

const persistConfig: PersistConfig = {
  key: 'app',
  storage: localForage,
  blacklist: ['routing'],
};

const appReducer = persistCombineReducers<StoreState.All>(persistConfig, {
  counter: counterReducer,
  todos: todosReducer,
  todoFilter: todoFilterReducer,
  routing: routerReducer
});

type PersistedStoreState = StoreState.All & PersistedState;

export const rootReducer: Reducer<PersistedStoreState> =
  (state: PersistedStoreState, action: ActionTypes): PersistedStoreState => {
  if (action.type === ActionTypeKeys.USER_LOGOUT) {
    // const { routing } = state;
    // state = { routing };
  }

  return appReducer(state, action);
};
