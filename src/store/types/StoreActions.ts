
// ==============================
// Compiled Action Types and Keys
// ==============================

export type ActionTypes = MoveCounterAction | ResetCounterAction;

export enum TypeKeys {
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
  DECREMENT_COUNTER = 'DECREMENT_COUNTER',
  RESET_COUNTER = 'RESET_COUNTER',
}

// =================
// Raw Action Types
// =================

export interface Action<T> {
  readonly type: T;
}

export interface MoveCounterAction extends
  Action<TypeKeys.INCREMENT_COUNTER | TypeKeys.DECREMENT_COUNTER> {
  readonly delta: number;
}

export interface ResetCounterAction extends Action<TypeKeys.RESET_COUNTER> {}
