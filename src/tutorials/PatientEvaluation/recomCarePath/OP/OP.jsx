import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/OP.png";

import "./OP.css";

class OP extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="OP_Main_Div">
        <div id="OP_Content_Wrapper">
          <div id="OP_Center_Wrapper">
            <div id="OP_Text_wrapper">
              <div id="OP_Heading1_Div">Operative Pathway</div>
              <div id="OP_Text_Div">
                The operative pathway shows the possible options for a patient that chooses to have surgery now or in
                the future.
              </div>
            </div>
            <div id="OP_Image_Wrapper">
              <div id="OP_Image_Container">
                <img style={{ maxWidth: "85%" }} src={Img1} alt="OP1" />
              </div>
            </div>
            <div id="OP_Next_Button_Div">
              <Button
                id="OP_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push("./non-operative-pathway");
                }}>
                {" "}
                Back{" "}
              </Button>
              <Button
                id="OP_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie("tutorial-" + this.context.state.user_id, 8);
                  this.context.history.push("./bone-and-joint-health-and-surgery-prep-program");
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
OP.contextType = MyContext;
export default OP;
