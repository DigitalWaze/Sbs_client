import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../helper/themeContext";

import Bone1Image from "../../assets/bone1_Bitmap.png";

import "./LearnMore.css";

class LearnMore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="Tutorials_LearnMore_Main_Div">
        <div id="Tutorials_LearnMore_Text_Wrapper">
          <div id="Tutorials_LearnMore_Heading1_Div">
            Hip & Knee <br />
            Step by Step
          </div>
          <div id="Tutorials_LearnMore_Neon_Line"></div>
          <div id="Tutorials_LearnMore_Heading2_Div">
            Thank you for your interest in Hip & Knee Step by Step!
          </div>
          <div id="Tutorials_LearnMore_Text_Div">
            To learn more, please contact the Step by Step team at:
            <span style={{ color: "#b4ec51" }}> innovationcenter@upmc.edu</span>
          </div>
          <div id="Tutorials_LearnMore_Next_Button_Div">
            <Button
              id="Tutorials_LearnMore_Next_Button"
              variant="contained"
              onClick={() => {
                this.context.history.push("/");
              }}
            >
              {" "}
              Back{" "}
            </Button>
          </div>
        </div>
        <div id="Tutorials_LearnMore_Image_div">
          <img src={Bone1Image} alt="SBS" id="Tutorials_LearnMore_Image_Bone" />
        </div>
      </div>
    );
  }
}
LearnMore.contextType = MyContext;
export default LearnMore;
