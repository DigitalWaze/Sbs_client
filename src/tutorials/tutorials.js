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
import SOXRVNBOPS from "./KneeArthirits/SOXRVNBOPS/SOXRVNBOPS";
import WXRWYR from "./KneeArthirits/WXRWYR/WXRWYR";
import EKDWXR from "./KneeArthirits/EKDWXR/EKDWXR";
import HTIJSNAD from "./KneeArthirits/HTIJSNAD/HTIJSNAD";
import WDTJSSAEFTMALC from "./KneeArthirits/WDTJSSAEFTMALC/WDTJSSAEFTMALC";
import WDTJSSAEFTMALC2 from "./KneeArthirits/WDTJSSAEFTMALC2/WDTJSSAEFTMALC2";
import LOJSND from "./KneeArthirits/LOJSND/LOJSND";
// import JSNMC from "./KneeArthirits/JSNMC/JSNMC";
import WITJSFTKC from "./KneeArthirits/WITJSFTKC/WITJSFTKC";
import YMLATJSONBSOTK from "./KneeArthirits/YMLATJSONBSOTK/YMLATJSONBSOTK";
import XRMATTDLOD from "./KneeArthirits/XRMATTDLOD/XRMATTDLOD";
import XRMALOD from "./KneeArthirits/XRMALOD/XRMALOD";
import Congrats from "./KneeArthirits/Congrats/Congrats";
import SBSWelcome from "./SBS/SBSWelcome/SBSWelcome";
import SBSVideo from "./SBS/SBSVideo/SBSVideo";
import SBSVideo2 from "./SBS/SBSVideo2/SBSVideo2";

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
        <Route
          exact
          path="/tutorials/knee-Arthiritis/summary-of-x-ray-views-necessary-based-on-patients-symptoms"
          component={SOXRVNBOPS}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/what-x-rays-would-you-request"
          component={WXRWYR}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/evaluating-knee-degeneration-with-x-rays"
          component={EKDWXR}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/how-to-identify-joint-space-narrowing-and-degeneration"
          component={HTIJSNAD}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments"
          component={WDTJSSAEFTMALC}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments-2"
          component={WDTJSSAEFTMALC2}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/levels-of-joint-space-narrowing-degeneration"
          component={LOJSND}
        />
        {/* <Route
          exact
          path="/tutorials/knee-Arthiritis/joint-space-narrowing-medial-compartment"
          component={JSNMC}
        /> */}
        <Route
          exact
          path="/tutorials/knee-Arthiritis/where-is-the-joint-space-for-the-kneecap-compartment"
          component={WITJSFTKC}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/you-must-look-at-the-joint-space-on-both-sides-of-the-kneecap"
          component={YMLATJSONBSOTK}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/x-ray-matching-a-tool-to-determine-levels-of-degeneration"
          component={XRMATTDLOD}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/x-ray-matching-and-levels-of-degeneration"
          component={XRMALOD}
        />
        <Route
          exact
          path="/tutorials/knee-Arthiritis/congrats"
          component={Congrats}
        />

        {/* WHAT IS SBS ROUTES STARTS HERE */}

        <Route exact path="/tutorials/sbs/welcome" component={SBSWelcome} />
        <Route exact path="/tutorials/sbs/video" component={SBSVideo} />
        <Route exact path="/tutorials/sbs/video2" component={SBSVideo2} />
      </Router>
    );
  }
}

Tutorials.contextType = MyContext;
export default Tutorials;
