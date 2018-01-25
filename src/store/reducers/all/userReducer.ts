import * as StoreState from 'store/types/StoreState';
import * as StoreActions from 'store/types/StoreActions';
import createReducer from 'store/reducers/createReducer';

const initialState: StoreState.User = {
  isAuthenticated: false,
  info: {},
};

const userHandlers = {
  [StoreActions.TypeKeys.SET_USER](
    state: StoreState.User,
    action: StoreActions.SetUserAction
  ) {
    return {
      isAuthenticated: action.info.hasOwnProperty('token'),
      info: action.info,
    };
  },
};

export const userReducer = createReducer<StoreState.User>(initialState, userHandlers);
