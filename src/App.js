import React, { Component } from 'react';
import headerLogo from './assets/staff-logo.png';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={headerLogo} className="App-logo" alt="logo" />
        </header>
        <p className="staff-directions">
          Click on a staff member to view details
        </p>
      </div>;
  }
}

export default App;
