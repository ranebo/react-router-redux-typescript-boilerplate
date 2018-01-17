import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'app/App';
import registerServiceWorker from './registerServiceWorker';
import './styles';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
