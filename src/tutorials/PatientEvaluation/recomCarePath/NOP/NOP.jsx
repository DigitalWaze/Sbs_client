import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/NOP.png";

import "./NOP.css";

class NOP extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="NOP_Main_Div">
        <div id="NOP_Content_Wrapper">
          <div id="NOP_Center_Wrapper">
            <div id="NOP_Text_wrapper">
              <div id="NOP_Heading1_Div">Non-Operative Pathway</div>
              <div id="NOP_Text_Div">
                The non-operative pathway provides treatment options that do not require surgery.
              </div>
            </div>
            <div id="NOP_Image_Wrapper">
              <div id="NOP_Image_Container">
                <img src={Img1} alt="NOP1" style={{maxWidth:'100%'}}/>
              </div>
            </div>
            <div id="NOP_Next_Button_Div">
              <Button
                id="NOP_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push("./overall-care-pathway");
                }}>
                {" "}
                Back{" "}
              </Button>
              <Button
                id="NOP_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie("tutorial-" + this.context.state.user_id, 8);
                  this.context.history.push("./operative-pathway");
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
NOP.contextType = MyContext;
export default NOP;
