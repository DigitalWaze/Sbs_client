import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../helper/themeContext";

import Img1 from "../../assets/XRMALOD1.png";
import Img2 from "../../assets/LOJSND2.png";

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
                Levels of Joint Space Narrowing = Degeneration
              </div>

              <div id="XRMALOD_Text_Div">
                Degeneration is not all or nothing. There are progressive levels
                of wear: normal/slight, moderate, near end stage and end stage.
                For a complete evaluation, examine the narrowing of all three
                compartments of the knee and evaluate the level of degeneration
                in each independently. Be aware that each compartment may have a
                different level of degeneration.
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
                Example of decreasing joint space in the medial compartment
              </div>
            </div>
            <div id="XRMALOD_Next_Button_Div">
              <Button
                id="XRMALOD_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push("./congrats");
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
