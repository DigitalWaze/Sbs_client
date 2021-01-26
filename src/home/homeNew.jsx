import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';

import Rodal from 'rodal';
 import 'rodal/lib/rodal.css';

import Bone2Image from "../assets/bone1_Bitmap.png";

import "./homeNew.css";
import MyContext from '../helper/themeContext';

import GetData from '../Fetch/getDataUniversal';

import { SemipolarLoading } from 'react-loadingg';

import GetDataJson from '../Fetch/getDataJson';
import {LoadNewEval} from '../StoreFunctions/evaluationStoreFunctions'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { resumeWarningModal:false,loading:false }
    }

    closeResumeWarningModal = () =>
    {
        this.setState({resumeWarningModal:false})
    }

    handleRecover = () =>
    {
        // console.log(this.context.state.temp_patient_id)
        this.setState({loading:true,resumeOldEval:0})
        let report_id =  this.context.state.oldEvaluations[0].id; 
        this.context.newEval();
        GetData(this.context.baseUrl+`/api/v1/get/report?report_id=${report_id}`,200,this.context.state.token,this.setMe)
    }

    deleteReportAndStartNew = () =>
    {
        this.setState({loading:true,resumeWarningModal:false})
        GetData(this.context.baseUrl+'/api/v1/delete/report',200,this.context.state.token,this.setMeTwo)
    }

    startEvaluation = () =>
    {
      if(parseInt(this.context.state.oldEvaluations.length)>0)  
      {
        this.setState({resumeWarningModal:true})
      }
  
      else 
      {
        this.context.newEval();
        this.context.history.push('/evaluation/welcome');
      }
    }

    setMe = (response) =>
    {
        if(response.incomplete_vistor_id!=null && response.incomplete_vistor_id!=undefined && response.incomplete_vistor_id!="" && response.incomplete_vistor_id!=" ")
        {

            LoadNewEval(this.context,response);
        }      
    }  

    setMeTwo = () =>
    {
        this.context.newEval();
        this.context.multipleUpdateValueWithHistory([{key:'oldEvaluations',value:[]}],'/evaluation/welcome')
    }


    render() { 
        return ( 

            <div id="Home_Main_Div">
           
                { this.state.loading==true?
                    <SemipolarLoading size={"large"} color={'#b4ec51'}/>
                :
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
                                        <Button id="Home_Button" variant="contained" onClick={() => { this.context.history.push("./tutorials/automatic-xray-evaluation"); }}   >
                                            {" "} Automatic X-ray Evaluation {" "}
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
                                        <img src={Bone2Image} alt="SBS" id="Home_Image_Bone" />
                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={12} md={4} lg={4} xl={4}>
                                <div className="home-grid-left">
                                    <div className="home-grid-inside-heading">
                                        Patient Evaluations
                                    </div>
                                    <div className="Home_Button_Div"> 
                                    {/* disabled={this.context.state.evaluation_stage} */}
                                        <Button id="Home_Button" variant="contained"
                                            onClick={this.startEvaluation} >
                                            {" "} New Evaluation {" "}
                                        </Button>
                                    </div>

                                    <div className="Home_Button_Div">
                                        <Button id="Home_Button" variant="contained" disabled={!this.context.state.oldEvaluations.length>0} style={{opacity:this.context.state.oldEvaluations.length>0?'1':'0.5'}}
                                            onClick={this.handleRecover} >
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
                }
                <Rodal visible={this.state.resumeWarningModal} onClose={this.closeResumeWarningModal}>
                    <div>
                        <div className="Evaluation_Home_ResumeEvaluationWarningModal_Text_Div">
                            This will delete your on-going evaluation. Would you like to continue?
                        </div>

                        <div className="Evaluation_ResumeEvaluation_Button_Div">
                            <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={this.deleteReportAndStartNew}> Yes </Button>
                        </div>
                    </div>
                </Rodal>
            </div>
        
        );
    }
}
Home.contextType = MyContext;
export default Home;