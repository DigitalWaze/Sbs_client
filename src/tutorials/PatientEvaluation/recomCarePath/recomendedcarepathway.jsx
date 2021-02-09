import React, { Component } from "react";
import MyContext from "../../../helper/themeContext";
import { Route, Router } from "react-router-dom";

import Welcome from "./WELCOME/Welcome";
import WIACP from "./WIACP/WIACP";
import SBSRCP from "./SBSRCP/SBSRCP";
import OCP from "./OCP/OCP";
import NOP from "./NOP/NOP";
import OP from "./OP/OP";
import BAJHASPP from "./BAJHASPP/BAJHASPP";
import UnderstandingCarePathways from "./UnderstandingCarePathways/UnderstandingCarePathways";

class recomendedcarepathway extends Component {
  render() {
    return (
      <Router history={this.context.history}>
        <Route
          exact
          path="/tutorials/patient-evaluation-education/recommended-carepathway/welcome"
          component={Welcome}
        />
        <Route
          exact
          path="/tutorials/patient-evaluation-education/recommended-carepathway/what-is-care-pathway"
          component={WIACP}
        />
        <Route
          exact
          path="/tutorials/patient-evaluation-education/recommended-carepathway/step-by-step-recommended-care-pathway"
          component={SBSRCP}
        />
        <Route
          exact
          path="/tutorials/patient-evaluation-education/recommended-carepathway/overall-care-pathway"
          component={OCP}
        />
        <Route
          exact
          path="/tutorials/patient-evaluation-education/recommended-carepathway/non-operative-pathway"
          component={NOP}
        />
        <Route
          exact
          path="/tutorials/patient-evaluation-education/recommended-carepathway/operative-pathway"
          component={OP}
        />
        <Route
          exact
          path="/tutorials/patient-evaluation-education/recommended-carepathway/bone-and-joint-health-and-surgery-prep-program"
          component={BAJHASPP}
        />
        <Route
          exact
          path="/tutorials/patient-evaluation-education/recommended-carepathway/understanding-care-pathways"
          component={UnderstandingCarePathways}
        />


      </Router>
    );
  }
}

recomendedcarepathway.contextType = MyContext;
export default recomendedcarepathway;
