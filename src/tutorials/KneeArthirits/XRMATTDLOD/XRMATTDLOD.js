import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../helper/themeContext";

import Img1 from "../../assets/XRMATTDLOD1.png";
import "./XRMATTDLOD.css";

class XRMATTDLOD extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="XRMATTDLOD_Main_Div">
        <div id="XRMATTDLOD_Content_Wrapper">
          <div id="XRMATTDLOD_Center_Wrapper">
            <div id="XRMATTDLOD_Text_wrapper">
              <div id="XRMATTDLOD_Heading1_Div">
                X-ray Matching: A Tool to Determine
              </div>
              <div id="XRMATTDLOD_Heading1_Div">Levels of Degeneration</div>
              <div id="XRMATTDLOD_Text_Div">
                Step by Step provides a database of comparison X-rays typical of
                every level of degeneration for each compartment. X-ray matching
                is the process of comparing the database X-rays to the X-rays of
                a patient. By selecting the database X-ray that most closely
                matches the joint spacing seen in the patient X-ray, you can
                determine the level of degeneration in the patient X-ray.
              </div>
            </div>
            <div id="XRMATTDLOD_Image_Wrapper">
              <div id="XRMATTDLOD_Image_Container">
                <img src={Img1} alt="XRMATTDLOD" />
              </div>
              <div id="XRMATTDLOD_Inner_Text_Container">
                Example of decreasing joint space in the medial compartment
              </div>
            </div>
            <div id="XRMATTDLOD_Next_Button_Div">
              <Button
                id="XRMATTDLOD_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.goBack();
                }}
              >
                {" "}
                back{" "}
              </Button>
              <Button
                id="XRMATTDLOD_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./x-ray-matching-and-levels-of-degeneration"
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
XRMATTDLOD.contextType = MyContext;
export default XRMATTDLOD;
