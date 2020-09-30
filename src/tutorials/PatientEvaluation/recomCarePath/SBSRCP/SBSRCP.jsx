import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/SBSRCPss.JPG";

import "./SBSRCP.css";

class SBSRCP extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="SBSRCP_Main_Div">
        <div id="SBSRCP_Content_Wrapper">
          <div id="SBSRCP_Center_Wrapper">
            <div id="SBSRCP_Text_wrapper">
              <div id="SBSRCP_Heading1_Div">Step by Step's Recommended Care Pathway</div>
              <div id="SBSRCP_Text_Div">
                SBS provides a recommended care pathway individualized for your patient based on:
                <li>Pain</li>
                <li>Function</li>
                <li>Level of Degeneration</li>
                These are detailed in the X-ray Report Card and Patient Reported Outcome Summary
              </div>
            </div>
            <div id="SBSRCP_Image_Wrapper">
              <div id="SBSRCP_Image_Container">
                <img src={Img1} alt="SBSRCP1" />
              </div>
            </div>
            <div id="SBSRCP_Next_Button_Div">
              <Button
                id="SBSRCP_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push("./what-is-care-pathway");
                }}>
                {" "}
                Back{" "}
              </Button>
              <Button
                id="SBSRCP_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie("tutorial-" + this.context.state.user_id, 8);
                  this.context.history.push("./overall-care-pathway");
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
SBSRCP.contextType = MyContext;
export default SBSRCP;
