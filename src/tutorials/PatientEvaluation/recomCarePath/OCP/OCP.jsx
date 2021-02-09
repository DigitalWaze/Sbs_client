import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/OCP.png";

import "./OCP.css";

class OCP extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="OCP_Main_Div">
        <div id="OCP_Content_Wrapper">
          <div id="OCP_Center_Wrapper">
            <div id="OCP_Text_wrapper">
              <div id="OCP_Heading1_Div">Overall Care Pathway</div>
              <div id="OCP_Text_Div">
                The overall Care Pathway includes both surgical and non-surgical paths for a patient
              </div>
            </div>
            <div id="OCP_Image_Wrapper">
              <div id="OCP_Image_Container">
                <img src={Img1} alt="OCP1" style={{maxWidth:'100%'}}/>
              </div>
            </div>
            <div id="OCP_Next_Button_Div">
              <Button
                id="OCP_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push("./step-by-step-recommended-care-pathway");
                }}>
                {" "}
                Back{" "}
              </Button>
              <Button
                id="OCP_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie("tutorial-" + this.context.state.user_id, 8);
                  this.context.history.push("./non-operative-pathway");
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
OCP.contextType = MyContext;
export default OCP;
