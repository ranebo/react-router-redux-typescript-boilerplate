import * as React from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
// import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
// import { history } from 'app/history';
import App from 'app/containers/App';
// import configureStore from 'store/configureStore';
import LoadingPage from 'lib/components/LoadingPage';
import 'app/app-styles';

import configureStore from 'store';
// import { StoreState } from 'store/types';

const { persistor, store } = configureStore();

const onBeforeLift = () => {
  // take some action before the gate lifts
};

const Application: React.StatelessComponent<{}> = () => (
  //       <ConnectedRouter history={ history }>
  <AppContainer>
    <Provider store={store}>
      <PersistGate
        loading={<LoadingPage />}
        onBeforeLift={onBeforeLift}
        persistor={persistor}
      >
          <App />
      </PersistGate>
    </Provider>
  </AppContainer>
  //       </ConnectedRouter>
);

export default Application;
