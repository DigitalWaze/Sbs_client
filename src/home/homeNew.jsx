import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';

import Rodal from 'rodal';
 import 'rodal/lib/rodal.css';

import Bone2Image from "../assets/bone1_Bitmap.png";

import "./homeNew.css";
import MyContext from '../helper/themeContext';

import GetData from '../Fetch/getDataUniversal';

import Xray1 from '../assets/uploadBoxThumb/xray1.jpg';
import Xray2 from '../assets/uploadBoxThumb/xray2.jpg';
import Xray3 from '../assets/uploadBoxThumb/xray3.jpg';
import Xray4Left from '../assets/uploadBoxThumb/xray4Left.jpg';
import Xray4Right from '../assets/uploadBoxThumb/xray4Right.jpg';

import { SemipolarLoading } from 'react-loadingg';

import GetDataJson from '../Fetch/getDataJson';



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
           //populate all data
            let patient = {};
            let evaluation_stage =  this.context.state.oldEvaluations[this.state.resumeOldEval].stage.id; 
            console.log(evaluation_stage)
            let currEvaluation =  this.context.state.oldEvaluations[this.state.resumeOldEval]; 
            patient["name"]=response.patient[0].name;
            patient["birth_date"]=response.patient[0].birthday;
            
            let birthday=response.patient[0].birthday.toString().match(/\d+/g).map(Number);
            let birthday_year=birthday[0];
            let birthday_month=birthday[1];
            let birthday_date=birthday[2];

            patient["birth_date"]=birthday_date+'/'+birthday_month+'/'+birthday_year;

            patient["age"]=response.patient[0].age;
            patient["gender"]=response.patient[0].gender;
            patient["height"]=response.patient[0].height;
            patient["home_phone"]=response.patient[0].homephone;
            patient["cell_phone"]=response.patient[0].cellphone;
            patient["weight"]=response.patient[0].weight;
            patient["home_address"]=response.patient[0].homeaddress;
            patient["email"]=response.patient[0].email;
            patient["marital_status"]=response.patient[0].maritalstatus;

            let mydate=response.patient[0].date.toString().match(/\d+/g).map(Number);
            let mydate_year=mydate[0];
            let mydate_month=mydate[1];
            let mydate_date=mydate[2];

            if(mydate_month.toString().length==1)
            {
                mydate_month='0'+mydate_month;
            }
            
            if(mydate_date.toString().length==1)
            {
                mydate_date='0'+mydate_date;
            }
            patient["date"]=mydate_date+'-'+mydate_month+'-'+mydate_year;

            console.log(patient)
            let temp_report_id=response.incomplete_vistor_id;
            console.log(temp_report_id)
            let temp_patient_id=response.patient[0].id;
            console.log(temp_patient_id)
            
            let Eval=[];
            
            let active=0;
            let activePriority=5;


            //populating forms
            let newForm=[];
           
           
            let Xrays=[];
            let noOfEvalRemainToUpload=null;

            if(parseInt(evaluation_stage)>1)
            {
                if(response.joint_hurt_priority.length>0)
                {

                    for(let i=0; i<response.joint_hurt_priority.length; i++)
                    {
                        newForm.push({name:'Question1',question_id:1,pro_severity_id:null,visitor_id:null,joint_id:response.joint_hurt_priority[i].joint_id})
                        newForm.push({name:'Question2',question_id:2,pro_severity_id:null,visitor_id:null,joint_id:response.joint_hurt_priority[i].joint_id})
                        newForm.push({name:'Question3',question_id:3,pro_severity_id:null,visitor_id:null,joint_id:response.joint_hurt_priority[i].joint_id})
                        newForm.push({name:'Question4',question_id:4,pro_severity_id:null,visitor_id:null,joint_id:response.joint_hurt_priority[i].joint_id})
                        newForm.push({name:'Question5',question_id:5,pro_severity_id:null,visitor_id:null,joint_id:response.joint_hurt_priority[i].joint_id})
                        newForm.push({name:'Question6',question_id:6,pro_severity_id:null,visitor_id:null,joint_id:response.joint_hurt_priority[i].joint_id})
                        newForm.push({name:'Question7',question_id:7,pro_severity_id:null,visitor_id:null,joint_id:response.joint_hurt_priority[i].joint_id})
                    }

                    noOfEvalRemainToUpload=response.joint_hurt_priority.length;

                    
                    
                    response.joint_hurt_priority.forEach(element => {
                        let name=null;
                        if(element.joint_id=='3')
                        {
                            name='Right Knee'
                        }
                        else if(element.joint_id=='4')
                        {
                            name='Left Knee'
                        }
                        else if(element.joint_id=='1')
                        {
                            name='Right Hip'
                        }
                        else if(element.joint_id=='2')
                        {
                            name='Left Hip'
                        }
                        if(element.priority_id<activePriority)
                        {
                            activePriority=element.priority_id;
                            active=element.joint_id;
                        }
                        Eval.push({visitor_id:element.visitor_id,joint_id:element.joint_id,name:name,priority_id:element.priority_id,isEvaluated:false,joint_hurt_id:element.id})
                        
                    });


                }
            }

            if(parseInt(evaluation_stage)>2)
            {
                if(response.form.length>0)
                {
                   
                    response.form.forEach(element => {

                        let question=newForm.find(el => el.question_id==element.question_id && el.joint_id.toString()==element.joint_id.toString());
                        question.visitor_id=element.visitor_id;
                        question.pro_severity_id=element.pro_severity_id;
                    });
                }

            }

            if(parseInt(evaluation_stage)>3)
            {
                if(response.Uploaded_xrays.length>0)
                {
                    let RightKnee=false;
                    let LeftKnee=false;

                    Eval.forEach(element => {
                        if(element.name==="Right Knee")
                        {
                            RightKnee=true
                        }
                        else if(element.name==="Left Knee")
                        {
                            LeftKnee=true
                        }
                        
                    });

                    if(RightKnee===true && LeftKnee === true)
                    {
                        
                        Xrays=[
                            {id:7,name:'PA Standing Bilateral Flexion',isDone:false,image:null,thumbnail:Xray1,enable:true},
                            {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:false,image:null,thumbnail:Xray2,enable:false},
                            {id:6,name:'Bilateral Kneecap',isDone:false,image:null,thumbnail:Xray3,enable:false},
                            {id:3,name:'Right Lateral',isDone:false,image:null,thumbnail:Xray4Right,enable:false},
                            {id:5,name:'Left Lateral',isDone:false,image:null,thumbnail:Xray4Left,enable:false},

                        ] 
                    }

                    else if(RightKnee==true)
                    {
                        Xrays=[
                            {id:7,name:'PA Standing Bilateral Flexion',isDone:false,image:null,thumbnail:Xray1,enable:true},
                            {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:false,image:null,thumbnail:Xray2,enable:false},
                            {id:2,name:'Right Kneecap',isDone:false,image:null,thumbnail:Xray3,enable:false},
                            {id:3,name:'Right Lateral',isDone:false,image:null,thumbnail:Xray4Right,enable:false},

                        ] 
                    }

                    else if(LeftKnee==true)
                    {
                        Xrays=[
                            {id:7,name:'PA Standing Bilateral Flexion',isDone:false,image:null,thumbnail:Xray1,enable:true},
                            {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:false,image:null,thumbnail:Xray2,enable:false},
                            {id:4,name:'Left Kneecap',isDone:false,image:null,thumbnail:Xray3,enable:false},
                            {id:5,name:'Left Lateral',isDone:false,image:null,thumbnail:Xray4Left,enable:false},

                        ] 
                    }
                }
                
            }

            if(parseInt(evaluation_stage)>4)
            {
                
                
            }

            


            if(evaluation_stage>3)    //get xrays images and move on
            {
                let stateArray = [{key:'noOfEvalRemainToUpload',value:noOfEvalRemainToUpload},{key:'evaluation_stage',value:evaluation_stage},{key:'Xrays',value:Xrays},{key:'form',value:newForm},{key:'Eval',value:Eval},{key:'joint_id',value:active},{key:'activePriority',value:activePriority},{key:'report_id',value:temp_report_id},{key:'patient_id',value:temp_patient_id},{key:'old',value:true},{key:'patient',value:patient},{key:'activeEvaluation',value:currEvaluation}]
                this.context.multipleUpdateValue(stateArray);
                this.CheckXrays(Xrays,temp_report_id)
            }

          //move on
            else this.context.multipleUpdateValueWithHistory([{key:'noOfEvalRemainToUpload',value:noOfEvalRemainToUpload},{key:'evaluation_stage',value:evaluation_stage},{key:'Xrays',value:Xrays},{key:'form',value:newForm},{key:'Eval',value:Eval},{key:'joint_id',value:active},{key:'activePriority',value:activePriority},{key:'report_id',value:temp_report_id},{key:'patient_id',value:temp_patient_id},{key:'old',value:true},{key:'patient',value:patient},{key:'activeEvaluation',value:currEvaluation}],'/evaluation/demographics')
        }

        
    }
    

    setMeTwo = () =>
    {
        this.context.newEval();
        this.context.multipleUpdateValueWithHistory([{key:'oldEvaluations',value:[]}],'/evaluation/welcome')
    }


    CheckXrays = (Xrays,report_id) =>
    {
        let xrayExist = true;

        console.log('checking xrays => ',Xrays)
        Xrays.forEach((xray)=>
        { 
            if(xray.image)
            {
                if(xray.image.toString()==="null" || xray.image.toStrimg()==="" || xray.image.toString()===" ")
                {
                    xrayExist=false;
                }
            }

            else xrayExist=false;
            
        })

        if(xrayExist===false)
        {
            this.getXrays(report_id);
        }

        else
        {
            this.context.history.push('/evaluation/demographics');
        }
    }

    getXrays  = (report_id) =>
    {
        console.log('on get xray');
        let req = 
        {
            visitor_id:report_id
        }
        GetDataJson(this.context.baseUrl+'/api/v1/xrays',200,req,this.context.state.token,this.setXrays);
    }

    setXrays = ( response ) =>
    {
        console.log('in set xrays => ',response);
        console.log('context xrays =>',this.context.state.Xrays);
        let contextXrays = this.context.state.Xrays;
        if(response.ResponseCode==="Success")
        {
            response.Xrays.forEach((xray)=>
            {
                let row = contextXrays.find((x)=> x.id.toString()===xray.xray_type_id.toString());
                if(row)
                {
                    row.image=xray.url;
                }
            })
        }

        this.context.multipleUpdateValueWithHistory([{key:'Xrays',value:contextXrays}],'/evaluation/demographics')
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