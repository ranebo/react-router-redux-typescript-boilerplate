import * as React from 'react';
import { Provider } from 'react-redux';
// import { AppContainer } from 'react-hot-loader'
// import { ConnectedRouter } from 'react-router-redux';
// import { PersistGate } from 'redux-persist/es/integration/react';
// import { history } from 'app/history';
import App from 'app/containers/App';
// import configureStore from 'store/configureStore';
// import LoadingPage from 'lib/components/LoadingPage';
import 'app/app-styles';

import { createStore } from 'redux';
import { enthusiasm } from '../reducers/index';
import { StoreState } from '../types/index';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

// const { persistor, store } = configureStore();

// const onBeforeLift = () => {
//   // take some action before the gate lifts
// };

const Application: React.StatelessComponent<{}> = () => (
  // <AppContainer>
  //     <PersistGate
  //       loading={ <LoadingPage /> }
  //       onBeforeLift={ onBeforeLift }
  //       persistor={ persistor }>
  //       <ConnectedRouter history={ history }>
    <Provider store={store}>
          <App />
    </Provider>
  //       </ConnectedRouter>
  //     </PersistGate>
  // </AppContainer>
);

export default Application;
