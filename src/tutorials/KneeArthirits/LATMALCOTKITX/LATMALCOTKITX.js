import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../helper/themeContext";

import Img1 from "../../assets/LATMALCOTKITX1.png";
import Img2 from "../../assets/LATMALCOTKITX2.png";
import Img3 from "../../assets/LATMALCOTKITX3.png";
import Img4 from "../../assets/LATMALCOTKITX4.png";
import Img5 from "../../assets/LATMALCOTKITX5.png";

import "./LATMALCOTKITX.css";

class LATMALCOTKITX extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kneeState: 0,
    };
  }

  handleClick = (num) => {
    let c = this.state.kneeState;
    if (this.state.kneeState === num - 1) {
      c = c + 1;
      this.setState({ kneeState: c });
    }
  };

  render() {
    let imageSource;
    this.state.kneeState === 0
      ? (imageSource = Img1)
      : this.state.kneeState === 1
      ? (imageSource = Img2)
      : this.state.kneeState === 2
      ? (imageSource = Img3)
      : this.state.kneeState === 3
      ? (imageSource = Img4)
      : (imageSource = Img5);
    return (
      <div id="LATMALCOTKITX_Main_Div">
        <div id="LATMALCOTKITX_Content_Wrapper">
          <div id="LATMALCOTKITX_Center_Wrapper">
            <div id="LATMALCOTKITX_Text_wrapper">
              <div id="LATMALCOTKITX_Heading1_Div">
                Learn about the Medial and Lateral Compartments of the Knee in
                the X-rays
              </div>
              <div id="LATMALCOTKITX_Text_Div">
                Click on the compartment name that matches the highlighted
                compartment.
              </div>
            </div>
            <div id="LATMALCOTKITX_Buttons_wrapper">
              <div id="LATMALCOTKITX_Pair_Buttons_wrapper">
                <Button
                  id="LATMALCOTKITX_Button"
                  variant="contained"
                  onClick={() => this.handleClick(2)}
                  style={
                    this.state.kneeState === 2 || this.state.kneeState > 2
                      ? { display: "none" }
                      : null
                  }
                >
                  Right Medial
                </Button>
                <Button
                  id="LATMALCOTKITX_Button"
                  variant="contained"
                  onClick={() => this.handleClick(1)}
                  style={
                    this.state.kneeState === 1 || this.state.kneeState > 1
                      ? { display: "none" }
                      : null
                  }
                >
                  Right Lateral
                </Button>
              </div>
              <div id="LATMALCOTKITX_Pair_Buttons_wrapper">
                <Button
                  id="LATMALCOTKITX_Button"
                  variant="contained"
                  onClick={() => this.handleClick(3)}
                  style={
                    this.state.kneeState === 3 || this.state.kneeState > 3
                      ? { display: "none" }
                      : null
                  }
                >
                  Left Medial
                </Button>
                <Button
                  id="LATMALCOTKITX_Button"
                  variant="contained"
                  onClick={() => this.handleClick(4)}
                  style={
                    this.state.kneeState === 4 || this.state.kneeState > 4
                      ? { display: "none" }
                      : null
                  }
                >
                  Left Lateral
                </Button>
              </div>
            </div>
            <div id="LATMALCOTKITX_Image_Wrapper">
              <div id="LATMALCOTKITX_Image_Container">
                <img src={imageSource} alt="LATMALCOTKITX" />
              </div>
            </div>
            <div
              id="LATMALCOTKITX_Next_Button_Div"
              // style={
              //   this.state.kneeState === 4 ? { opacity: 1 } : { opacity: 0.5 }
              // }
            >
              <Button
                id="LATMALCOTKITX_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./viewing-degeneration-with-x-rays-copy"
                  );
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="LATMALCOTKITX_Next_Button"
                variant="contained"
                disabled={this.state.kneeState === 4 ? false : true}
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    10
                  );
                  this.context.history.push(
                    "./viewing-degeneration-with-x-rays-the-kneecap-compartment"
                  );
                }}
                style={
                  this.state.kneeState === 4 ? { opacity: 1 } : { opacity: 0.5 }
                }
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
LATMALCOTKITX.contextType = MyContext;
export default LATMALCOTKITX;
