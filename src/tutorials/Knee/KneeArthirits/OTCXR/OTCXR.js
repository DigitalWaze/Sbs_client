import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/OTCXR1.png";
import Img2 from "../../../assets/OTCXR2.png";
import Img3 from "../../../assets/OTCXR3.png";
import Img4 from "../../../assets/OTCXR4.png";

import "./OTCXR.css";

class OTCXR extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="OTCXR_Main_Div">
        <div id="OTCXR_Content_Wrapper">
          <div id="OTCXR_Center_Wrapper">
            <div id="OTCXR_Text_wrapper">
              <div id="OTCXR_Heading1_Div">Obtaining the Correct X-rays</div>
              <div id="OTCXR_Text_Div">
                Specific X-ray views are required to evaluate the level of
                narrowing and degeneration in each compartment of the knee. The
                X-ray series below is for a patient complaining of right knee
                pain.
              </div>
            </div>
            <div id="OTCXR_Image_Wrapper">
              <div id="OTCXR_Images_Container">
                <div id="OTCXR_Inner_Image_Container">
                  <div id="OTCXR_Image_heading">Standing Bilateral Flexion</div>
                  <img src={Img2} alt="OTCXR1" />
                </div>
                <div id="OTCXR_Inner_Image_Container">
                  <div id="OTCXR_Image_heading">
                    Standing Bilateral Non-Flexion
                  </div>
                  <img src={Img1} alt="OTCXR1" />
                </div>
              </div>

              <div id="OTCXR_Images_Container">
                <div id="OTCXR_Inner_Image_Container">
                  <div id="OTCXR_Image_heading">Right Kneecap View</div>
                  <img src={Img3} alt="OTCXR1" />
                </div>
                <div id="OTCXR_Inner_Image_Container">
                  <div id="OTCXR_Image_heading">Right Lateral View</div>
                  <img src={Img4} alt="OTCXR1" style={{ width: "46%" }} />
                </div>
              </div>
            </div>
            <div id="OTCXR_Next_Button_Div">
              <Button
                id="OTCXR_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push("./lateral-view");
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="OTCXR_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    16
                  );
                  this.context.history.push(
                    "./summary-of-x-ray-views-necessary-based-on-patients-symptoms"
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
OTCXR.contextType = MyContext;
export default OTCXR;
