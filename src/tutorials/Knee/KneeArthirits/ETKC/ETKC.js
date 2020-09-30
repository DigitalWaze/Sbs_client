import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/ETKC1.png";
import Img2 from "../../../assets/ETKC2.png";

import "./ETKC.css";

class ETKC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="ETKC_Main_Div">
        <div id="ETKC_Content_Wrapper">
          <div id="ETKC_Center_Wrapper">
            <div id="ETKC_Text_wrapper">
              <div id="ETKC_Heading1_Div">
                Evaluating the Kneecap Compartment
              </div>
              <div id="ETKC_Text_Div">
                The kneecap view, also known as the sunrise or merchant view, is
                used to examine the level of joint space narrowing of the
                kneecap compartment. If both knees are experiencing symptoms,
                then this view is needed for both kneecap compartments.
              </div>
            </div>
            <div id="ETKC_Image_Wrapper">
              <div id="ETKC_Images_Headings">
                <div id="ETKC_Image_Heading">Kneecap</div>
                <div id="ETKC_Image_Heading">Taking the X-ray</div>
              </div>
              <div id="ETKC_Image_container">
                <div id="ETKC_Inner_Image_Container">
                  <img src={Img1} alt="ETKC1" />
                </div>
                <div id="ETKC_Inner_Image_Container">
                  <img src={Img2} alt="ETKC2" />
                </div>
              </div>
            </div>
            <div id="ETKC_Next_Button_Div">
              <Button
                id="ETKC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./evaluating-the-medial-and-lateral-compartments-v2"
                  );
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="ETKC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    14
                  );
                  this.context.history.push("./lateral-view");
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
ETKC.contextType = MyContext;
export default ETKC;
