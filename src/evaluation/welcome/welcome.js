import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../helper/themeContext";

import Bone1Image from "../../assets/bone1_Bitmap.png";

import "./welcome.css";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="Evaluaion_Welcome_Main_Div">
        <div id="Evaluaion_Welcome_Text_Wrapper">
          <div id="Evaluaion_Welcome_Heading1_Div">
            Hip & Knee <br />
            Step by Step
          </div>
          <div id="Evaluaion_Welcome_Neon_Line"></div>
          <div id="Evaluaion_Welcome_Heading2_Div">
            Patient Evaluation
            <br />
            and Diagnosis
          </div>
          <div id="Evaluaion_Welcome_Text_Div">
            Start a patient evaluation by inputting the patient’s demographics,
            joints that hurt, patient reported outcome (PRO) and X-rays.
          </div>
          <div id="Evaluaion_Welcome_Next_Button_Div">
            <Button
              id="Evaluaion_Welcome_Next_Button"
              variant="contained"
              onClick={() => {
                this.context.history.push("./Video");
              }}
            >
              {" "}
              Next{" "}
            </Button>
          </div>
        </div>
        <div id="Evaluaion_Welcome_Image_div">
          <img src={Bone1Image} alt="SBS" id="Evaluaion_Welcome_Image_Bone" />
        </div>
      </div>
    );
  }
}
Welcome.contextType = MyContext;
export default Welcome;
