import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome.js';
import Today from './Today.js';
import Counter from './Counter.js';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Welcome name='Siegren' />
        <Today />
      </div>
    );
  }
}

export default App;
