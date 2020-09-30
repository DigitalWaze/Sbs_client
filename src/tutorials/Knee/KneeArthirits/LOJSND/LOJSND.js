import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/LOJSND1.png";
import Img2 from "../../../assets/LOJSND2.png";

import "./LOJSND.css";

class LOJSND extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="LOJSND_Main_Div">
        <div id="LOJSND_Content_Wrapper">
          <div id="LOJSND_Center_Wrapper">
            <div id="LOJSND_Text_wrapper">
              <div id="LOJSND_Heading1_Div">
                Levels of Joint Space Narrowing = Degeneration
              </div>

              <div id="LOJSND_Text_Div">
                Degeneration is not all or nothing. There are progressive levels
                of wear: normal/slight, moderate, near end stage and end stage.
                For a complete evaluation, examine the narrowing of all three
                compartments of the knee and evaluate the level of degeneration
                in each independently. Be aware that each compartment may have a
                different level of degeneration.
              </div>
            </div>
            <div id="LOJSND_Image_Wrapper">
              <div id="LOJSND_Inner_Image_Container">
                <div id="LOJSND_Inner_Image_text">
                  <div>Normal to Slight</div>
                  <div>Moderate</div>
                  <div>Near End Stage</div>
                  <div>End Stage</div>
                </div>
                <img src={Img1} alt="LOJSND1" />
              </div>
              <div id="LOJSND_Inner_Image_Container">
                <img src={Img2} alt="LOJSND1" />
              </div>
              <div id="LOJSND_Inner_Text_Container">
                Example of decreasing joint space in the medial compartment
              </div>
            </div>
            <div id="LOJSND_Next_Button_Div">
              <Button
                id="LOJSND_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments-2"
                  );
                }}
              >
                {" "}
                back{" "}
              </Button>
              <Button
                id="LOJSND_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    23
                  );
                  this.context.history.push(
                    "./joint-space-narrowing-medial-compartment"
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
LOJSND.contextType = MyContext;
export default LOJSND;
