import { Reducer, AnyAction } from 'redux';
// import * as StoreActions from 'store/types/StoreActions';

function createReducer<S>(initialState: S, handlers: { [key: string]: Function }): Reducer<S> {
  return function(state: S = initialState, action: AnyAction): S {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

export default createReducer;
