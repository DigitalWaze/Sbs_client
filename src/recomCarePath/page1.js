import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../helper/themeContext";

import Bone1Image from "../assets/bone1_Bitmap.png";

// import "./welcome.css";

class WelcomeRecom extends Component {
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
            Recommended Care Pathway           
          </div>
          <div id="Evaluaion_Welcome_Text_Div">
            Hip & Knee Step by Step will recommend the individualized care pathway for this patient.
          </div>
          <div id="Evaluaion_Welcome_Next_Button_Div">
            <Button
              id="Evaluaion_Welcome_Next_Button"
              variant="contained"
              onClick={() => {
                this.context.history.push("./overall-care-pathway");
              }}
            >
              {" "}
              Continue{" "}
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
WelcomeRecom.contextType = MyContext;
export default WelcomeRecom;
