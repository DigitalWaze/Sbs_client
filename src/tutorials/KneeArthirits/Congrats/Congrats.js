import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../helper/themeContext";

import Bone1Image from "../../../assets/bone1_Bitmap.png";

import "./Congrats.css";

class Congrats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="Tutorials_Congrats_Main_Div">
        <div id="Tutorials_Congrats_Text_Wrapper">
          <div id="Tutorials_Congrats_Heading1_Div">Congratulations</div>
          <div id="Tutorials_Congrats_Neon_Line"></div>
          <div id="Tutorials_Congrats_Heading2_Div">
            You have finished the Knee Arthritis Education Module.
          </div>
          <div id="Tutorials_Congrats_Heading2_Div">
            You are now ready to start the X-ray Matching Education Module.
          </div>
          <div id="Tutorials_Congrats_Next_Button_Div">
            <Button
              id="Tutorials_Congrats_Next_Button"
              variant="contained"
              onClick={() => {
                this.context.history.goBack();
              }}
            >
              {" "}
              back{" "}
            </Button>
            <Button
              id="Tutorials_Congrats_Next_Button"
              variant="contained"
              onClick={() => {
                this.context.setCookie("tutorial-" + this.context.state.user_id,32);
                this.context.history.push("/tutorials/matching-education/welcome");
              }}
            >
              {" "}
              Continue{" "}
            </Button>
          </div>
        </div>
        <div id="Tutorials_Congrats_Image_div">
          <img src={Bone1Image} alt="SBS" id="Tutorials_Congrats_Image_Bone" />
        </div>
      </div>
    );
  }
}
Congrats.contextType = MyContext;
export default Congrats;
