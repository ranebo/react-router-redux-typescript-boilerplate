import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'app/containers/Header';
import { Counter, Home } from 'app/routes';
import Miss404 from 'app/routes/Miss404';

export default () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact={true} path="/counter" component={Counter} />
      <Route exact={true} path="/" component={Home} />
      <Route path="*" component={Miss404} />
    </Switch>
  </React.Fragment>
);
