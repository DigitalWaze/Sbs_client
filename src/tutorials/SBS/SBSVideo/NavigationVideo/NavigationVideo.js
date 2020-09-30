import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

// import "./SBSVideo.css";

class NavigationVideo extends Component {
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
                 Navigation Video
                </div>
              </div>
              <video video controls autoplay className="sbs-video-wrapper">
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
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    2
                  );
                  this.context.history.push(
                    "/home"
                  );
                }}
              >
                {" "}
                Back to Home{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
NavigationVideo.contextType = MyContext;
export default NavigationVideo;
