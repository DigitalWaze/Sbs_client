import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Bone1Image from "../../../../assets/bone1_Bitmap.png";

import "./overview.css";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="Tutorials_Overview_Main_Div">
        <div id="Tutorials_Overview_Content_Wrapper">
          <div id="Tutorials_Overview_Center_Wrapper">
            <div id="Tutorials_Overview_Inner_Content_Wrapper">
              <div id="Tutorials_Overview_Text_Wrapper">
                <div>
                  <div id="Tutorials_Overview_Heading1_Div">
                    What Will You Learn in the Knee Arthritis Education Module?
                  </div>
                  <div id="Tutorials_Overview_Text_Div">
                    After completing this module, <br />
                    you will be able to:
                  </div>
                  <div id="Tutorials_Overview_Text_Div">
                    <ul>
                      <li>Identify the three compartments of the knee</li>
                      <li>
                        Understand what X-rays are needed to evaluate the level
                        of degeneration in each compartment
                      </li>
                      <li>
                        Determine the level of joint degeneration in each
                        compartment
                      </li>
                      <li>
                        Understand the basics of evaluating X-rays with matching
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="Tutorials_Overview_Image_div">
                <img
                  src={Bone1Image}
                  alt="SBS"
                  id="Tutorials_Overview_Image_Bone"
                />
              </div>
            </div>
            <div id="Tutorials_Overview_Next_Button_Div">
              <Button
                id="Tutorials_Overview_Back_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push("./welcome");
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="Tutorials_Overview_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    5
                  );
                  this.context.history.push(
                    "./knee-degeneration-and-arthritis-2"
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
Overview.contextType = MyContext;
export default Overview;
