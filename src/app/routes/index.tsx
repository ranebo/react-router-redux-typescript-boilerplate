import * as React from 'react';
import * as Loadable from 'react-loadable';

const LoadableLoadingPage = (props: Loadable.LoadingComponentProps) => {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.timedOut) {
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
};

const makeAsync = loader => (
  Loadable({
    loader,
    delay: 2000,
    timeout: 30000,
    loading: LoadableLoadingPage,
  })
);

// Make async components with webpack chunk names
// so webpack can statically analyze each route by its name
// instead of dynamically generated ids
export const Home = makeAsync(() => import(/* webpackChunkName: "route-home" */ './Home'));
export const Counter = makeAsync(() => import(/* webpackChunkName: "route-counter" */ './Counter'));
