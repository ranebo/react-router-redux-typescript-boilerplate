import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from 'store/reducers';
import { Store } from 'store/types';

// import { createLogger } from 'redux-logger'
// import { historyMiddleware } from 'app/history';
// import DevTools from 'app/DevTools'
// import api from 'store/middleware/api'

// Helper function to compile store args:
// createStore(
//   rootReducer,
//   preloadedState,
//   compose(applyMiddleware(middleware1, middlware2, ...middlewareDev),
//    ...composeDev)
// );
const compileStoreArgs = (
  rReducer,
  preloadedState,
  middlewareArgs,
  devMiddlewareArgs,
  composeArgs,
  composeDevArgs
  ) => {
  const isDev = process.env.NODE_ENV;
  if (isDev) { middlewareArgs = middlewareArgs.concat(devMiddlewareArgs); }
  composeArgs = [applyMiddleware(...middlewareArgs)].concat(composeArgs);
  if (isDev) { composeArgs = composeArgs.concat(composeDevArgs); }
  return [rReducer, preloadedState, compose(...composeArgs)];
};

const configureStore = (preloadedState?: Store.All) => {

  const storeArgs = compileStoreArgs(
    rootReducer,
    preloadedState!,
    [thunk/*, api, historyMiddleware*/], // Middleware
    [/*createLogger()*/], // Dev Middleware
    [], // Compose args
    [/*DevTools.instrument()*/] // Dev Compose Args
  );

  // Create Store
  const store = createStore.apply(null, storeArgs);

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
