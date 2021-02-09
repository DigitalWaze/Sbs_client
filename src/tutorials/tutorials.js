import React, { Component } from "react";
import MyContext from "../helper/themeContext";
import { Route, Router } from "react-router-dom";

// import JSNMC from "./KneeArthirits/JSNMC/JSNMC";

import SBSWelcome from "./SBS/SBSWelcome/SBSWelcome";
import SBSVideo from "./SBS/SBSVideo/WhatisSbs/SBSVideo";
import NavigationVideo from "./SBS/SBSVideo/NavigationVideo/NavigationVideo";

// import SBSVideo2 from "./SBS/SBSVideo2/SBSVideo2";
import KneeArthiritis from "./Knee/KneeArthirits/KneeArthiritis";
import MatchingEducation from "./Knee/XrayMatchingEdu/matchingEducation";
import XrayTraining from "./xrayTraining/xrayTraining";
// import ResumeTutorial from "./resumeTutorial/resumeTutorial";
// import ResumeTutorialSelect from "./resumeTutorial/resumeTutorialSelect";
import Knee from "./Knee/Knee";
import Hip from "./Hip/Hip";
import PatientEvaluation from "./PatientEvaluation/PatientEvaluation";
import RecomPathway from "./PatientEvaluation/recomCarePath/recomendedcarepathway";
import AutoXrayEval from "./AutoXrayEval/AutoXrayEval";
import UnderstandingPros from "./PatientEvaluation/UnderstandingPRO/UnderstandingPro";
import XrayEval from "./PatientEvaluation/XrayEval/XrayEval";

class Tutorials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={this.context.history}>
        {/* WHAT IS SBS ROUTES STARTS HERE */}
        <Route exact path="/tutorials/sbs/welcome" component={SBSWelcome} />
        <Route exact path="/tutorials/sbs/video" component={SBSVideo} />
        <Route exact path="/tutorials/sbs/navigation-video" component={NavigationVideo} />
        {/* WHAT IS SBS ROUTES ENDS HERE */}
        {/* KNEE ROUTES STARTS HERE */}
        <Route exact path="/tutorials/knee/options" component={Knee} />
        {/* Contains INNER ROUTES FOR KNEE  */}
        <Route path="/tutorials/knee-Arthiritis" component={KneeArthiritis} /> {/* Router */}
        <Route path="/tutorials/matching-education" component={MatchingEducation} />
        <Route path="/tutorials/matching-training" component={XrayTraining} />
        {/* KNEE ROUTES ENDS HERE */}
        {/* HIP ROUTES STARTS HERE */}
        <Route exact path="/tutorials/hip/options" component={Hip} />
        {/* Contains INNER ROUTES FOR Hip  */}
        {/* HIP ROUTES ENDS HERE */}
        {/* Patient Evaluation Education ROUTES STARTS HERE */}
        <Route exact path="/tutorials/patient-evaluation-education/options" component={PatientEvaluation} />
        {/* Contains INNER ROUTES FOR Pa  */}
        <Route path="/tutorials/patient-evaluation-education/xray-evaluation" component={XrayEval} />
        <Route path="/tutorials/patient-evaluation-education/understanding-pros" component={UnderstandingPros} />

        {/* Contains ROUTES FOR recommended Care Pathway */}
        <Route path="/tutorials/patient-evaluation-education/recommended-carepathway" component={RecomPathway} />
        {/* Contains ROUTES FOR automatic xray evaluation */}
        <Route path="/tutorials/automatic-xray-evaluation" component={AutoXrayEval} />
        {/* Patient Evaluation Education ROUTES ENDS HERE */}
        {/* <Route exact path="/tutorials/resume-tutorial" component={ResumeTutorial} />
        <Route exact path="/tutorials/resume-tutorial/recover" component={ResumeTutorialSelect} /> */}
        {/* <Route exact path="/tutorials/sbs/video2" component={SBSVideo2} /> */}
      </Router>
    );
  }
}

Tutorials.contextType = MyContext;
export default Tutorials;
