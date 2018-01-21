

declare module "store-state" {

  /**
   * Counter shape.
   */
  export type Counter = { value: number };

  /**
   * Compiled Store shapes.
   */
  export type All = {
    counter: Counter
  };
}


declare module "store-actions" {

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

  export type CounterAction = {
    readonly type: ActionTypeKeys.INCREMENT_COUNTER | ActionTypeKeys.DECREMENT_COUNTER,
    readonly delta: number,
  } | {
    readonly type: ActionTypeKeys.RESET_COUNTER,
  };

}
