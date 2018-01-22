
// Pattern Reference: https://spin.atomicobject.com/2017/07/24/redux-action-pattern-typescript/
export type ActionTypes =
  | CounterAction
  | LogoutAction
  | TodoAction
  | SetTodoFilterAction
  | OtherAction;

export enum ActionTypeKeys {
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
  DECREMENT_COUNTER = 'DECREMENT_COUNTER',
  RESET_COUNTER = 'RESET_COUNTER',
  USER_LOGOUT = 'USER_LOGOUT',
  RESET_TODOS = 'RESET_TODOS',
  ADD_TODO = 'ADD_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  SET_TODO_FILTER = 'SET_TODO_FILTER',
  OTHER_ACTION = '__any_other_action_type__',
}

export interface OtherAction {
  readonly type: ActionTypeKeys.OTHER_ACTION;
}

export interface LogoutAction {
  readonly type: ActionTypeKeys.USER_LOGOUT;
}

export type CounterAction = {
  readonly type: ActionTypeKeys.INCREMENT_COUNTER | ActionTypeKeys.DECREMENT_COUNTER,
  readonly delta: number,
} | {
  readonly type: ActionTypeKeys.RESET_COUNTER,
};

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


export const TODO_STATUSES = ['Incomplete', 'Complete'] // Order Matters
export const TODO_FILTER_OPTIONS = ['All'].concat(TODO_STATUSES);
export const DEFAULT_TODO_FILTER = TODO_FILTER_OPTIONS[0];


export interface Todo {
  readonly status: number;
  readonly id: number;
  readonly text: string;
  readonly title: string;
}

interface ResetTodoAction {
  readonly type: ActionTypeKeys.RESET_TODOS;
  todos: Todo[];
}

interface AddTodoAction {
  readonly type: ActionTypeKeys.ADD_TODO;
  todo: Todo;
}

interface RemoveTodoAction {
  readonly type: ActionTypeKeys.REMOVE_TODO;
  index: number;
}

export type TodoAction = ResetTodoAction | AddTodoAction | RemoveTodoAction;

export interface SetTodoFilterAction {
  readonly type: ActionTypeKeys.SET_TODO_FILTER;
  filter: string;
}

export const resetTodos = (todos: Todo[] = []): TodoAction => ({
  type: ActionTypeKeys.RESET_TODOS,
  todos,
});

export const addTodo = (todo: Todo): TodoAction => ({
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
})
