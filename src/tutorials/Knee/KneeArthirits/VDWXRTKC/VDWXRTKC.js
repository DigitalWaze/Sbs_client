import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/VDWXRTKC1.png";
import Img2 from "../../../assets/VDWXRTKC2.png";

import "./VDWXRTKC.css";

class VDWXRTKC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="VDWXRTKC_Main_Div">
        <div id="VDWXRTKC_Content_Wrapper">
          <div id="VDWXRTKC_Center_Wrapper">
            <div id="VDWXRTKC_Text_wrapper">
              <div id="VDWXRTKC_Heading1_Div">
                Viewing Degeneration with X-rays:
              </div>
              <div id="VDWXRTKC_Heading1_Div">The Kneecap Compartment</div>
              <div id="VDWXRTKC_Text_Div">
                The level of degeneration in the kneecap compartment
                (patello-femoral compartment) is directly related to the amount
                of joint space between the femur and the kneecap.
              </div>
            </div>
            <div id="VDWXRTKC_Image_Wrapper">
              <div id="VDWXRTKC_Images_Headings">
                <div id="VDWXRTKC_Image_Heading">Healthy Kneecap</div>
                <div id="VDWXRTKC_Image_Heading">Degenerated Kneecap</div>
              </div>
              <div id="VDWXRTKC_Image_container">
                <div id="VDWXRTKC_Inner_Image_Container">
                  <img src={Img1} alt="VDWXRTKC1" />
                </div>
                <div id="VDWXRTKC_Inner_Image_Container">
                  <img src={Img2} alt="VDWXRTKC2" />
                </div>
              </div>
            </div>
            <div id="VDWXRTKC_Next_Button_Div">
              <Button
                id="VDWXRTKC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./learn-about-the-medial-and-lateral-compartments-of-the-knee"
                  );
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="VDWXRTKC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    11
                  );
                  this.context.history.push("./compartments-of-the-knee-2");
                }}
              >
                {" "}
                Continue{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
VDWXRTKC.contextType = MyContext;
export default VDWXRTKC;
