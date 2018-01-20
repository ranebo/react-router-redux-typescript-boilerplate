import { ActionTypeKeys, CounterAction }  from 'store/actions';
import { Reducer } from 'redux';
import { StoreState } from 'store/types';

const initialState: StoreState.Counter = {
  value: 0,
};

export const counterReducer: Reducer<StoreState.Counter> = (
  state: StoreState.Counter = initialState,
  action: CounterAction): StoreState.Counter => {
  const { value } = state;
  switch (action.type) {
    case ActionTypeKeys.INCREMENT_COUNTER:
      return { value: value + action.delta };
    case ActionTypeKeys.DECREMENT_COUNTER:
      return { value: value - action.delta };
    case ActionTypeKeys.RESET_COUNTER:
      return { value: 0 };
    default:
      return state;
  }
};
