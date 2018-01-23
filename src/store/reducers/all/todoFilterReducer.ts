import { DEFAULT_TODO_FILTER } from 'types/Constants';
import * as StoreState from 'types/StoreState';
import * as StoreActions from 'types/StoreActions';
import createReducer from 'store/reducers/createReducer';

const initialState: StoreState.TodoFilter = DEFAULT_TODO_FILTER;

const todoFilterHandlers = {
  [StoreActions.TypeKeys.SET_TODO_FILTER](
    state: StoreState.TodoFilter,
    action: StoreActions.SetTodoFilterAction
  ) {
    return action.filter;
  }
};

export const todoFilterReducer =
  createReducer<StoreState.TodoFilter>(initialState, todoFilterHandlers);
