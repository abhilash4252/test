import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Home } from "./components/home";
import { CountryDetails } from "./components/country_details";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/details" component={CountryDetails}></Route>
          <Route path="/" component={(data) => <Home {...data} />}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
