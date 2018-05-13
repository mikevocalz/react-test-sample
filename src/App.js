import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import headerLogo from "./assets/staff-logo.png";
import "./App.css";
import StaffList from "./components/StaffList";
import Employee from "./components/employee";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={headerLogo} className="App-logo" alt="logo" />
          </header>
          <p className="staff-directions">
            Click on a staff member to view details
          </p>

          <Route exact path="/" component={StaffList} />
          <Route exact path="/data:id" component={Employee} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
