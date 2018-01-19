import { persistCombineReducers } from 'redux-persist';
import { counter } from 'store/reducers/all/counterReducer';
// import { todos } from './all/todosReducer';
// import { todoFilter } from './all/todoFilterReducer';
import * as localForage from 'localforage';
// import { routerReducer } from 'react-router-redux'
// import * as Actions  from 'store/actions';

interface PersistConfig {
  key: string;
  storage: any; // need type for localForage
  blacklist: string[];
}

const persistConfig: PersistConfig = {
  key: 'app',
  storage: localForage,
  blacklist: ['routing'], // Add then Blacklist globalRequestObjects (for aborting request)
};

const appReducer = persistCombineReducers(persistConfig, {
  counter,
});

const rootReducer = (state, action) => {
  // if (action.type === Actions.USER_LOGOUT) {
  //   const { routing } = state;
  //   state = { routing }; // eslint-disable-line no-param-reassign
  // }

  return appReducer(state, action);
};

export default rootReducer;
