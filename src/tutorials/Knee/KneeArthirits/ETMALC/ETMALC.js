import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/ETMALC1.png";
import Img2 from "../../../assets/ETMALC2.png";

import "./ETMALC.css";

class ETMALC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="ETMALC_Main_Div">
        <div id="ETMALC_Content_Wrapper">
          <div id="ETMALC_Center_Wrapper">
            <div id="ETMALC_Text_wrapper">
              <div id="ETMALC_Heading1_Div">
                Evaluating the Medial and Lateral Compartments
              </div>
              <div id="ETMALC_Text_Div">
                Both standing bilateral (meaning both knees) PA
                (Posterior-Anterior) flexion and standing bilateral PA
                non-flexion views are required. Flexion X-rays are taken with
                the knees slightly bent and non-flexion X-rays are taken with
                the knees fully extended.
              </div>
            </div>
            <div id="ETMALC_Image_Wrapper">
              <div id="ETMALC_Images_Headings">
                <div id="ETMALC_Image_Heading">
                  Standing Bilateral PA Flexion
                </div>
                <div id="ETMALC_Image_Heading">
                  Standing Bilateral PA Non-Flexion
                </div>
              </div>
              <div id="ETMALC_Image_container">
                <div id="ETMALC_Inner_Image_Container">
                  <img src={Img1} alt="ETMALC1" />
                </div>
                <div id="ETMALC_Inner_Image_Container">
                  <img src={Img2} alt="ETMALC2" />
                </div>
              </div>
            </div>
            <div id="ETMALC_Next_Button_Div">
              <Button
                id="ETMALC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push("./compartments-of-the-knee-2");
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="ETMALC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    13
                  );
                  this.context.history.push(
                    "./evaluating-the-kneecap-compartment"
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
ETMALC.contextType = MyContext;
export default ETMALC;
