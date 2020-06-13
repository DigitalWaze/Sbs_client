import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../helper/themeContext";

import Img1 from "../../assets/JSNLC1.png";
import Img2 from "../../assets/JSNLC2.png";
import Img3 from "../../assets/JSNLC3.png";
import Img4 from "../../assets/JSNLC4.png";
import Img5 from "../../assets/LOJSND2.png";

import "./JSNLC.css";

class JSNLC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickState: 0,
      orangeState: 1,
    };
  }

  clickHandle = (val) => {
    let orangestate = this.state.orangeState;
    let clickstate = this.state.clickState;
    if (val - 1 === this.state.clickState) {
      this.setState({
        orangeState: orangestate + 1,
        clickState: clickstate + 1,
      });
    }
  };
  render() {
    return (
      <div id="JSNLC_Main_Div">
        <div id="JSNLC_Content_Wrapper">
          <div id="JSNLC_Center_Wrapper">
            <div id="JSNLC_Text_wrapper">
              <div id="JSNLC_Heading1_Div">
                Joint Space Narrowing - Lateral Compartment
              </div>

              <div id="JSNLC_Text_Div">
                Starting with the knee with the least degeneration, put the
                X-rays in order of severity of degeneration seen in the lateral
                compartment
              </div>
            </div>
            <div id="JSNLC_Image_Wrapper">
              <div id="JSNLC_Grid_Container">
                <div id="JSNLC_Row_Container">
                  <div
                    id="JSNLC_box_Container"
                    onClick={() => this.clickHandle(3)}
                    style={
                      this.state.orangeState > 3
                        ? { opacity: 0.5 }
                        : { opacity: 1 }
                    }
                  >
                    <img
                      src={Img1}
                      alt="JSNLC1"
                      style={
                        this.state.orangeState === 3 ||
                        this.state.orangeState < 3
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div
                    id="JSNLC_box_Container"
                    onClick={() => this.clickHandle(1)}
                    style={
                      this.state.orangeState > 1
                        ? { opacity: 0.5 }
                        : { opacity: 1 }
                    }
                  >
                    <img
                      src={Img2}
                      alt="JSNLC1"
                      style={
                        this.state.orangeState === 1 ||
                        this.state.orangeState < 1
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div
                    id="JSNLC_box_Container"
                    onClick={() => this.clickHandle(2)}
                    style={
                      this.state.orangeState > 2
                        ? { opacity: 0.5 }
                        : { opacity: 1 }
                    }
                  >
                    <img
                      src={Img3}
                      alt="JSNLC1"
                      style={
                        this.state.orangeState === 2 ||
                        this.state.orangeState < 2
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div
                    id="JSNLC_box_Container"
                    onClick={() => this.clickHandle(4)}
                    style={
                      this.state.orangeState > 4
                        ? { opacity: 0.5 }
                        : { opacity: 1 }
                    }
                  >
                    <img
                      src={Img4}
                      alt="JSNLC1"
                      style={
                        this.state.orangeState === 4 ||
                        this.state.orangeState < 4
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                </div>
                <div id="JSNLC_Row_Container">
                  <div id="JSNLC_box_Container">
                    <div
                      style={
                        this.state.orangeState === 1
                          ? { display: "flex" }
                          : { display: "none" }
                      }
                    >
                      Click on the X-ray with Normal/Slight degeneration
                    </div>
                    <img
                      src={Img2}
                      alt="JSNLC1"
                      style={
                        this.state.orangeState > 1
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div id="JSNLC_box_Container">
                    <div
                      style={
                        this.state.orangeState === 2
                          ? { display: "flex" }
                          : { display: "none" }
                      }
                    >
                      Click on the X-ray with Moderate degeneration
                    </div>
                    <img
                      src={Img3}
                      alt="JSNLC1"
                      style={
                        this.state.orangeState > 2
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div id="JSNLC_box_Container">
                    <div
                      style={
                        this.state.orangeState === 3
                          ? { display: "flex" }
                          : { display: "none" }
                      }
                    >
                      Click on the X-ray with Near End Stage degeneration
                    </div>
                    <img
                      src={Img1}
                      alt="JSNLC1"
                      style={
                        this.state.orangeState > 3
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div id="JSNLC_box_Container">
                    <div
                      style={
                        this.state.orangeState === 4
                          ? { display: "flex" }
                          : { display: "none" }
                      }
                    >
                      Click on the X-ray with End Stage degeneration
                    </div>
                    <img
                      src={Img4}
                      alt="JSNLC1"
                      style={
                        this.state.orangeState > 4
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                </div>
              </div>
              <div id="JSNLC_Inner_Image_Container">
                <img src={Img5} alt="JSNLC1" />
              </div>
              <div id="JSNLC_Inner_Image_text">
                <div>Thickest Joint Space</div>
                <div>Decreasing Joint Space</div>
                <div>Least Joint Space</div>
              </div>
            </div>
            <div id="JSNLC_Next_Button_Div">
              <Button
                id="JSNLC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./joint-space-narrowing-medial-compartment"
                  );
                }}
              >
                {" "}
                back{" "}
              </Button>
              <Button
                id="JSNLC_Next_Button"
                variant="contained"
                disabled={this.state.clickState < 4 ? true : false}
                style={
                  this.state.clickState < 4 ? { opacity: 0.5 } : { opacity: 1 }
                }
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    25
                  );
                  this.context.history.push(
                    "./where-is-the-joint-space-for-the-kneecap-compartment"
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
JSNLC.contextType = MyContext;
export default JSNLC;
