import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../helper/themeContext";

import imageSource from "../../assets/SOXRVNBOPS.png";

import "./SOXRVNBOPS.css";

class SOXRVNBOPS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="SOXRVNBOPS_Main_Div">
        <div id="SOXRVNBOPS_Content_Wrapper">
          <div id="SOXRVNBOPS_Center_Wrapper">
            <div id="SOXRVNBOPS_Text_wrapper">
              <div id="SOXRVNBOPS_Heading1_Div">
                A Summary of X-ray Views Necessary <br /> Based on Patients’
                Symptoms
              </div>
            </div>
            <div id="SOXRVNBOPS_Image_Wrapper">
              <div id="SOXRVNBOPS_Image_Container">
                <img src={imageSource} alt="SOXRVNBOPS" />
              </div>
            </div>
            <div id="SOXRVNBOPS_Next_Button_Div">
              <Button
                id="SOXRVNBOPS_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push("./obtaining-the-correct-x-rays");
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="SOXRVNBOPS_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    17
                  );
                  this.context.history.push("./what-x-rays-would-you-request");
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
SOXRVNBOPS.contextType = MyContext;
export default SOXRVNBOPS;
