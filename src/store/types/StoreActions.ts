import * as StoreEntities from 'store/types/StoreEntities';

// ==============================
// Compiled Action Types and Keys
// ==============================

export type ActionTypes =
  | CounterAction
  | LogoutAction
  | TodoAction
  | SetTodoFilterAction
  | OtherAction;

export enum TypeKeys {
  SET_USER = 'SET_USER',
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

// =================
// Raw Action Types
// =================

export interface Action<T> {
  readonly type: T;
}

export interface SetUserAction extends Action<TypeKeys.SET_USER> {
  info: StoreEntities.UserInfoEntity;
}

export interface OtherAction extends Action<TypeKeys.OTHER_ACTION> {
}

export interface LogoutAction extends Action<TypeKeys.USER_LOGOUT> {
}

export interface MoveCounterAction extends
  Action<TypeKeys.INCREMENT_COUNTER | TypeKeys.DECREMENT_COUNTER> {
  readonly delta: number;
}

export interface ResetCounterAction extends Action<TypeKeys.RESET_COUNTER> {
}

export interface ResetTodoAction extends Action<TypeKeys.RESET_TODOS> {
  todos: StoreEntities.TodoEntity[];
}

export interface AddTodoAction extends Action<TypeKeys.ADD_TODO> {
  todo: StoreEntities.TodoFragmentEntity;
}

export interface RemoveTodoAction extends Action<TypeKeys.REMOVE_TODO> {
  readonly index: number;
}

export interface SetTodoFilterAction extends Action<TypeKeys.SET_TODO_FILTER> {
  filter: string;
}

// ======================
// Composed Action Types
// ======================

export type TodoAction = ResetTodoAction | AddTodoAction | RemoveTodoAction;

export type CounterAction = MoveCounterAction | ResetCounterAction;
