import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../helper/themeContext";

import "./SBSVideo.css";

class SBSVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="SBSVideo_Main_Div">
        <div id="SBSVideo_Content_Wrapper">
          <div id="SBSVideo_Center_Wrapper">
            <div id="SBSVideo_Text_wrapper">
              <div id="SBSVideo_Heading1_Div">
                What is Hip & Knee Step by Step
              </div>
            </div>
            <div id="SBSVideo_Image_Wrapper">
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
                  src="https://drive.google.com/uc?id=18dRIg0cCSDN7741mv-PjO-x7Kcs-mwqd"
                  type="video/mp4"
                />
              </video>
            </div>
            <div id="SBSVideo_Next_Button_Div">
              <Button
                id="SBSVideo_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push("./video2");
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
SBSVideo.contextType = MyContext;
export default SBSVideo;
