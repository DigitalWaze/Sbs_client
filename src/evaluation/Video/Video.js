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
      <div id="Video_Main_Div">
        <div id="Video_Content_Wrapper">
          <div id="Video_Center_Wrapper">
            <div id="Video_Text_wrapper">
              <div id="Video_Heading1_Div">Evaluating a Patient</div>
            </div>
            <div id="Video_Image_Wrapper">
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
            <div id="Video_Next_Button_Div">
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
