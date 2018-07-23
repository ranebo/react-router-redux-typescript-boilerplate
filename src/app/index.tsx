import * as React from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { history } from 'app/history';
import App from 'app/containers/App';
import configureStore from 'store';
import 'app/app-styles';

const { persistor, store } = configureStore();

const onBeforeLift = () => {
  // take some action before the gate lifts
};

export default () => (
  <AppContainer>
    <Provider store={store}>
      <PersistGate
        loading={<div>Loading...</div>}
        onBeforeLift={onBeforeLift}
        persistor={persistor}
      >
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </AppContainer>
);
