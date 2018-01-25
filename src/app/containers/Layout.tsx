import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'app/containers/Header';
import authorization from 'lib/hocs/authorization';
import { Counter, Todos, Home, Login } from 'app/routes';
import Miss404 from 'app/routes/Miss404';

const Admin = authorization(['admin']);
const User = authorization(['admin', 'manager', 'user']);
const Any = authorization();

const Layout = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact={true} path="/counter" component={User(Counter)} />
      <Route exact={true} path="/todos" component={Admin(Todos)} />
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/" component={Any(Home)} />
      <Route path="*" component={Any(Miss404)} />
    </Switch>
  </React.Fragment>
);

export default Layout;
