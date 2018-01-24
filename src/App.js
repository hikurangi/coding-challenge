import React, { Component } from 'react';
import AvatarPicker from './AvatarPicker'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <AvatarPicker />
        </header>
      </div>
    );
  }
}

export default App;
