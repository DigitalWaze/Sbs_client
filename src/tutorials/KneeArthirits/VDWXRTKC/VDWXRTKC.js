import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../helper/themeContext";

import Img1 from "../../assets/VDWXRTKC1.png";
import Img2 from "../../assets/VDWXRTKC2.png";

import "./VDWXRTKC.css";

class VDWXRTKC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="VDWXRTKC_Main_Div">
        <div id="VDWXRTKC_Content_Wrapper">
          <div id="VDWXRTKC_Center_Wrapper">
            <div id="VDWXRTKC_Text_wrapper">
              <div id="VDWXRTKC_Heading1_Div">
                Viewing Degeneration with X-rays:
              </div>
              <div id="VDWXRTKC_Heading1_Div">The Kneecap Compartment</div>
              <div id="VDWXRTKC_Text_Div">
                Different X-ray views must be taken to view all compartments of
                the knee. Regular X-rays are the best way to determine the
                extent of joint degeneration. In healthy knees, the medial and
                lateral joint spaces are filled by cartilage. The width of the
                space is important as wear and degeneration is directly related
                to joint space narrowing.
              </div>
            </div>
            <div id="VDWXRTKC_Image_Wrapper">
              <div id="VDWXRTKC_Images_Headings">
                <div id="VDWXRTKC_Image_Heading">Healthy Kneecap</div>
                <div id="VDWXRTKC_Image_Heading">Degenerated Kneecap</div>
              </div>
              <div id="VDWXRTKC_Image_container">
                <div id="VDWXRTKC_Inner_Image_Container">
                  <img src={Img1} alt="VDWXRTKC1" />
                </div>
                <div id="VDWXRTKC_Inner_Image_Container">
                  <img src={Img2} alt="VDWXRTKC2" />
                </div>
              </div>
            </div>
            <div id="VDWXRTKC_Next_Button_Div">
              <Button
                id="VDWXRTKC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push("./compartments-of-the-knee-2");
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
VDWXRTKC.contextType = MyContext;
export default VDWXRTKC;
