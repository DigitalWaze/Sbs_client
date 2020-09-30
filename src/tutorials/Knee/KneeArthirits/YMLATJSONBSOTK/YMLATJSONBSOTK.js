import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/YMLATJSONBSOTK1.png";
import Img2 from "../../../assets/YMLATJSONBSOTK2.png";
import Img3 from "../../../assets/YMLATJSONBSOTK3.png";
import "./YMLATJSONBSOTK.css";

class YMLATJSONBSOTK extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="YMLATJSONBSOTK_Main_Div">
        <div id="YMLATJSONBSOTK_Content_Wrapper">
          <div id="YMLATJSONBSOTK_Center_Wrapper">
            <div id="YMLATJSONBSOTK_Text_wrapper">
              <div id="YMLATJSONBSOTK_Heading1_Div">
                You Must Look at the Joint Space
              </div>
              <div id="YMLATJSONBSOTK_Heading1_Div">
                on Both Sides of the Kneecap
              </div>
              <div id="YMLATJSONBSOTK_Text_Div">
                Unlike the medial & lateral compartments, the inside & outside
                space between the kneecap and femur is a single compartment.
                Decreases in joint space on either side of the kneecap determine
                the level of degeneration in this compartment. Two of the right
                kneecap views below have end stage degeneration even though the
                narrowing occurs on different sides of the kneecap.
              </div>
            </div>
            <div id="YMLATJSONBSOTK_Image_Wrapper">
              <div id="YMLATJSONBSOTK_Image_Container">
                <img src={Img1} alt="YMLATJSONBSOTK" />
              </div>
              <div id="YMLATJSONBSOTK_Image_Container">
                <img src={Img2} alt="YMLATJSONBSOTK" />
              </div>
              <div id="YMLATJSONBSOTK_Image_Container">
                <img src={Img3} alt="YMLATJSONBSOTK" />
              </div>
            </div>
            <div id="YMLATJSONBSOTK_Next_Button_Div">
              <Button
                id="YMLATJSONBSOTK_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./where-is-the-joint-space-for-the-kneecap-compartment"
                  );
                }}
              >
                {" "}
                back{" "}
              </Button>
              <Button
                id="YMLATJSONBSOTK_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    27
                  );
                  this.context.history.push(
                    "./joint-space-narrowing-kneecap-compartment"
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
YMLATJSONBSOTK.contextType = MyContext;
export default YMLATJSONBSOTK;
