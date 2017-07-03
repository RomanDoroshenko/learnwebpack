import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <div>
      <h1>My Webpack App</h1>
      <p>A cool app build with React, Webpack and Magic!!!</p>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('react-container'));
