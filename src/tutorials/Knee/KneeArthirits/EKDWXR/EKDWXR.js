import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/EKDWXR1.png";
import Img2 from "../../../assets/EKDWXR2.png";
import Img3 from "../../../assets/EKDWXR3.png";

import "./EKDWXR.css";

class EKDWXR extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="EKDWXR_Main_Div">
        <div id="EKDWXR_Content_Wrapper">
          <div id="EKDWXR_Center_Wrapper">
            <div id="EKDWXR_Text_wrapper">
              <div id="EKDWXR_Heading1_Div">
                Evaluating Knee Degeneration with X-rays
              </div>
              <div id="EKDWXR_Text_Div">
                Knees without degeneration have thick and even spaces between
                the bone surfaces. Knees with advanced degeneration have no
                space at all. As you progress through this education module, you
                will learn to classify the degree of narrowing – and therefore
                the degree of degeneration – using comparison X-rays for each
                knee compartment.
              </div>
            </div>
            <div id="EKDWXR_Image_Wrapper">
              <div id="EKDWXR_Inner_Wrapper">
                <div id="EKDWXR_Inner_text">Normal Joint Spaces</div>
                <div id="EKDWXR_Inner_Image_Container">
                  <img style={{ width: "60%" }} src={Img1} alt="EKDWXR1" />
                </div>
                <div id="EKDWXR_Inner_text">
                  No degeneration in the medial and lateral compartment
                </div>
              </div>
              <div id="EKDWXR_Inner_Wrapper">
                <div id="EKDWXR_Inner_text">
                  Little to No Joint Space Remaining
                </div>
                <div id="EKDWXR_Inner_Wrapper_2">
                  <div>
                    <div id="EKDWXR_Inner_Image_Container">
                      <img style={{ width: "60%" }} src={Img2} alt="EKDWXR2" />
                    </div>
                    <div id="EKDWXR_Inner_text">Degeneration Lateral</div>
                  </div>
                  <div>
                    <div id="EKDWXR_Inner_Image_Container">
                      <img style={{ width: "60%" }} src={Img3} alt="EKDWXR2" />
                    </div>
                    <div id="EKDWXR_Inner_text">Degeneration Medial</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="EKDWXR_Next_Button_Div">
              <Button
                id="EKDWXR_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push("./what-x-rays-would-you-request");
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="EKDWXR_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    19
                  );
                  this.context.history.push(
                    "./how-to-identify-joint-space-narrowing-and-degeneration"
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
EKDWXR.contextType = MyContext;
export default EKDWXR;
