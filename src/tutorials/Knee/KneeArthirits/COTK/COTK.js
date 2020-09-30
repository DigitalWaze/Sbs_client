import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/COTK1.JPG";

import "./COTK.css";

class COTK extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="COTK_Main_Div">
        <div id="COTK_Content_Wrapper">
          <div id="COTK_Center_Wrapper">
            <div id="COTK_Text_wrapper">
              <div id="COTK_Heading1_Div">Compartments of the Knee</div>
              <div id="COTK_Text_Div">
                The knee joint is divided into three compartments: Medial
                (inside), Lateral (outside) and Kneecap. The medial and lateral
                compartments are the main weight bearing areas between the femur
                and the tibia. The kneecap compartment is where the kneecap rubs
                on the femur.
              </div>
            </div>
            <div id="COTK_Image_Wrapper">
              <div id="COTK_Image_Container">
                <img src={Img1} alt="COTK1" />
              </div>
            </div>
            <div id="COTK_Next_Button_Div">
              <Button
                id="COTK_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./knee-degeneration-and-arthritis"
                  );
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="COTK_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    8
                  );
                  this.context.history.push(
                    "./viewing-degeneration-with-x-rays-copy"
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
COTK.contextType = MyContext;
export default COTK;
