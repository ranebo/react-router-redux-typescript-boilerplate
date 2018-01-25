import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'app/containers/Header';
import { Counter, Todos, Home, Login } from 'app/routes';
import Miss404 from 'app/routes/Miss404';

const Layout = () => (
  <React.Fragment>
    <Route render={({ location: { pathname } }) => <Header pathname={pathname} />} />
    <Switch>
      <Route exact={true} path="/counter" component={Counter} />
      <Route exact={true} path="/todos" component={Todos} />
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/" component={Home} />
      <Route path="*" component={Miss404} />
    </Switch>
  </React.Fragment>
);

export default Layout;
