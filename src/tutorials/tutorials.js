import React, { Component } from "react";
import MyContext from "../helper/themeContext";
import { Route, Router } from "react-router-dom";
import Welcome from "./welcome";
import Overview from "./Overview/overview";
import KDAA from "./KDAA/KDAA";

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
        <Route
          exact
          path="/tutorials/knee-degeneration-and-arthritis"
          component={KDAA}
        />
      </Router>
    );
  }
}

Tutorials.contextType = MyContext;
export default Tutorials;
