import { ActionTypeKeys, DEFAULT_TODO_FILTER, SetTodoFilterAction } from 'store/actions';
import { Reducer } from 'redux';
import * as StoreState from 'types/store/state';

const initialState: StoreState.TodoFilter = DEFAULT_TODO_FILTER;

export const todoFilterReducer: Reducer<StoreState.TodoFilter> = (
  state: StoreState.TodoFilter = initialState,
  action: SetTodoFilterAction): StoreState.TodoFilter => {
  switch (action.type) {
    case ActionTypeKeys.SET_TODO_FILTER:
      return action.filter;
    default:
      return state;
  }
};
