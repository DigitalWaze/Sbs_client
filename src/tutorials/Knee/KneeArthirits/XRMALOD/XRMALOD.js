import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/XRMALOD1.png";
import Img2 from "../../../assets/LOJSND2.png";

import "./XRMALOD.css";

class XRMALOD extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="XRMALOD_Main_Div">
        <div id="XRMALOD_Content_Wrapper">
          <div id="XRMALOD_Center_Wrapper">
            <div id="XRMALOD_Text_wrapper">
              <div id="XRMALOD_Heading1_Div">
                X-ray Matching and Levels of Degeneration
              </div>
              <div id="XRMALOD_Text_Div">
                Below is Step by Step database of comparison X-rays you will use
                to match X-rays for a patient. Observe how the joint space
                changes between the levels of degeneration.
              </div>
            </div>
            <div id="XRMALOD_Image_Wrapper">
              <div id="XRMALOD_Inner_Image_Container">
                <img src={Img1} alt="XRMALOD1" style={{ width: "70%" }} />
              </div>
              <div id="XRMALOD_Inner_Image_Container">
                <img src={Img2} alt="XRMALOD1" />
              </div>
              <div id="XRMALOD_Inner_Text_Container">
                Examples of decreasing joint space in all compartments
              </div>
            </div>
            <div id="XRMALOD_Next_Button_Div">
              <Button
                id="XRMALOD_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./x-ray-matching-a-tool-to-determine-levels-of-degeneration"
                  );
                }}
              >
                {" "}
                back{" "}
              </Button>
              <Button
                id="XRMALOD_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    30
                  );
                  this.context.history.push(
                    "./x-ray-matching-moderate-selected"
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
XRMALOD.contextType = MyContext;
export default XRMALOD;
