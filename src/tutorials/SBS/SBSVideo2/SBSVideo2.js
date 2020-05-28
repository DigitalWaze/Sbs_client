import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../helper/themeContext";

import "./SBSVideo2.css";

class SBSVideo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="SBSVideo2_Main_Div">
        <div id="SBSVideo2_Content_Wrapper">
          <div id="SBSVideo2_Center_Wrapper">
            <div id="SBSVideo2_Text_wrapper">
              <div id="SBSVideo2_Heading1_Div">Evaluating a Patient</div>
            </div>
            <div id="SBSVideo2_Image_Wrapper">
              <video
                video
                controls
                autoplay
                style={{
                  width: "100%",
                  height: "auto",
                }}
              >
                <source
                  src="https://drive.google.com/uc?id=1L3mlyp4_we7wGV2sYiRGItPia162IBWv"
                  type="video/mp4"
                />
              </video>
            </div>
            <div id="SBSVideo2_Next_Button_Div">
              <Button
                id="SBSVideo2_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    3
                  );
                  this.context.history.push(
                    "/tutorials/knee-Arthiritis/welcome"
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
SBSVideo2.contextType = MyContext;
export default SBSVideo2;
