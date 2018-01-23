import { Reducer } from 'redux';
import * as StoreState from 'types/StoreState';
import * as StoreActions from 'types/StoreActions';

const initialState: StoreState.Todos = [];

export const todosReducer: Reducer<StoreState.Todos> = (
  state: StoreState.Todos = initialState,
  action: StoreActions.TodoAction): StoreState.Todos => {
  switch (action.type) {
    case StoreActions.ActionTypeKeys.RESET_TODOS:
      return action.todos;
    case StoreActions.ActionTypeKeys.ADD_TODO:
      const todo = Object.assign(
        {},
        action.todo,
        {
          status: (Math.round(Math.random())),
          id: Math.round(Math.random() * Math.random() + Math.random() * Math.random())
        }
       );
      return [...state, todo];
    case StoreActions.ActionTypeKeys.REMOVE_TODO:
      const todos = state.slice();
      todos.splice(action.index, 1);
      return todos;
    default:
      return state;
  }
};
