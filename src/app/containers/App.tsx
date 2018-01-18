import * as React from 'react';
import 'app/containers/styles';

import Hello from 'app/containers/HelloContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hello />
      </div>
    );
  }
}

export default App;
