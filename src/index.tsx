import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'app/containers/App';
import registerServiceWorker from './registerServiceWorker';
import './base-styles';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
