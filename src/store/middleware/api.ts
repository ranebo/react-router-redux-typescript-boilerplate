// import { MiddlewareAPI, Middleware } from 'redux';
// import * as StoreState from 'store/types/StoreState';

const api = ({ dispatch, getState }) => (next: any) => (action: any) => {
  // Do anything with actions before they are processed
};

export default api;
