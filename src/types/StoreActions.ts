
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

export interface TodoFragmentEntity {
  text: string;
  title: string;
}

export interface TodoEntity extends TodoFragmentEntity {
  readonly status: number;
  readonly id: number;
}

export interface ResetTodoAction {
  readonly type: ActionTypeKeys.RESET_TODOS;
  todos: TodoEntity[];
}

export interface AddTodoAction {
  readonly type: ActionTypeKeys.ADD_TODO;
  todo: TodoFragmentEntity;
}

export interface RemoveTodoAction {
  readonly type: ActionTypeKeys.REMOVE_TODO;
  index: number;
}

export type TodoAction = ResetTodoAction | AddTodoAction | RemoveTodoAction;

export interface SetTodoFilterAction {
  readonly type: ActionTypeKeys.SET_TODO_FILTER;
  filter: string;
}
