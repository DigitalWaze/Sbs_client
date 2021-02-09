import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/BAJHASPP.png";

import "./BAJHASPP.css";

class BAJHASPP extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="BAJHASPP_Main_Div">
        <div id="BAJHASPP_Content_Wrapper">
          <div id="BAJHASPP_Center_Wrapper">
            <div id="BAJHASPP_Text_wrapper">
              <div id="BAJHASPP_Heading1_Div">Bone And Joint Health And Surgery Prep Program</div>
              <div id="BAJHASPP_Text_Div">
                The Joint Health and Surgery Prep Program prepares patients by providing education, pain management and
                other support options that are specific to their needs. This program will help tp slow the progression
                of degeneration for non-surgical patients and optimally prepare a patient for surgery now or if needed
                in the future
              </div>
            </div>
            <div id="BAJHASPP_Image_Wrapper">
              <div id="BAJHASPP_Image_Container">
                <img style={{ maxWidth: "78%" }} src={Img1} alt="BAJHASPP1" />
              </div>
            </div>
            <div id="BAJHASPP_Next_Button_Div">
              <Button
                id="BAJHASPP_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push("./operative-pathway");
                }}>
                {" "}
                Back{" "}
              </Button>
              <Button
                id="BAJHASPP_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie("tutorial-" + this.context.state.user_id, 8);
                  this.context.history.push("./understanding-care-pathways");
                }}>
                {" "}
                NEXT{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
BAJHASPP.contextType = MyContext;
export default BAJHASPP;
