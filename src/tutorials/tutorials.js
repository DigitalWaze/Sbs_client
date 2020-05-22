import React, { Component } from "react";
import MyContext from "../helper/themeContext";
import { Route, Router } from "react-router-dom";
import Welcome from "./KneeArthirits/welcome";
import Overview from "./KneeArthirits/Overview/overview";
import KDAA from "./KneeArthirits/KDAA/KDAA";
import COTK from "./KneeArthirits/COTK/COTK";
import VDWXR from "./KneeArthirits/VDWXR/VDWXR";
import LATMALCOTKITX from "./KneeArthirits/LATMALCOTKITX/LATMALCOTKITX";

class Tutorials extends Component {
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
          component={COTK}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/viewing-degeneration-with-x-rays-copy"
          component={VDWXR}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/learn-about-the-medial-and-lateral-compartments-of-the-knee"
          component={LATMALCOTKITX}
        />
      </Router>
    );
  }
}

Tutorials.contextType = MyContext;
export default Tutorials;
