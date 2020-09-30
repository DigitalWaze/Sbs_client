import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Bone1Image from "../assets/bone1_Bitmap.png";

import SemipolarLoading from 'react-loadingg/lib/SemipolarLoading';

import "./home.css";

import MyContext from "../helper/themeContext";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {loading:true};
  }


  render() {
    return (

      
      <div id="Home_Main_Div">
        <div id="Home_Content1_Wrapper">
          <div id="Home_Heading1_Div">
            Hip &{" "}
            <span style={{ color: "#b4ec51", fontWeight: "bold" }}> Knee </span>{" "}
            <br />
            Step by Step
            <div id="Home_Neon_Line"></div>
          </div>

          <div className="Home_Button_Div">
            <Button
              id="Home_Button"
              variant="contained"
              onClick={() => {
                this.context.history.push("./tutorials/sbs/welcome");
              }}
            >
              {" "}
              What is Step by Step?{" "}
            </Button>
          </div>

          <div className="Home_Button_Div">
            <Button
              id="Home_Button"
              variant="contained"
              onClick={() => {
                this.context.history.push(
                  "/tutorials/knee-Arthiritis/welcome"
                );
              }}
            >
              {" "}
              Knee Arthritis Education{" "}
            </Button>
          </div>
          <div className="Home_Button_Div">
            <Button id="Home_Button" variant="contained" onClick={() => {this.context.history.push(
                  "/tutorials/matching-education/welcome"
                );
                }}>
              {" "}
              X-ray Matching Education{" "}
            </Button>
          </div>

          <div className="Home_Button_Div">
            <Button id="Home_Button" variant="contained" onClick={() => {this.context.history.push(
                  "tutorials/matching-training/welcome"
                );}}>
              {" "}
              X-ray Matching Training{" "}
            </Button>
          </div>

          <div className="Home_Button_Div">
            <Button
              id="Home_Button"
              variant="contained"
              onClick={() => {
                this.context.history.push("./evaluation/welcome");
              }}
            >
              {" "}
              Patient Specific Matching{" "}
            </Button>
          </div>

          <div className="Home_Button_Div_Inline">
            <div id="Home_Button_Div_Inline_One">
              <Button id="Home_Button" variant="contained" onClick={() => {}}>
                {" "}
                Recommended Care Pathways{" "}
              </Button>
            </div>
            <div id="Home_Button_Div_Inline_Two">
              <Button
                id="Home_Button_One"
                variant="contained"
                onClick={() => {
                  this.context.history.push("/learn-more");
                }}
              >
                {" "}
                Learn more{" "}
              </Button>
            </div>
          </div>
        </div>

        <div id="Home_Content2_Wrapper">
          <div id="Home_Image_div">
            <img src={Bone1Image} alt="SBS" id="Home_Image_Bone" />
          </div>
        </div>
        {/* <div className="Home_Button_Div_Inline">
                    <div id="Home_Button_Div_Inline_One">
                        <Button id="Home_Button" variant="contained" onClick={()=>{}}> Recommended Care Pathways </Button>
                    </div>
                    <div id="Home_Button_Div_Inline_Two">
                            <Button id="Home_Button_One" variant="contained" onClick={()=>{}}> Learn more </Button>
                    </div>
                    
                </div> */}
      </div>
    );
  }
}
Home.contextType = MyContext;
export default Home;
