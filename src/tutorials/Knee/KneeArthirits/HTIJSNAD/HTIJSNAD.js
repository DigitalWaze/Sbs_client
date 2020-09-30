import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/HTIJSNAD1.png";
import Img2 from "../../../assets/HTIJSNAD2.png";

import "./HTIJSNAD.css";

class HTIJSNAD extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="HTIJSNAD_Main_Div">
        <div id="HTIJSNAD_Content_Wrapper">
          <div id="HTIJSNAD_Center_Wrapper">
            <div id="HTIJSNAD_Text_wrapper">
              <div id="HTIJSNAD_Heading1_Div">How to Identify Joint Space</div>
              <div id="HTIJSNAD_Heading1_Div">Narrowing and Degeneration</div>
              <div id="HTIJSNAD_Text_Div">
                When reviewing X-rays of a specific compartment, note the space
                between the bone surfaces. Healthy knees have wide joint spaces
                which are filled with cartilage. Degenerated knees have a
                narrowed space of various degrees and eventually no space at
                all. In cases of end stage arthritis, X-rays depict bone
                contacting bone.
              </div>
            </div>
            <div id="HTIJSNAD_Image_Wrapper">
              <div id="HTIJSNAD_Inner_text">
                Comparing Two Medial Compartments
              </div>
              <div id="HTIJSNAD_Image_Pair_Wrapper">
                <div id="HTIJSNAD_Inner_Wrapper">
                  <div id="HTIJSNAD_Inner_Image_Container">
                    <img src={Img1} alt="HTIJSNAD1" />
                  </div>
                  <div id="HTIJSNAD_Inner_text">Minimal Wear</div>
                </div>
                <div id="HTIJSNAD_Inner_Wrapper">
                  <div id="HTIJSNAD_Inner_Image_Container">
                    <img src={Img2} alt="HTIJSNAD2" />
                  </div>
                  <div id="HTIJSNAD_Inner_text">
                    Showing End Stage Arthritis
                  </div>
                </div>
              </div>
            </div>
            <div id="HTIJSNAD_Next_Button_Div">
              <Button
                id="HTIJSNAD_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./evaluating-knee-degeneration-with-x-rays"
                  );
                }}
              >
                {" "}
                back{" "}
              </Button>
              <Button
                id="HTIJSNAD_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    20
                  );
                  this.context.history.push(
                    "./where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments"
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
HTIJSNAD.contextType = MyContext;
export default HTIJSNAD;
