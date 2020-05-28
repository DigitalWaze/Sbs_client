import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../helper/themeContext";

import Bone1Image from "../../../assets/bone1_Bitmap.png";

import "./SBSWelcome.css";

class SBSWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="Tutorials_SBS_Welcome_Main_Div">
        <div id="Tutorials_SBS_Welcome_Text_Wrapper">
          <div id="Tutorials_SBS_Welcome_Heading1_Div">
            Hip & Knee <br />
            Step by Step
          </div>
          <div id="Tutorials_SBS_Welcome_Neon_Line"></div>
          <div id="Tutorials_SBS_Welcome_Text_Div">
            Simple, cost effective, patient centered treatment pathway for hip
            and knee pain caused by arthritis
          </div>
          <div id="Tutorials_SBS_Welcome_Next_Button_Div">
            <Button
              id="Tutorials_SBS_Welcome_Next_Button"
              variant="contained"
              onClick={() => {
                this.context.setCookie(
                  "tutorial-" + this.context.state.user_id,
                  1
                );
                this.context.history.push("./video");
              }}
            >
              {" "}
              Next{" "}
            </Button>
          </div>
        </div>
        <div id="Tutorials_SBS_Welcome_Image_div">
          <img
            src={Bone1Image}
            alt="SBS"
            id="Tutorials_SBS_Welcome_Image_Bone"
          />
        </div>
      </div>
    );
  }
}
SBSWelcome.contextType = MyContext;
export default SBSWelcome;
