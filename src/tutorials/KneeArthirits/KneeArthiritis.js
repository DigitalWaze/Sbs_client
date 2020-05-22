import React, { Component } from "react";
import MyContext from "../../helper/themeContext";
import { Route, Router } from "react-router-dom";
import Welcome from "./welcome";
import Overview from "./Overview/overview";
import KDAA from "./KDAA/KDAA";
import COTK from "./COTK/COTK";

class KneeArthiritis extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={this.context.history}>
        <Route
          exact
          path="/tutorials/knee-Arthiritis/welcome"
          component={Welcome}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/overview"
          component={Overview}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/knee-degeneration-and-arthritis"
          component={KDAA}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/compartments-of-the-knee"
          component={Overview}
        />
      </Router>
    );
  }
}

KneeArthiritis.contextType = MyContext;
export default KneeArthiritis;
