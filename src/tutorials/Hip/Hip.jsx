import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import Bone1Image from "../../assets/bone1_Bitmap.png";
// import "./Knee.css";
import MyContext from '../../helper/themeContext';

class Hip extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div id="Knee_Main_Div">
                <div id="Knee_Content1_Wrapper">
                    <div id="Knee_Heading1_Div">
                        Hip &
                        <span style={{ color: "#b4ec51" }}> Knee </span>{" "}
                        Step by Step
                        <br/>
                        <span style={{ fontWeight: "bold" , fontSize:'75px' }}> Hip Education </span>{" "}
                        <div id="Home_Neon_Line"></div>
                    </div>
                    

                    <Grid  container >
                        
                        <Grid item xs={12} md={4} lg={4} xl={4}>
                            <div className="home-grid-left">

                                <div className="home-grid-inside-heading">
                                    The Hip Education and evaluation functionality is coming to the Step by Step system soon
                                </div>

                                <div className="Home_Button_Div">
                                    <Button id="Home_Button" variant="contained" style={{opacity:'0.5'}}  disabled={true}>
                                        {" "} Hip Arthritis {" "}
                                    </Button>
                                </div>

                                <div className="Home_Button_Div">
                                    <Button id="Home_Button" variant="contained" style={{opacity:'0.5'}}  disabled={true}> 
                                        {" "} X-ray Matching {" "}
                                    </Button>
                                </div>

                                <div className="Home_Button_Div">
                                    <Button id="Home_Button" variant="contained"  style={{opacity:'0.5'}} disabled={true}>
                                        {" "} X-ray Matching Training {" "}
                                    </Button>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={0} md={3} lg={3} xl={3}>
                        
                        </Grid>


                        <Grid item xs={12} md={4} lg={4} xl={4} className="image-grid">
                            <div id="Home_Image_div_wrapper">
                                <div id="Home_Image_div">
                                    <img src={Bone1Image} alt="SBS" id="Home_Image_Bone" />
                                </div>
                                <div className="Home_Button_Div">
                                    <Button id="Home_Button" variant="contained"  style={{width:'250px'}}
                                        onClick={() => { this.context.history.push("/home"); }} >
                                        {" "} Back to Home {" "}
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
Hip.contextType = MyContext;
export default Hip;