import React, { Component } from 'react';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>React app boilerplate</h1>
        <Test />
      </div>
    );
  }
}

export default App;