import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import "../../../SBS/SBSVideo/SBSVideo.css";

class MatchingVideo extends Component {
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
                  The Step by Step Patient Report Card
                </div>
              </div>
              <video
                video
                controls
                autoplay
                className="sbs-video-wrapper"
              >
                <source
                  src="https://drive.google.com/uc?id=1gaJD8E2vOSdA3lUKagPjb0gIFVd4UpiU"
                  type="video/mp4"
                />
              </video>
            </div>
            <div id="SBSVideo_Next_Button_Div">
              <Button
                id="SBSVideo_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie("tutorial-" + this.context.state.user_id,37);
                  this.context.history.push("./report");
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
MatchingVideo.contextType = MyContext;
export default MatchingVideo;
