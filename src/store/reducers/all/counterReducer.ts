import * as Actions  from 'store/actions';
import { Store } from 'store/types';

const initialState: Store.Counter = {
  value: 0,
};

export function counter (state: Store.Counter = initialState, action: Actions.CounterAction): Store.Counter {
  const { value } = state; let newValue;
  switch (action.type) {
    case Actions.INCREMENT_COUNTER:
      newValue = value + action.delta;
      return { value: newValue };
    case Actions.DECREMENT_COUNTER:
      newValue = value - action.delta;
      return { value: newValue };
    case Actions.RESET_COUNTER:
      return { value: 0 };
    default:
      return state;
  }
}
