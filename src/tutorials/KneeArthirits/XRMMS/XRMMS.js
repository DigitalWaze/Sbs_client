import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../helper/themeContext";

import "./XRMMS.css";

class XRMMS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="XRMMS_Main_Div">
        <div id="XRMMS_Content_Wrapper">
          <div id="XRMMS_Center_Wrapper">
            <div id="XRMMS_Next_Button_Div">
              <Button
                id="XRMMS_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./x-ray-matching-and-levels-of-degeneration"
                  );
                }}
              >
                {" "}
                back{" "}
              </Button>
              <Button
                id="XRMMS_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    31
                  );
                  this.context.history.push("./congrats");
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
XRMMS.contextType = MyContext;
export default XRMMS;
