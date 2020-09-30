import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/LV1.png";

import "./LV.css";

class LV extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="LV_Main_Div">
        <div id="LV_Content_Wrapper">
          <div id="LV_Center_Wrapper">
            <div id="LV_Text_wrapper">
              <div id="LV_Heading1_Div">Lateral View</div>
              <div id="LV_Text_Div">
                The lateral view is only obtained for the knee(s) that are
                symptomatic. For example, if there is only right knee pain, a
                lateral view of the right knee is needed. This view is a
                supplementary view of the kneecap joint but is not used to
                determine the level of joint space narrowing.
              </div>
            </div>
            <div id="LV_Image_Wrapper">
              <div id="LV_Images_Headings">
                <div id="LV_Image_Heading">Right Lateral View</div>
              </div>
              <div id="LV_Image_container">
                <div id="LV_Inner_Image_Container">
                  <img src={Img1} alt="LV1" />
                </div>
              </div>
            </div>
            <div id="LV_Next_Button_Div">
              <Button
                id="LV_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./evaluating-the-kneecap-compartment"
                  );
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="LV_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    15
                  );
                  this.context.history.push("./obtaining-the-correct-x-rays");
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
LV.contextType = MyContext;
export default LV;
