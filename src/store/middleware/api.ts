import * as Redux from 'redux';

// Monitor Progress for Middleware Incompatability with Redux Thunk: Fixes should be in Redux 4.0
// Temp workaround: https://github.com/gaearon/redux-thunk/issues/82

const api: Redux.Middleware = ({ dispatch, getState }: Redux.MiddlewareAPI<void>) =>
  (next: Redux.Dispatch<void>) =>
    <A extends Redux.Action>(action: A) => {
      // can process actions here
      return next(action);
    };

export default api;
