import * as React from 'react';
import 'app/containers/styles';

import Counter from 'app/routes/Counter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
