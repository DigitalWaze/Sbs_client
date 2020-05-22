import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../helper/themeContext";

import Img1 from "../../assets/VDWXR1.png";
import Img2 from "../../assets/VDWXR2.png";

import "./VDWXR.css";

class VDWXR extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="KDAA_Main_Div">
        <div id="KDAA_Content_Wrapper">
          <div id="abc">
            <div id="KDAA_Text_wrapper">
              <div id="KDAA_Heading1_Div">
                Viewing Degeneration with X-rays:
              </div>
              <div id="KDAA_Heading1_Div">
                The Medial and Lateral Compartment
              </div>
              <div id="KDAA_Text_Div">
                Different X-ray views must be taken to view all compartments of
                the knee. Regular X-rays are the best way to determine the
                extent of joint degeneration. In healthy knees, the medial and
                lateral joint spaces are filled by cartilage. The width of the
                space is important as wear and degeneration is directly related
                to joint space narrowing.
              </div>
            </div>
            <div id="KDAA_Image_Wrapper">
              <div id="KDAA_Images_Headings">
                <div id="KDAA_Image_Heading">Normal Joint Space</div>
                <div id="KDAA_Image_Heading">
                  Degenerated knee with <br />
                  little to no joint space
                </div>
              </div>
              <div id="KDAA_Image_container">
                <div id="KDAA_Inner_Image_Container">
                  <img src={Img1} alt="KDAA1" />
                </div>
                <div id="KDAA_Inner_Image_Container">
                  <img src={Img2} alt="KDAA2" />
                </div>
              </div>
            </div>
            <div id="KDAA_Next_Button_Div">
              <Button
                id="KDAA_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push("./compartments-of-the-knee");
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
VDWXR.contextType = MyContext;
export default VDWXR;
