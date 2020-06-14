import React, { Component } from "react";
import MyContext from "../helper/themeContext";
import { Route, Router } from "react-router-dom";

// import JSNMC from "./KneeArthirits/JSNMC/JSNMC";

import SBSWelcome from "./SBS/SBSWelcome/SBSWelcome";
import SBSVideo from "./SBS/SBSVideo/SBSVideo";
// import SBSVideo2 from "./SBS/SBSVideo2/SBSVideo2";
import KneeArthiritis from "./KneeArthirits/KneeArthiritis";
import MatchingEducation from "./XrayMatchingEdu/matchingEducation";
import XrayTraining from "./xrayTraining/xrayTraining";
import ResumeTutorial from "./resumeTutorial/resumeTutorial";
import ResumeTutorialSelect from "./resumeTutorial/resumeTutorialSelect";

class Tutorials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={this.context.history}>
       

       <Route exact path="/tutorials/resume-tutorial" component={ResumeTutorial} />
        <Route exact path="/tutorials/resume-tutorial/recover" component={ResumeTutorialSelect} />
        <Route path="/tutorials/knee-Arthiritis" component={KneeArthiritis} />
        <Route
          path="/tutorials/matching-education"
          component={MatchingEducation}
        />
        <Route path="/tutorials/matching-training" component={XrayTraining} />

        {/* WHAT IS SBS ROUTES STARTS HERE */}

        <Route exact path="/tutorials/sbs/welcome" component={SBSWelcome} />
        <Route exact path="/tutorials/sbs/video" component={SBSVideo} />
        {/* <Route exact path="/tutorials/sbs/video2" component={SBSVideo2} /> */}
      </Router>
    );
  }
}

Tutorials.contextType = MyContext;
export default Tutorials;
