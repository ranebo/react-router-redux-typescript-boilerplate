import { persistCombineReducers, PersistedState } from 'redux-persist';
import { Reducer } from 'redux';
import { counterReducer } from 'store/reducers/all/counterReducer';
import { PersistConfig } from 'redux-persist/es/types';
// import { todos } from './all/todosReducer';
// import { todoFilter } from './all/todoFilterReducer';
import * as localForage from 'localforage';
import { StoreState } from 'store/types';
// import { routerReducer } from 'react-router-redux'
import { ActionTypeKeys, ActionTypes } from 'store/actions';

const persistConfig: PersistConfig = {
  key: 'app',
  storage: localForage,
  blacklist: ['routing'],
};

const appReducer = persistCombineReducers<StoreState.All>(persistConfig, {
  counter: counterReducer,
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
