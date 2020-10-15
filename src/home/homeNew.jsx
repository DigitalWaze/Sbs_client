import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';

import Rodal from 'rodal';
 import 'rodal/lib/rodal.css';

import Bone2Image from "../assets/bone1_Bitmap.png";

import "./homeNew.css";
import MyContext from '../helper/themeContext';

import GetData from '../Fetch/getDataUniversal';

import Xray1 from '../assets/xray1.jpeg';
import Xray2 from '../assets/xray2.jpeg';
import Xray3 from '../assets/xray3.jpeg';
import Xray4 from '../assets/xray4.png';

import Bone1Image from '../assets/bone3_Bitmap.png'
import MFV from '../assets/medial-flexion.png'
import MNFV from '../assets/medial-nonflexion.png'
import LFV from '../assets/lateral-flexion.png'
import LNFV from '../assets/lateral-nonflexion.png'
import KV from '../assets/kneecapview.jpg'

import MFVUP from '../assets/medial-flexion-up.png'
import MNFVUP from '../assets/medial-nonflexion-up.png'
import LFVUP from '../assets/lateral-flexion-up.png'
import LNFVUP from '../assets/lateral-nonflexion-up.png'
import KVUP from '../assets/kneecap-up.png'


import LMFVUP from '../assets/left-medial-flexion-up.png'
import LMNFVUP from '../assets/left-medial-nonflexion-up.png'
import LLFVUP from '../assets/left-lateral-flexion-up.png'
import LLNFVUP from '../assets/left-lateral-nonflexion-up.png'
import LKVUP from '../assets/left-kneecap-up.png'

import MFVUP1 from '../assets/medial-flexion-up-1.png'
import MNFVUP1 from '../assets/medial-nonflexion-up-1.png'
import LFVUP1 from '../assets/lateral-flexion-up-1.png'
import LNFVUP1 from '../assets/lateral-nonflexion-up-1.png'
import KVUP1 from '../assets/kneecap-up-1.png'

import MFVUP2 from '../assets/medial-flexion-up-2.png'
import MNFVUP2 from '../assets/medial-nonflexion-up-2.png'
import LFVUP2 from '../assets/lateral-flexion-up-2.png'
import LNFVUP2 from '../assets/lateral-nonflexion-up-2.png'
import KVUP2 from '../assets/kneecap-up-2.png'

import MFVUP3 from '../assets/medial-flexion-up-3.png'
import MNFVUP3 from '../assets/medial-nonflexion-up-3.png'
import LFVUP3 from '../assets/lateral-flexion-up-3.png'
import LNFVUP3 from '../assets/lateral-nonflexion-up-3.png'
import KVUP3 from '../assets/kneecap-up-3.png'

import MFVUP4 from '../assets/medial-flexion-up-4.png'
import MNFVUP4 from '../assets/medial-nonflexion-up-4.png'
import LFVUP4 from '../assets/lateral-flexion-up-4.png'
import LNFVUP4 from '../assets/lateral-nonflexion-up-4.png'
import KVUP4 from '../assets/kneecap-up-4.png'

import LMFV from '../assets/left-medial-flexion.png'
import LMNFV from '../assets/left-medial-nonflexion.png'
import LLFV from '../assets/left-lateral-flexion.png'
import LLNFV from '../assets/left-lateral-nonflexion.png'

