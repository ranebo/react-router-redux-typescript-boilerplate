import * as React from 'react';
import 'app/containers/styles';

import Hello from 'app/containers/Hello';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hello name="Rane" enthusiasmLevel={3} />
      </div>
    );
  }
}

export default App;
