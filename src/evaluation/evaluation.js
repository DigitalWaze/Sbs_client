import React, { Component } from "react";

import "./evaluation.css";
import MyContext from "../helper/themeContext";

// import PatientReport from "./patientReport/manual/patientReportManual";
import { Route, Router } from "react-router-dom";
import Welcome from "./welcome/welcome";
import PatientDemoGraphics from "./patientDemographics/patientDemoGraphics";
import NewEvaluation from "./newEvaluation/newEvaluation";
import PatientProfile from "./patientProfile/patientProfile";
import UploadXray from "./uploadXray/uploadXray";
import XrayMatching from "./xrayMatching/xrayMatching";
import Report from "./report/report";
import RandomPdf from "./randomPdf/pdf";
import Video from "./Video/Video";

import ResumeEvaluation from "./resumeEvaluation/resumeEvaluation";
import ResumeEvaluationSelect from "./resumeEvaluation/resumeEvalutionSelect";
import Pdf from "./pdf/pdf";
import EvaluationHistory from "./evaluationHistory/evaluationHistory";
import ReportCardSummary from "./reportCardSummary/reportCardSummary";
import RequiredReminder from "./requiredReminder/requiredReminder"; 
import ChartJs from "./chart/newChart"; 
import FormType from "./PRO/ProEntry/formType";
import PatientReportManual from "./PRO/manual/patientReportManual";
import NewOrExis from "./newOrExis/NewOrExis";
import MedentIntro from "./medent/medentIntro";
import MedentForm from "./medent/medentForm";

class Evaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  UNSAFE_componentWillMount() {
    //Api call to get Stage
    // this.context.history.push('/Evaluation/Welcome')
    // let Pro=false,UXray=false,XrayMatch=false;
    // let Evaluations=
    //     [
    //         {name:'Right Knee',image:Bone1Image  , joint_id:'3',
    //             Xrays:[
    //                 {name:'Medial',id:1,isDone:false,enable:true,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:true,state:null,state_id:null,notes:null,thumbnail:MFV,up:MFVUP,up1:MFVUP1,up2:MFVUP2,up3:MFVUP3,up4:MFVUP4},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,state_id:null,notes:'',thumbnail:MNFV,up:MNFVUP,up1:MNFVUP1,up2:MNFVUP2,up3:MNFVUP3,up4:MNFVUP4}]},
    //                 {name:'Lateral',id:2,isDone:false,enable:false,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:LFV,up:LFVUP,up1:LFVUP1,up2:LFVUP2,up3:LFVUP3,up4:LFVUP4},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,state_id:null,notes:'',thumbnail:LNFV,up:LNFVUP,up1:LNFVUP1,up2:LNFVUP2,up3:LNFVUP3,up4:LNFVUP4}]},
    //                 {name:'Kneecap',id:3,isDone:false,enable:false,xrays:[{name:'Kneecap',id:3,image:null,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:KV,up:KVUP,up1:KVUP1,up2:KVUP2,up3:KVUP3,up4:KVUP4}]},
    //             ]
    //         },
    //         {name:'Left Knee',image:Bone1Image  , joint_id:'4' ,
    //             Xrays:[
    //                 {name:'Medial',id:1,isDone:false,enable:true,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:true,state:null,notes:null,thumbnail:LMFV,up:LMFVUP,up1:MFVUP1,up2:MFVUP2,up3:MFVUP3,up4:MFVUP4},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,notes:'',thumbnail:LMNFV,up:LMNFVUP,up1:MNFVUP1,up2:MNFVUP2,up3:MNFVUP3,up4:MNFVUP4}]},
    //                 {name:'Lateral',id:2,isDone:false,enable:false,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:false,state:null,notes:null,thumbnail:LLFV,up:LLFVUP,up1:LFVUP1,up2:LFVUP2,up3:LFVUP3,up4:LFVUP4},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,notes:'',thumbnail:LLNFV,up:LLNFVUP,up1:LNFVUP1,up2:LNFVUP2,up3:LNFVUP3,up4:LNFVUP4}]},
    //                 {name:'Kneecap',id:3,isDone:false,enable:false,xrays:[{name:'Kneecap',id:3,image:null,isDone:false,enable:false,state:null,notes:'',thumbnail:KV,up:LKVUP,up1:KVUP1,up2:KVUP2,up3:KVUP3,up4:KVUP4}]},
    //             ]
    //         }
    //     ]
    // if(this.context.state.evaluation_stage==null || this.context.state.evaluation_stage<1 || !this.context.state.evaluation_stage)
    // {
    //     this.context.history.push('/evaluation/welcome')
    // }
    //Initializing Evaluation State
    // this.context.multipleUpdateValue([{key:'Xrays',value:[]},{key:'XrayMatch',value:false},{key:'UXray',value:false},{key:'Pro',value:false},{key:'Evaluations',value:Evaluations},{key:'Eval',value:[]},{key:'form',value:[]},{key:'patient',value:{}},{key:'report_id',value:null} ])
    // -------------------Dummy Data---------------------
    // let form = [
    //   { name: "Question1",question_id: 1, joint_id:3, pro_severity_id: 4, visitor_id: null, },
    //   { name: "Question2", question_id: 2, joint_id:3, pro_severity_id: null,visitor_id: null,},
    //   { name: "Question3", question_id: 3, joint_id:3, pro_severity_id: 2, visitor_id: null, },
    //   { name: "Question4", joint_id:3, question_id: 4, pro_severity_id: 2, visitor_id: null, },
    //   { name: "Question5", question_id: 5, joint_id:3, pro_severity_id: null,visitor_id: null, },
    //   { name: "Question6", joint_id:3, question_id: 6, pro_severity_id: null, visitor_id: null, },
    //   { name: "Question7", question_id: 7, joint_id:3, pro_severity_id: null, visitor_id: null, },
    //   { name: "Question1",question_id: 1, joint_id:4, pro_severity_id: 4, visitor_id: null, },
    //   { name: "Question2", question_id: 2, joint_id:4, pro_severity_id: 4,visitor_id: null,},
    //   { name: "Question3", question_id: 3, joint_id:4, pro_severity_id: 2, visitor_id: null, },
    //   { name: "Question4", joint_id:4, question_id: 4, pro_severity_id: 2, visitor_id: null, },
    //   { name: "Question5", question_id: 5, joint_id:4, pro_severity_id: null,visitor_id: null, },
    //   { name: "Question6", joint_id:4, question_id: 6, pro_severity_id: null, visitor_id: null, },
    //   { name: "Question7", question_id: 7, joint_id:4, pro_severity_id: null, visitor_id: null, },
    // ];
    // let patient={};
    // patient.name="Muhammad Ammar";
    // patient.date="08-15-2020"
    // let Eval=[];
    // Eval.push({joint_hurt_id:'11',visitor_id:'39',joint_id:'3',name:'Right Knee',priority_id:2,isEvaluated:false})   // Right Knee
    // Eval.push({joint_hurt_id:'12',visitor_id:'39',joint_id:'4',name:'Left Knee',priority_id:1,isEvaluated:false})   // Left Knee
    // this.context.multipleUpdateValue([{key:'patient_id',value:'4948'},{key:'joint_id',value:'3'},{key:'Eval',value:Eval},{key:'form',value:form},{key:'patient',value:patient},{key:'report_id',value:39},{key:'token',value:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU4OTIwNTk4N30.k8ywG7mAJjyGq3lCmCwY-VVBzqvyP_9kmIKufZYIghs'} ])
    // console.log('here')
    // ---------Dummy Data End---------------------------------
    // this.context.updateValue('token',null);
    // this.context.updateValue('user_id',null);
    // this.context.updateValue('report_id',null);
  }

  render() {
    return (
      <div id="Evaluation_Main_Div">
        <div>
          {this.context.history.location.pathname !== "/evaluation/resume-evaluation" &&
          this.context.history.location.pathname !== "/evaluation/resume-evaluation/recover" &&
          this.context.history.location.pathname !== "/evaluation/Video" &&
          this.context.history.location.pathname !== "/evaluation/Demographics" &&
          this.context.history.location.pathname !== "/evaluation/welcome" &&
          this.context.history.location.pathname !== "/evaluation/demographics" &&
          this.context.history.location.pathname !== "/evaluation" ? (
            this.context.state.patient ? (
              <div id="Evaluation_Main_Div_Top_Name">{this.context.state.patient.name}</div>
            ) : null
          ) : null}
          {/* {console.log(this.context.state.report_id) } */}
          <Router history={this.context.history}>
            <Route exact path="/evaluation/resume-evaluation" component={ResumeEvaluation} />
            <Route exact path="/evaluation/resume-evaluation/recover" component={ResumeEvaluationSelect} />

            <Route exact path="/evaluation/welcome" component={Welcome} />
            <Route exact path="/evaluation/new-or-existing" component={NewOrExis} />
            <Route exact path="/evaluation/required-info" component={RequiredReminder} />

            <Route exact path="/Evaluation/Demographics" component={PatientDemoGraphics} />
            <Route exact path="/Evaluation/new-evaluation" component={NewEvaluation} />

            <Route exact path="/Evaluation/medent-welcome" component={MedentIntro} />
            <Route exact path="/Evaluation/medent-form" component={MedentForm} />


            <Route exact path="/Evaluation/patient-profile" component={PatientProfile} />

            <Route path="/Evaluation/form-type" component={FormType} />

            <Route path="/Evaluation/manual-form" component={PatientReportManual} />


            <Route path="/Evaluation/upload-xrays" component={UploadXray} />
            <Route path="/Evaluation/x-ray-matching" component={XrayMatching} />

            <Route path="/Evaluation/report-card-summary" component={ReportCardSummary} />
            <Route path="/Evaluation/report" component={Report} />

            <Route path="/Evaluation/chart" component={ChartJs} />
            <Route path="/Evaluation/pdf" component={Pdf} />
            <Route path="/Evaluation/evaluation-history" component={EvaluationHistory} />
            <Route path="/Evaluation/selected-patient-report" component={RandomPdf} />
          </Router>
        </div>

        {/* { this.context.history.location.pathname!=="/Evalutaion/Welcome"?
                 
                    <div id="Evaluation_Main_Div_Top_Name">
                        aa
                    </div> 
                :console.log('a')
                } */}
        {/* <div id="Evaluation_Main_Div_Top_Name">
                        aa
                    </div>  */}
      </div>
    );
  }
}
Evaluation.contextType = MyContext;
export default Evaluation;
