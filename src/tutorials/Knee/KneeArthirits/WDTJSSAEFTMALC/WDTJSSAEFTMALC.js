import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/WDTJSSAEFTMALC1.png";

import "./WDTJSSAEFTMALC.css";

class WDTJSSAEFTMALC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="WDTJSSAEFTMALC_Main_Div">
        <div id="WDTJSSAEFTMALC_Content_Wrapper">
          <div id="WDTJSSAEFTMALC_Center_Wrapper">
            <div id="WDTJSSAEFTMALC_Text_wrapper">
              <div id="WDTJSSAEFTMALC_Heading1_Div">
                Where does the Joint Space Start and End
              </div>
              <div id="WDTJSSAEFTMALC_Heading1_Div">
                for the Medial and Lateral Compartments?
              </div>
              <div id="WDTJSSAEFTMALC_Text_Div">
                Since X-rays show a shadow of a three-dimensional object, it is
                important to know where the bone surfaces are. Step by Step uses
                the subchondral line as the key reference when analyzing joint
                space. The subchondral line is where bone and cartilage meet.
              </div>
            </div>
            <div id="WDTJSSAEFTMALC_Image_Wrapper">
              <div id="WDTJSSAEFTMALC_Inner_Image_Container">
                <img src={Img1} alt="WDTJSSAEFTMALC1" />
              </div>
            </div>
            <div id="WDTJSSAEFTMALC_Next_Button_Div">
              <Button
                id="WDTJSSAEFTMALC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./how-to-identify-joint-space-narrowing-and-degeneration"
                  );
                }}
              >
                {" "}
                back{" "}
              </Button>
              <Button
                id="WDTJSSAEFTMALC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    21
                  );
                  this.context.history.push(
                    "./where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments-2"
                  );
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
WDTJSSAEFTMALC.contextType = MyContext;
export default WDTJSSAEFTMALC;
