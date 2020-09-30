import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import Bone1Image from "../assets/bone1_Bitmap.png";

import "./homeNew.css";
import MyContext from '../helper/themeContext';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div id="Home_Main_Div">
                {console.log(this.context.state.evaluation_stage)}
                <div id="Home_Content1_Wrapper">
                    <div id="Home_Heading1_Div">
                        Welcome to <br/>
                        Hip &
                        <span style={{ color: "#b4ec51", fontWeight: "bold" }}> Knee </span>{" "}
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
                        Get Started with Step by Step{" "}
                        </Button>
                    </div>

                    <Grid  container >
                        
                        <Grid item xs={12} md={4} lg={4} xl={4}>
                            <div className="home-grid-left">
                                <div className="home-grid-inside-heading">
                                    Step by Step Education
                                </div>
                                <div className="Home_Button_Div">
                                    <Button id="Home_Button" variant="contained" 
                                        onClick={() => { this.context.history.push("./tutorials/knee/options"); }} >
                                        {" "} Knee {" "}
                                    </Button>
                                </div>

                                <div className="Home_Button_Div">
                                    <Button id="Home_Button" variant="contained" 
                                        onClick={() => { this.context.history.push("./tutorials/hip/options"); }} >
                                        {" "} Hip {" "}
                                    </Button>
                                </div>

                                <div className="Home_Button_Div">
                                    <Button id="Home_Button" variant="contained" style={{opacity:'0.5'}} disabled={true} >
                                        {" "} Automation X-ray Evaluation {" "}
                                    </Button>
                                </div>

                                <div className="Home_Button_Div">
                                    <Button id="Home_Button" variant="contained" 
                                        onClick={() => { this.context.history.push("/tutorials/patient-evaluation-education/options"); }} >
                                        {" "} Patient Evaluation {" "}
                                    </Button>
                                </div>
                            </div>
                        </Grid>


                        <Grid item xs={12} md={4} lg={4} xl={4}>
                            <div id="Home_Image_div_wrapper">
                                <div id="Home_Image_div">
                                    <img src={Bone1Image} alt="SBS" id="Home_Image_Bone" />
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={4} lg={4} xl={4}>
                            <div className="home-grid-left">
                                <div className="home-grid-inside-heading">
                                    Patient Evaluations
                                </div>
                                <div className="Home_Button_Div">
                                    <Button id="Home_Button" variant="contained" disabled={this.context.state.evaluation_stage} style={{opacity:this.context.state.evaluation_stage?'0.5':'1'}}
                                        onClick={() => { this.context.history.push("/evaluation/welcome"); }} >
                                        {" "} New Evaluation {" "}
                                    </Button>
                                </div>

                                <div className="Home_Button_Div">
                                    <Button id="Home_Button" variant="contained" disabled={!this.context.state.evaluation_stage} style={{opacity:this.context.state.evaluation_stage?'1':'0.5'}}
                                        onClick={() => { this.context.history.push("/evaluation/resume-evaluation/recover"); }} >
                                        {" "} Resume Last Evaluation {" "}
                                    </Button>
                                </div>

                                <div className="Home_Button_Div">
                                    <Button id="Home_Button" variant="contained" 
                                        onClick={() => { this.context.history.push("/evaluation/evaluation-history"); }} >
                                        {" "} Evalution History {" "}
                                    </Button>
                                </div>

                                <div className="Home_Button_Div">
                                    <Button id="Home_Button" variant="contained" style={{opacity:'0.5'}} disabled={true}>
                                        {" "} Incomplete Evaluations {" "}
                                    </Button>
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </div>
        
        );
    }
}
Home.contextType = MyContext;
export default Home;