import * as React from 'react';
import DevTools from 'app/DevTools';
import Layout from 'app/containers/Layout';
import 'app/containers/styles';

const setEnvTools = (AppComponent: React.StatelessComponent) => {
  if (process.env.NODE_ENV === 'development') {

    // Add AppComponent key so Hot Reloading works with Code Splitting:
    // https://medium.com/@giang.nguyen.dev/hot-loader-with-react-loadable-c8f70c8ce1a6

    // Add Dev Tools

    return () => (
      <React.Fragment>
        <AppComponent key={Math.random()} />
        <DevTools />
      </React.Fragment>
    )
  }

  return () => <AppComponent />

};

const App = () => (
  <div id='app'>
    <Layout />
  </div>
);

export default setEnvTools(App);
