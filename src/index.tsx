import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from 'app';
import registerServiceWorker from './registerServiceWorker';
import './base-styles';

const rootEl = document.getElementById('root') as HTMLElement;

const render = (Component: React.StatelessComponent) => {
  ReactDOM.render(<Component />, rootEl);
};

render(Application);
registerServiceWorker();

// if (module.hot) {
//   module.hot.accept('app', () => {
//     render(Application);
//   });
// }
