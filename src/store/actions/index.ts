
import * as StoreActions from 'types/StoreActions';
import * as StoreState from 'types/StoreState';
import { DEFAULT_TODO_FILTER } from 'types/Constants';

export const logoutUser = (): StoreActions.LogoutAction => ({
  type: StoreActions.TypeKeys.USER_LOGOUT,
});

export const incrementCounter = (delta: number = 1): StoreActions.CounterAction => ({
  type: StoreActions.TypeKeys.INCREMENT_COUNTER,
  delta,
});

export const decrementCounter = (delta: number = 1): StoreActions.CounterAction => ({
  type: StoreActions.TypeKeys.DECREMENT_COUNTER,
  delta,
});

export const resetCounter = (): StoreActions.CounterAction => ({
  type: StoreActions.TypeKeys.RESET_COUNTER,
});

export const resetTodos = (todos: StoreState.Todos = []): StoreActions.TodoAction => ({
  type: StoreActions.TypeKeys.RESET_TODOS,
  todos,
});

export const addTodo = (todo: StoreState.TodoFragmentEntity): StoreActions.TodoAction => ({
  type: StoreActions.TypeKeys.ADD_TODO,
  todo,
});

export const removeTodo = (index: number): StoreActions.TodoAction => ({
  type: StoreActions.TypeKeys.REMOVE_TODO,
  index,
});

export const setTodoFilter = (filter: string = DEFAULT_TODO_FILTER): StoreActions.SetTodoFilterAction => ({
  type: StoreActions.TypeKeys.SET_TODO_FILTER,
  filter
});
