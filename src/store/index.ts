import { createStore, applyMiddleware, compose, Middleware, GenericStoreEnhancer } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { rootReducer } from 'store/reducers';
import * as StoreState from 'types/store/state';

import { createLogger } from 'redux-logger';
import { historyMiddleware } from 'app/history';
import DevTools from 'app/DevTools';
// import api from 'store/middleware/api'

// Helper function to compile store args:
// compose(applyMiddleware(middleware1, middlware2, ...middlewareDev), ...composeDev)

const compileEnhancers = (
  middlewareArgs: Middleware[],
  devMiddlewareArgs: Middleware[],
  composeArgs: GenericStoreEnhancer[],
  composeDevArgs: GenericStoreEnhancer[]
  ) => {
  const isDev = process.env.NODE_ENV;
  if (isDev) { middlewareArgs = middlewareArgs.concat(devMiddlewareArgs); }
  composeArgs = [applyMiddleware(...middlewareArgs)].concat(composeArgs);
  if (isDev) { composeArgs = composeArgs.concat(composeDevArgs); }
  return compose(...composeArgs);
};

const configureStore = (preloadedState?: StoreState.All) => {

  const enhancer = compileEnhancers(
    [thunk/*, api*/, historyMiddleware], // Middleware
    [createLogger()], // Dev Middleware
    [], // Compose args
    [DevTools.instrument()] // Dev Compose Args
  );

  // Create Store
  const store = createStore(rootReducer, preloadedState, enhancer);

  // Persist Store
  const persistor = persistStore(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('store/reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return { persistor, store };
};

export default configureStore;
