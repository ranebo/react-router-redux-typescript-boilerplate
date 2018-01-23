import { Reducer } from 'redux';
import * as StoreState from 'types/StoreState';
import * as StoreActions from 'types/StoreActions';

const initialState: StoreState.Counter = {
  value: 0,
};

export const counterReducer: Reducer<StoreState.Counter> = (
  state: StoreState.Counter = initialState,
  action: StoreActions.CounterAction): StoreState.Counter => {
  const { value } = state;
  switch (action.type) {
    case StoreActions.TypeKeys.INCREMENT_COUNTER:
      return { value: value + action.delta };
    case StoreActions.TypeKeys.DECREMENT_COUNTER:
      return { value: value - action.delta };
    case StoreActions.TypeKeys.RESET_COUNTER:
      return { value: 0 };
    default:
      return state;
  }
};
