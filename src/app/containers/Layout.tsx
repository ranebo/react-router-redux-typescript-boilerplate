import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'app/containers/Header';
import { Counter, Todos, Home } from 'app/routes';
import Miss404 from 'app/routes/Miss404';

const Layout = () => (
  <React.Fragment>
    <Route render={({ location: { pathname } }) => <Header pathname={pathname} />} />
    <Switch>
      <Route exact path="/todos" component={ Todos } />
      <Route path="/counter" component={Counter} />
      <Route exact path="/" component={ Home } />
      <Route component={ Miss404 } />
    </Switch>
  </React.Fragment>
);

export default Layout;
