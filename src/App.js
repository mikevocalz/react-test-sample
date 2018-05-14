import React, { Component, Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";

import headerLogo from "./assets/staff-logo.png";

import "./App.css";
import StaffDirectory from "./components/StaffDirectory";
import notfound from "./components/notfound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <Link to="/products">
              <img src={headerLogo} className="App-logo" alt="logo" />
            </Link>
          </header>
          <p className="staff-directions">
            Click on "Staff Directory" to View Details
          </p>
          <hr />
          <Switch>
            <Route exact path="/" render={props => <div> </div>} />
            <Route path="/products" component={StaffDirectory} />
            <Route path="*" component={notfound} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
