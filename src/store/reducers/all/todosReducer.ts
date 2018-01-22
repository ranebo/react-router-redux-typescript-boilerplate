import { ActionTypeKeys, TodoAction } from 'store/actions';
import { Reducer } from 'redux';
import * as StoreState from 'types/store/state';

const initialState: StoreState.Todos = [];

export const todosReducer: Reducer<StoreState.Todos> = (
  state: StoreState.Todos = initialState,
  action: TodoAction): StoreState.Todos => {
  switch (action.type) {
    case ActionTypeKeys.RESET_TODOS:
      return action.todos;
    case ActionTypeKeys.ADD_TODO:
      const todo = Object.assign({}, action.todo, {status: (Math.round(Math.random())), id: Math.round(Math.random()*Math.random() + Math.random()*Math.random()) });
      return [...state, todo];
    case ActionTypeKeys.REMOVE_TODO:
       const todos = state.slice();
       todos.splice(action.index, 1);
      return todos;
    default:
      return state;
  }
};
