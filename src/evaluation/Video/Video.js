import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../helper/themeContext";

import "./Video.css";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="SBSVideo_Main_Div">
        <div id="SBSVideo_Content_Wrapper">
          <div id="SBSVideo_Center_Wrapper">
            <div id="SBSVideo_Image_Wrapper">
              <div className="sbs-video-text-wrapper">
                <div id="SBSVideo_Heading1_Div">
                  Evaluating a Patient
                </div>
              </div>
              
              <video className="sbs-video-wrapper" video controls autoplay> 
                <source src="https://drive.google.com/uc?id=1L3mlyp4_we7wGV2sYiRGItPia162IBWv" type="video/mp4" />
              </video>
            </div>
            <div id="SBSVideo_Next_Button_Div">
              <Button
                id="Video_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    3
                  );
                  this.context.history.push("./Demographics");
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
Video.contextType = MyContext;
export default Video;
