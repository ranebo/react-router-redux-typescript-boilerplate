import * as StoreActions from 'store/types/StoreActions';

export const incrementCounter = (delta: number = 1): StoreActions.MoveCounterAction => ({
  type: StoreActions.TypeKeys.INCREMENT_COUNTER,
  delta,
});

export const decrementCounter = (delta: number = 1): StoreActions.MoveCounterAction => ({
  type: StoreActions.TypeKeys.DECREMENT_COUNTER,
  delta,
});

export const resetCounter = (): StoreActions.ResetCounterAction => ({
  type: StoreActions.TypeKeys.RESET_COUNTER,
});
