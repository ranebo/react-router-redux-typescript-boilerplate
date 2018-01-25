import * as Loadable from 'react-loadable';
import LoadingPage from 'lib/components/LoadingPage';

// TODO: Custom Loading Pages
const makeAsync = (loader: any) => (
  Loadable({
    loader,
    delay: 2000,
    timeout: 30000,
    loading: LoadingPage,
  })
);

// Make async components with webpack chunk names
// so webpack can statically analyze each route by its name
// instead of dynamically generated ids
export const Home = makeAsync(() => import(/* webpackChunkName: "route-home" */ './Home'));
export const Counter = makeAsync(() => import(/* webpackChunkName: "route-counter" */ './Counter'));
export const Todos = makeAsync(() => import(/* webpackChunkName: "route-todos" */ './Todos'));
export const Login = makeAsync(() => import(/* webpackChunkName: "route-todos" */ './Login'));
