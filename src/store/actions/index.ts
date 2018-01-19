
// Action Types (Need better pattern for this, or move to constants folder)
export const RESET_COUNTER = 'RESET_COUNTER';
export type RESET_COUNTER = typeof RESET_COUNTER;
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export type INCREMENT_COUNTER = typeof INCREMENT_COUNTER;
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export type DECREMENT_COUNTER = typeof DECREMENT_COUNTER;
export const USER_LOGOUT = 'USER_LOGOUT';
export type USER_LOGOUT = typeof USER_LOGOUT;

type MoveCounterAction = INCREMENT_COUNTER | DECREMENT_COUNTER;

export type CounterAction = {
  type: MoveCounterAction,
  delta: number,
} | {
  type: RESET_COUNTER,
};

export const incrementCounter = (delta: number = 1): CounterAction => ({
  type: INCREMENT_COUNTER,
  delta,
});

export const decrementCounter = (delta: number = 1): CounterAction => ({
  type: DECREMENT_COUNTER,
  delta,
});

export const resetCounter = (): CounterAction => ({
  type: RESET_COUNTER,
});
