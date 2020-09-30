import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/WITJSFTKC1.png";
import Img2 from "../../../assets/WITJSFTKC2.png";
import "./WITJSFTKC.css";

class WITJSFTKC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="WITJSFTKC_Main_Div">
        <div id="WITJSFTKC_Content_Wrapper">
          <div id="WITJSFTKC_Center_Wrapper">
            <div id="WITJSFTKC_Text_wrapper">
              <div id="WITJSFTKC_Heading1_Div">
                Where is the Joint Space for the
              </div>
              <div id="WITJSFTKC_Heading1_Div">Kneecap Compartment?</div>
              <div id="WITJSFTKC_Text_Div">
                By following the subchondral bone around the articulating
                surface of the kneecap, key areas of joint space narrowing can
                be determined.
              </div>
            </div>
            <div id="WITJSFTKC_Image_Wrapper">
              <div id="WITJSFTKC_Image_Container">
                <img src={Img1} alt="WITJSFTKC" />
              </div>
              <div id="WITJSFTKC_Image_Container">
                <img src={Img2} alt="WITJSFTKC" />
              </div>
            </div>
            <div id="WITJSFTKC_Next_Button_Div">
              <Button
                id="WITJSFTKC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./joint-space-narrowing-lateral-compartment"
                  );
                }}
              >
                {" "}
                back{" "}
              </Button>
              <Button
                id="WITJSFTKC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    26
                  );
                  this.context.history.push(
                    "./you-must-look-at-the-joint-space-on-both-sides-of-the-kneecap"
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
WITJSFTKC.contextType = MyContext;
export default WITJSFTKC;
