import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import Image1 from "../../assets/Patient_Evaluation_home.png";
// import "./Knee.css";
import MyContext from "../../helper/themeContext";

class PatientEvaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="Knee_Main_Div">
        <div id="Knee_Content1_Wrapper">
          <div id="Knee_Heading1_Div">
            Hip &<span style={{ color: "#b4ec51" }}> Knee </span> Step by Step
            <br />
            <span style={{ fontWeight: "bold", fontSize: "75px" }}> Patient Evaluation Education </span>{" "}
            <div id="Home_Neon_Line"></div>
          </div>

          <Grid container>
            <Grid item xs={12} md={4} lg={4} xl={4}>
              <div className="home-grid-left">
                <div className="Home_Button_Div">
                  <Button id="Home_Button" variant="contained"
                    onClick={() =>
                      this.context.history.push("/tutorials/patient-evaluation-education/understanding-pros")
                    } disabled={false}>
                    {" "}
                    Understanding PROs{" "}
                  </Button>
                </div>

                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    onClick={() =>
                      this.context.history.push("/tutorials/patient-evaluation-education/xray-evaluation")
                    }>
                    {" "}
                    Patient Specific Matching{" "}
                  </Button>
                </div>

                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    onClick={() =>
                      this.context.history.push(
                        "/tutorials/patient-evaluation-education/recommended-carepathway/welcome"
                      )
                    }>
                    {" "}
                    Understanding Care Pathways{" "}
                  </Button>
                </div>

                {/* <div className="Home_Button_Div">
                  <Button id="Home_Button" variant="contained" style={{ opacity: "0.5" }} disabled={true}>
                    {" "}
                    Understanding SBS Reports{" "}
                  </Button>
                </div> */}
              </div>
            </Grid>

            <Grid item xs={0} md={3} lg={3} xl={3}></Grid>

            <Grid item xs={12} md={4} lg={4} xl={4} className="image-grid">
              <div id="Home_Image_div_wrapper">
                <div id="Home_Image_div_patient_evaluation_home">
                  <img src={Image1} alt="SBS" id="Home_Image_Bone" />
                </div>
                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    style={{ width: "250px" }}
                    onClick={() => {
                      this.context.history.push("/home");
                    }}>
                    {" "}
                    BACK TO HOME{" "}
                  </Button>
                </div>
              </div>

              {/* <div className="Home_Button_Div_Wrapper">
                               
                            </div> */}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
PatientEvaluation.contextType = MyContext;
export default PatientEvaluation;
