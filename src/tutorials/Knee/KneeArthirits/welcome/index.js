import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Bone1Image from "../../../../assets/bone1_Bitmap.png";

import "./welcome.css";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="Tutorials_Welcome_Main_Div">
        <div id="Tutorials_Welcome_Text_Wrapper">
          <div id="Tutorials_Welcome_Heading1_Div">
            Hip & Knee <br />
            Step by Step
          </div>
          <div id="Tutorials_Welcome_Neon_Line"></div>
          <div id="Tutorials_Welcome_Heading2_Div">
            Knee Arthritis Education
          </div>
          <div id="Tutorials_Welcome_Text_Div">
            Familiarize yourself with the anatomy of the knee and the different
            levels of degeneration. Learn what X-rays are needed to perform a
            complete evaluation for a patient's knee pain.
          </div>
          <div id="Tutorials_Welcome_Next_Button_Div">
            <Button
              id="Tutorials_Welcome_Next_Button"
              variant="contained"
              onClick={() => {
                this.context.setCookie(
                  "tutorial-" + this.context.state.user_id,
                  4
                );
                this.context.history.push("/tutorials/knee-arthiritis/overview");
              }}
            >
              {" "}
              Continue{" "}
            </Button>
          </div>
        </div>
        <div id="Tutorials_Welcome_Image_div">
          <img src={Bone1Image} alt="SBS" id="Tutorials_Welcome_Image_Bone" />
        </div>
      </div>
    );
  }
}
Welcome.contextType = MyContext;
export default Welcome;
