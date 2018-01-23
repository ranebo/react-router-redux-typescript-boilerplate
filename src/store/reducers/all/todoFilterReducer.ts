import { DEFAULT_TODO_FILTER } from 'store/actions';
import { Reducer } from 'redux';
import * as StoreState from 'types/StoreState';
import * as StoreActions from 'types/StoreActions';

const initialState: StoreState.TodoFilter = DEFAULT_TODO_FILTER;

export const todoFilterReducer: Reducer<StoreState.TodoFilter> = (
  state: StoreState.TodoFilter = initialState,
  action: StoreActions.SetTodoFilterAction): StoreState.TodoFilter => {
  switch (action.type) {
    case StoreActions.ActionTypeKeys.SET_TODO_FILTER:
      return action.filter;
    default:
      return state;
  }
};
