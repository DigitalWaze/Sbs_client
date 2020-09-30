import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/KDAA2_1.png";
import Img2 from "../../../assets/KDAA2_2.png";

import "./KDAA2.css";

class KDAA2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="KDAA2_Main_Div">
        <div id="KDAA2_Content_Wrapper">
          <div id="KDAA2_Center_Wrapper">
            <div id="KDAA2_Text_wrapper">
              <div id="KDAA2_Heading1_Div">Knee Degeneration and Arthritis</div>
              <div id="KDAA2_Text_Div">
                Healthy knees have cartilage and menisci that act as shock
                absorbers and permit the knee to move smoothly and without pain.
                Like tread on a tire, cartilage in the knee can wear causing
                bone to rub on bone.
              </div>
            </div>
            <div id="KDAA2_Image_Wrapper">
              <div id="KDAA2_Image_Heading">Healthy Knee</div>
              <div id="KDAA2_Image_container">
                <div id="KDAA2_Inner_Image_Container">
                  <img src={Img1} alt="KDAA21" />
                </div>
                <div id="KDAA2_Inner_Image_Container">
                  <img src={Img2} alt="KDAA22" />
                </div>
              </div>
            </div>
            <div id="KDAA2_Next_Button_Div">
              <Button
                id="KDAA2_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push("./overview");
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="KDAA2_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    6
                  );
                  this.context.history.push(
                    "./knee-degeneration-and-arthritis"
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
KDAA2.contextType = MyContext;
export default KDAA2;