import { SemipolarLoading } from 'react-loadingg';



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
        this.setState({loading:true})
        GetData(this.context.baseUrl+'/api/v1/get/report',200,this.context.state.token,this.setMe)
    }

    deleteReportAndStartNew = () =>
    {
        this.setState({loading:true,resumeWarningModal:false})
        GetData(this.context.baseUrl+'./api/v1/delete/report',200,this.context.state.token,this.setMeTwo)
    }

    startEvaluation = () =>
    {
      if(parseInt(this.context.state.evaluation_stage)>0)  
      {
        // GetData(this.context.baseUrl+'./api/v1/delete/report',200,this.context.state.token,this.setMeTwo)
        this.setState({resumeWarningModal:true})
      }
  
      else 
      {
        this.context.setCookie('evaluation_stage','',0);
        this.context.setCookie('temp_report_id','',null);
        this.context.setCookie('temp_patient_id','',null);
        this.context.multipleUpdateValueWithHistory([{key:'temp_report_id',value:null},{key:'temp_patient_id',value:null},{key:'evaluation_stage',value:null},{key:'noOfEvalRemainToUpload',value:null},{key:'Xrays',value:[]},{key:'form',value:[]},{key:'Eval',value:[]},{key:'joint_id',value:0},{key:'activePriority',value:5},{key:'report_id',value:null},{key:'patient_id',value:null},{key:'old',value:false},{key:'patient',value:{}}],'/evaluation/welcome')
      }
    }

    setMe = (response) =>
    {
        if(response.incomplete_vistor_id!=null && response.incomplete_vistor_id!=undefined && response.incomplete_vistor_id!="" && response.incomplete_vistor_id!=" ")
        {
           //populate all data
            let patient = {};
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
            let Evaluations=
            [   
                {name:'Right Knee',image:Bone1Image  , joint_id:'3',
                    Xrays:[ 
                        {name:'Medial',id:1,isDone:false,enable:true,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:true,state:null,state_id:null,notes:null,thumbnail:MFV,up:MFVUP,up1:MFVUP1,up2:MFVUP2,up3:MFVUP3,up4:MFVUP4},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,state_id:null,notes:'',thumbnail:MNFV,up:MNFVUP,up1:MNFVUP1,up2:MNFVUP2,up3:MNFVUP3,up4:MNFVUP4}]},
                        {name:'Lateral',id:2,isDone:false,enable:false,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:LFV,up:LFVUP,up1:LFVUP1,up2:LFVUP2,up3:LFVUP3,up4:LFVUP4},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,state_id:null,notes:'',thumbnail:LNFV,up:LNFVUP,up1:LNFVUP1,up2:LNFVUP2,up3:LNFVUP3,up4:LNFVUP4}]},
                        {name:'Kneecap',id:3,isDone:false,enable:false,xrays:[{name:'Kneecap',id:3,image:null,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:KV,up:KVUP,up1:KVUP1,up2:KVUP2,up3:KVUP3,up4:KVUP4}]},

                    ] 
                },

                {name:'Left Knee',image:Bone1Image  , joint_id:'4' ,
                    Xrays:[ 
                        {name:'Medial',id:1,isDone:false,enable:true,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:true,state:null,notes:null,thumbnail:LMFV,up:LMFVUP,up1:MFVUP1,up2:MFVUP2,up3:MFVUP3,up4:MFVUP4},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,notes:'',thumbnail:LMNFV,up:LMNFVUP,up1:MNFVUP1,up2:MNFVUP2,up3:MNFVUP3,up4:MNFVUP4}]},
                        {name:'Lateral',id:2,isDone:false,enable:false,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:false,state:null,notes:null,thumbnail:LLFV,up:LLFVUP,up1:LFVUP1,up2:LFVUP2,up3:LFVUP3,up4:LFVUP4},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,notes:'',thumbnail:LLNFV,up:LLNFVUP,up1:LNFVUP1,up2:LNFVUP2,up3:LNFVUP3,up4:LNFVUP4}]},
                        {name:'Kneecap',id:3,isDone:false,enable:false,xrays:[{name:'Kneecap',id:3,image:null,isDone:false,enable:false,state:null,notes:'',thumbnail:KV,up:LKVUP,up1:KVUP1,up2:KVUP2,up3:KVUP3,up4:KVUP4}]},
                    ] 
                }

            ]
            let active=0;
            let activePriority=5;
            //populating forms
            let newForm=[];
           
           
            let Xrays=[];
            let noOfEvalRemainToUpload=null;

            if(parseInt(this.context.state.evaluation_stage)>1)
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

            if(parseInt(this.context.state.evaluation_stage)>2)
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

            if(parseInt(this.context.state.evaluation_stage)>3)
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
                            {id:12,name:'PA Standing Bilateral Flexion',isDone:true,image:null,thumbnail:Xray1,enable:true},
                            {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:true,image:null,thumbnail:Xray2,enable:true},
                            {id:6,name:'Bilateral Kneecap',isDone:true,image:null,thumbnail:Xray3,enable:true},
                            {id:3,name:'Right Lateral',isDone:true,image:null,thumbnail:Xray3,enable:true},
                            {id:5,name:'Left Lateral',isDone:true,image:null,thumbnail:Xray4,enable:true},

                        ] 
                    }

                    else if(RightKnee==true)
                    {
                        Xrays=[
                            {id:12,name:'PA Standing Bilateral Flexion',isDone:true,image:null,thumbnail:Xray1,enable:true},
                            {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:true,image:null,thumbnail:Xray2,enable:true},
                            {id:2,name:'Right Kneecap',isDone:true,image:null,thumbnail:Xray3,enable:true},
                            {id:3,name:'Right Lateral',isDone:true,image:null,thumbnail:Xray4,enable:true},

                        ] 
                    }

                    else if(LeftKnee==true)
                    {
                        Xrays=[
                            {id:12,name:'PA Standing Bilateral Flexion',isDone:true,image:null,thumbnail:Xray1,enable:true},
                            {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:true,image:null,thumbnail:Xray2,enable:true},
                            {id:4,name:'Left Kneecap',isDone:true,image:null,thumbnail:Xray3,enable:true},
                            {id:5,name:'Left Lateral',isDone:true,image:null,thumbnail:Xray4,enable:true},

                        ] 
                    }
                }
            }

            if(parseInt(this.context.state.evaluation_stage)>4)
            {
                
                
            }

            console.log(newForm)
            this.context.multipleUpdateValueWithHistory([{key:'Evaluations',value:Evaluations},{key:'noOfEvalRemainToUpload',value:noOfEvalRemainToUpload},{key:'Xrays',value:Xrays},{key:'form',value:newForm},{key:'Eval',value:Eval},{key:'joint_id',value:active},{key:'activePriority',value:activePriority},{key:'report_id',value:temp_report_id},{key:'patient_id',value:temp_patient_id},{key:'old',value:true},{key:'patient',value:patient}],'/evaluation/demographics')
        }

        
    }

    setMeTwo = () =>
    {
        this.context.setCookie('evaluation_stage','',0);
        this.context.setCookie('temp_report_id','',0);
        this.context.setCookie('temp_patient_id','',0);
        this.context.multipleUpdateValueWithHistory([{key:'temp_report_id',value:null},{key:'temp_patient_id',value:null},{key:'evaluation_stage',value:null},{key:'noOfEvalRemainToUpload',value:null},{key:'Xrays',value:[]},{key:'form',value:[]},{key:'Eval',value:[]},{key:'joint_id',value:0},{key:'activePriority',value:5},{key:'report_id',value:null},{key:'patient_id',value:null},{key:'old',value:false},{key:'patient',value:{}}],'/evaluation/welcome')
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
                                        <Button id="Home_Button" variant="contained" disabled={!this.context.state.evaluation_stage} style={{opacity:this.context.state.evaluation_stage?'1':'0.5'}}
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