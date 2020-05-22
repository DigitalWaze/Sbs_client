import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../helper/themeContext";

import Img1 from "../../assets/SOXRVNBOPS1.png";
import Img2 from "../../assets/SOXRVNBOPS2.png";
import Img3 from "../../assets/SOXRVNBOPS3.png";
import Img4 from "../../assets/SOXRVNBOPS4.png";
import Img5 from "../../assets/SOXRVNBOPS5.png";
import Img6 from "../../assets/SOXRVNBOPS6.png";
import tick from "../../assets/SOXRVNBOPS7.png";
import nulls from "../../assets/SOXRVNBOPS8.png";

import "./SOXRVNBOPS.css";

class SOXRVNBOPS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="SOXRVNBOPS_Main_Div">
        <div id="SOXRVNBOPS_Content_Wrapper">
          <div id="SOXRVNBOPS_Center_Wrapper">
            <div id="SOXRVNBOPS_Text_wrapper">
              <div id="SOXRVNBOPS_Heading1_Div">
                A Summary of X-ray Views Necessary <br /> Based on Patients’
                Symptoms
              </div>
            </div>
            <div id="SOXRVNBOPS_Image_Wrapper">
              <div id="SOXRVNBOPS_Table">
                <div id="SOXRVNBOPS_Table_Row">
                  <div id="SOXRVNBOPS_Table_Col_1"></div>
                  <div id="SOXRVNBOPS_Table_Col_2">
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner_rotate"
                      className="SOXRVNBOPS_Rotaed"
                    >
                      <p>
                        Standing Bilateral
                        <br />
                        Flexion
                      </p>
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner_rotate"
                      className="SOXRVNBOPS_Rotaed"
                    >
                      <p>
                        Standing Bilateral
                        <br />
                        Non-Flexion
                      </p>
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner_rotate"
                      className="SOXRVNBOPS_Rotaed"
                    >
                      <p>Right Kneecap</p>
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner_rotate"
                      className="SOXRVNBOPS_Rotaed"
                    >
                      <p>Left Kneecap</p>{" "}
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner_rotate"
                      className="SOXRVNBOPS_Rotaed"
                    >
                      <p>Right Lateral</p>
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner_rotate"
                      className="SOXRVNBOPS_Rotaed"
                    >
                      <p>Left Lateral</p>
                    </div>
                  </div>
                </div>
                <div id="SOXRVNBOPS_Table_Row">
                  <div id="SOXRVNBOPS_Table_Col_1">Right Knee Pain</div>
                  <div id="SOXRVNBOPS_Table_Col_2">
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_blueBack"
                    >
                      <img src={tick} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_blueBack"
                    >
                      <img src={tick} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_blueBack"
                    >
                      <img src={tick} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_noBack"
                    >
                      <img src={nulls} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_blueBack"
                    >
                      <img src={tick} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_noBack"
                    >
                      <img src={nulls} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                  </div>
                </div>
                <div id="SOXRVNBOPS_Table_Row">
                  <div id="SOXRVNBOPS_Table_Col_1">Left Knee Pain</div>
                  <div id="SOXRVNBOPS_Table_Col_2">
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_yellowBack"
                    >
                      <img src={tick} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_yellowBack"
                    >
                      <img src={tick} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_noBack"
                    >
                      <img src={nulls} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_yellowBack"
                    >
                      <img src={tick} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_noBack"
                    >
                      <img src={nulls} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_yellowBack"
                    >
                      <img src={tick} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                  </div>
                </div>
                <div id="SOXRVNBOPS_Table_Row">
                  <div id="SOXRVNBOPS_Table_Col_1">Pain in Both Knees</div>
                  <div id="SOXRVNBOPS_Table_Col_2">
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_Green_Back"
                    >
                      <img src={tick} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_Green_Back"
                    >
                      <img src={tick} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_Green_Back"
                    >
                      <img src={tick} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_Green_Back"
                    >
                      <img src={tick} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_Green_Back"
                    >
                      <img src={tick} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                    <div
                      id="SOXRVNBOPS_Table_Col_2_inner"
                      className="SOXRVNBOPS_Green_Back"
                    >
                      <img src={tick} alt="tick" id="SOXRVNBOPS_tick" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="SOXRVNBOPS_Next_Button_Div">
              <Button
                id="SOXRVNBOPS_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./summary-of-x-ray-views-necessary-based-on-patients-symptoms"
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
SOXRVNBOPS.contextType = MyContext;
export default SOXRVNBOPS;
