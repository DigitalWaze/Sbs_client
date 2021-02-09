import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/WIACP.png";

import "./WIACP.css";

class WIACP extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="WIACP_Main_Div">
        <div id="WIACP_Content_Wrapper">
          <div id="WIACP_Center_Wrapper">
            <div id="WIACP_Text_wrapper">
              <div id="WIACP_Heading1_Div">What is a Care Pathway?</div>
              <div id="WIACP_Text_Div">
                <li id="WIACP_Text_Div_list">Evidence based and time proven blueprint for treatment</li>
                <li id="WIACP_Text_Div_list">Protocol driven decision tree of care</li>
              </div>
            </div>
            <div id="WIACP_Image_Wrapper">
              <div id="WIACP_Image_Container">
                <img src={Img1} alt="WIACP1" style={{maxWidth:'100%'}} />
              </div>
            </div>
            <div id="WIACP_Next_Button_Div">
              <Button
                id="WIACP_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push("./welcome");
                }}>
                {" "}
                Back{" "}
              </Button>
              <Button
                id="WIACP_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie("tutorial-" + this.context.state.user_id, 8);
                  this.context.history.push("./step-by-step-recommended-care-pathway");
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
WIACP.contextType = MyContext;
export default WIACP;
