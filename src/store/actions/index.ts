
import {
  ActionTypeKeys,
  CounterAction,
  LogoutAction,
  TodoAction,
  SetTodoFilterAction,
} from 'types/StoreActions';
import { TodoFragmentEntity, Todos } from 'types/StoreState';

export const logoutUser = (): LogoutAction => ({
  type: ActionTypeKeys.USER_LOGOUT,
});

export const incrementCounter = (delta: number = 1): CounterAction => ({
  type: ActionTypeKeys.INCREMENT_COUNTER,
  delta,
});

export const decrementCounter = (delta: number = 1): CounterAction => ({
  type: ActionTypeKeys.DECREMENT_COUNTER,
  delta,
});

export const resetCounter = (): CounterAction => ({
  type: ActionTypeKeys.RESET_COUNTER,
});

export const TODO_STATUSES = ['Incomplete', 'Complete']; // Order Matters
export const TODO_FILTER_OPTIONS = ['All'].concat(TODO_STATUSES);
export const DEFAULT_TODO_FILTER = TODO_FILTER_OPTIONS[0];

export const resetTodos = (todos: Todos = []): TodoAction => ({
  type: ActionTypeKeys.RESET_TODOS,
  todos,
});

export const addTodo = (todo: TodoFragmentEntity): TodoAction => ({
  type: ActionTypeKeys.ADD_TODO,
  todo,
});

export const removeTodo = (index: number): TodoAction => ({
  type: ActionTypeKeys.REMOVE_TODO,
  index,
});

export const setTodoFilter = (filter: string = DEFAULT_TODO_FILTER): SetTodoFilterAction => ({
  type: ActionTypeKeys.SET_TODO_FILTER,
  filter
});
