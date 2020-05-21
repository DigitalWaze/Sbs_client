import React, { Component } from "react";
import MyContext from "../helper/themeContext";
import { Route, Router } from "react-router-dom";
import Welcome from "./welcome";
import Overview from "./Overview/overview";

class Tutorials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={this.context.history}>
        <Route exact path="/tutorials/welcome" component={Welcome} />
        <Route exact path="/tutorials/overview" component={Overview} />
      </Router>
    );
  }
}

Tutorials.contextType = MyContext;
export default Tutorials;
