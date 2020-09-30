import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/WDTJSSAEFTMALC2_1.png";

import "./WDTJSSAEFTMALC2.css";

class WDTJSSAEFTMALC2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="WDTJSSAEFTMALC2_Main_Div">
        <div id="WDTJSSAEFTMALC2_Content_Wrapper">
          <div id="WDTJSSAEFTMALC2_Center_Wrapper">
            <div id="WDTJSSAEFTMALC2_Text_wrapper">
              <div id="WDTJSSAEFTMALC2_Heading1_Div">
                Where does the Joint Space Start and End
              </div>
              <div id="WDTJSSAEFTMALC2_Heading1_Div">
                for the Medial and Lateral Compartments?
              </div>
              <div id="WDTJSSAEFTMALC2_Text_Div">
                Since the bone in this area is more sclerotic (dense and rigid),
                the subchondral line appears as an area of whiter bone than the
                surrounding area. The joint space of the medial and lateral
                compartment is the area between the subchondral bone of the
                tibia and subchondral bone of the femur. Always judge the amount
                of joint space by the most narrowed portion of this gap.
              </div>
            </div>
            <div id="WDTJSSAEFTMALC2_Image_Wrapper">
              <div id="WDTJSSAEFTMALC2_Inner_Image_Container">
                <img src={Img1} alt="WDTJSSAEFTMALC21" />
              </div>
            </div>
            <div id="WDTJSSAEFTMALC2_Next_Button_Div">
              <Button
                id="WDTJSSAEFTMALC2_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments"
                  );
                }}
              >
                {" "}
                back{" "}
              </Button>
              <Button
                id="WDTJSSAEFTMALC2_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    22
                  );
                  this.context.history.push(
                    "./levels-of-joint-space-narrowing-degeneration"
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
WDTJSSAEFTMALC2.contextType = MyContext;
export default WDTJSSAEFTMALC2;
