import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Colors!!!</h1>
        <ColorPicker />
      </div>
    );
  }
}

export default App;
