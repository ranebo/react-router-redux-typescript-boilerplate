// Pattern Reference: https://spin.atomicobject.com/2017/07/24/redux-action-pattern-typescript/
export type ActionTypes =
  | CounterAction
  | LogoutAction
  | OtherAction;

export enum ActionTypeKeys {
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
  DECREMENT_COUNTER = 'DECREMENT_COUNTER',
  RESET_COUNTER = 'RESET_COUNTER',
  USER_LOGOUT = 'USER_LOGOUT',
  OTHER_ACTION = '__any_other_action_type__',
}

export interface OtherAction {
  readonly type: ActionTypeKeys.OTHER_ACTION;
}

export interface LogoutAction {
  readonly type: ActionTypeKeys.USER_LOGOUT;
}

export const logoutUser = (): LogoutAction => ({
  type: ActionTypeKeys.USER_LOGOUT,
});

export type CounterAction = {
  readonly type: ActionTypeKeys.INCREMENT_COUNTER | ActionTypeKeys.DECREMENT_COUNTER,
  readonly delta: number,
} | {
  readonly type: ActionTypeKeys.RESET_COUNTER,
};

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
