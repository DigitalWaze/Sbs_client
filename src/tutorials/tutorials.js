import React, { Component } from "react";
import MyContext from "../helper/themeContext";
import { Route, Router } from "react-router-dom";
import Welcome from "./KneeArthirits/welcome";
import Overview from "./KneeArthirits/Overview/overview";
import KDAA from "./KneeArthirits/KDAA/KDAA";
import COTK from "./KneeArthirits/COTK/COTK";
import VDWXR from "./KneeArthirits/VDWXR/VDWXR";
import LATMALCOTKITX from "./KneeArthirits/LATMALCOTKITX/LATMALCOTKITX";
import VDWXRTKC from "./KneeArthirits/VDWXRTKC/VDWXRTKC";
import COTK2 from "./KneeArthirits/COTK2/COTK2";
import ETMALC from "./KneeArthirits/ETMALC/ETMALC";
import ETKC from "./KneeArthirits/ETKC/ETKC";
import LV from "./KneeArthirits/LV/LV";
import OTCXR from "./KneeArthirits/OTCXR/OTCXR";

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
        <Route
          exact
          path="/tutorials/knee-Arthiritis/viewing-degeneration-with-x-rays-the-kneecap-compartment"
          component={VDWXRTKC}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/compartments-of-the-knee-2"
          component={COTK2}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/evaluating-the-medial-and-lateral-compartments-v2"
          component={ETMALC}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/evaluating-the-kneecap-compartment"
          component={ETKC}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/lateral-view"
          component={LV}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/obtaining-the-correct-x-rays"
          component={OTCXR}
        />
      </Router>
    );
  }
}

Tutorials.contextType = MyContext;
export default Tutorials;
