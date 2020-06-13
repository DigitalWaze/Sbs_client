import React, { Component } from "react";

import "./evaluation.css";
import MyContext from "../helper/themeContext";

import Forms from "./form/forms";
import PatientReport from "./patientReport/manual/patientReport";
import { Route, Router } from "react-router-dom";
import Welcome from "./welcome/welcome";
import PatientDemoGraphics from "./patientDemographics/patientDemoGraphics";
import NewEvaluation from "./newEvaluation/newEvaluation";
import PatientProfile from "./patientProfile/patientProfile";
import UploadXray from "./uploadXray/uploadXray";
import XrayMatching from "./xrayMatching/xrayMatching";
import Chart from "./chart/chart";
import Report from "./report/report";
import Video from "./Video/Video";

import Bone1Image from "../assets/bone3_Bitmap.png";
import MFV from "../assets/medial-flexion.png";
import MNFV from "../assets/medial-nonflexion.png";
import LFV from "../assets/lateral-flexion.png";
import LNFV from "../assets/lateral-nonflexion.png";
import KV from "../assets/kneecapview.jpg";

import MFVUP from "../assets/medial-flexion-up.png";
import MNFVUP from "../assets/medial-nonflexion-up.png";
import LFVUP from "../assets/lateral-flexion-up.png";
import LNFVUP from "../assets/lateral-nonflexion-up.png";
import KVUP from "../assets/kneecap-up.png";

import MFVUP1 from "../assets/medial-flexion-up-1.png";
import MNFVUP1 from "../assets/medial-nonflexion-up-1.png";
import LFVUP1 from "../assets/lateral-flexion-up-1.png";
import LNFVUP1 from "../assets/lateral-nonflexion-up-1.png";
import KVUP1 from "../assets/kneecap-up-1.png";

import MFVUP2 from "../assets/medial-flexion-up-2.png";
import MNFVUP2 from "../assets/medial-nonflexion-up-2.png";
import LFVUP2 from "../assets/lateral-flexion-up-2.png";
import LNFVUP2 from "../assets/lateral-nonflexion-up-2.png";
import KVUP2 from "../assets/kneecap-up-2.png";

import MFVUP3 from "../assets/medial-flexion-up-3.png";
import MNFVUP3 from "../assets/medial-nonflexion-up-3.png";
import LFVUP3 from "../assets/lateral-flexion-up-3.png";
import LNFVUP3 from "../assets/lateral-nonflexion-up-3.png";
import KVUP3 from "../assets/kneecap-up-3.png";

import MFVUP4 from "../assets/medial-flexion-up-4.png";
import MNFVUP4 from "../assets/medial-nonflexion-up-4.png";
import LFVUP4 from "../assets/lateral-flexion-up-4.png";
import LNFVUP4 from "../assets/lateral-nonflexion-up-4.png";
import KVUP4 from "../assets/kneecap-up-4.png";
import ResumeEvaluation from "./resumeEvaluation/resumeEvaluation";
import ResumeEvaluationSelect from "./resumeEvaluation/resumeEvalutionSelect";
import Pdf from "./pdf/pdf";

class Evaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    //Api call to get Stage
    // this.context.history.push('/Evaluation/Welcome')

    // let Pro=false,UXray=false,XrayMatch=false;

    let Evaluations = [
      {
        name: "Right Knee",
        image: Bone1Image,
        joint_id: "3",
        Xrays: [
          {
            name: "Medial",
            id: 1,
            isDone: false,
            enable: true,
            xrays: [
              {
                name: "FlexionView",
                id: 1,
                image: null,
                isDone: false,
                enable: true,
                state: null,
                state_id: null,
                notes: null,
                thumbnail: MFV,
                up: MFVUP,
                up1: MFVUP1,
                up2: MFVUP2,
                up3: MFVUP3,
                up4: MFVUP4,
              },
              {
                name: "Non-FlexionView",
                image: null,
                id: 2,
                isDone: false,
                enable: false,
                state: null,
                state_id: null,
                notes: null,
                thumbnail: MNFV,
                up: MNFVUP,
                up1: MNFVUP1,
                up2: MNFVUP2,
                up3: MNFVUP3,
                up4: MNFVUP4,
              },
            ],
          },
          {
            name: "Lateral",
            id: 2,
            isDone: false,
            enable: false,
            xrays: [
              {
                name: "FlexionView",
                id: 1,
                image: null,
                isDone: false,
                enable: false,
                state: null,
                state_id: null,
                notes: null,
                thumbnail: LFV,
                up: LFVUP,
                up1: LFVUP1,
                up2: LFVUP2,
                up3: LFVUP3,
                up4: LFVUP4,
              },
              {
                name: "Non-FlexionView",
                image: null,
                id: 2,
                isDone: false,
                enable: false,
                state: null,
                state_id: null,
                notes: null,
                thumbnail: LNFV,
                up: LNFVUP,
                up1: LNFVUP1,
                up2: LNFVUP2,
                up3: LNFVUP3,
                up4: LNFVUP4,
              },
            ],
          },
          {
            name: "Kneecap",
            id: 3,
            isDone: false,
            enable: false,
            xrays: [
              {
                name: "Kneecap",
                id: 3,
                image: null,
                isDone: false,
                enable: false,
                state: null,
                state_id: null,
                notes: null,
                thumbnail: KV,
                up: KVUP,
                up1: KVUP2,
                up2: KVUP2,
                up3: KVUP3,
                up4: KVUP4,
              },
            ],
          },
        ],
      },

      {
        name: "Left Knee",
        image: Bone1Image,
        joint_id: "4",
        Xrays: [
          {
            name: "Medial",
            id: 1,
            isDone: false,
            enable: true,
            xrays: [
              {
                name: "FlexionView",
                id: 1,
                image: null,
                isDone: false,
                enable: true,
                state: null,
                notes: null,
                thumbnail: null,
                up: MFVUP,
                up1: MFVUP1,
                up2: MFVUP2,
                up3: MFVUP3,
                up4: MFVUP4,
              },
              {
                name: "Non-FlexionView",
                image: null,
                id: 2,
                isDone: false,
                enable: false,
                state: null,
                notes: null,
                thumbnail: null,
                up: MNFVUP,
                up1: MNFVUP1,
                up2: MNFVUP2,
                up3: MNFVUP3,
                up4: MNFVUP4,
              },
            ],
          },
          {
            name: "Lateral",
            id: 2,
            isDone: false,
            enable: false,
            xrays: [
              {
                name: "FlexionView",
                id: 1,
                image: null,
                isDone: false,
                enable: false,
                state: null,
                notes: null,
                thumbnail: null,
                up: LFVUP,
                up1: LFVUP1,
                up2: LFVUP2,
                up3: LFVUP3,
                up4: LFVUP4,
              },
              {
                name: "Non-FlexionView",
                image: null,
                id: 2,
                isDone: false,
                enable: false,
                state: null,
                notes: null,
                thumbnail: null,
                up: LNFVUP,
                up1: LNFVUP1,
                up2: LNFVUP2,
                up3: LNFVUP3,
                up4: LNFVUP4,
              },
            ],
          },
          {
            name: "Kneecap",
            id: 3,
            isDone: false,
            enable: false,
            xrays: [
              {
                name: "Kneecap",
                id: 3,
                image: null,
                isDone: false,
                enable: false,
                state: null,
                notes: null,
                thumbnail: null,
                up: KVUP,
                up1: KVUP2,
                up2: KVUP2,
                up3: KVUP3,
                up4: KVUP4,
              },
            ],
          },
        ],
      },
    ];
    let form = [
      {
        name: "Question1",
        question_id: 1,
        pro_severity_id: null,
        visitor_id: null,
      },
      {
        name: "Question2",
        question_id: 2,
        pro_severity_id: null,
        visitor_id: null,
      },
      {
        name: "Question3",
        question_id: 3,
        pro_severity_id: null,
        visitor_id: null,
      },
      {
        name: "Question4",
        question_id: 4,
        pro_severity_id: null,
        visitor_id: null,
      },
      {
        name: "Question5",
        question_id: 5,
        pro_severity_id: null,
        visitor_id: null,
      },
      {
        name: "Question6",
        question_id: 6,
        pro_severity_id: null,
        visitor_id: null,
      },
      {
        name: "Question7",
        question_id: 7,
        pro_severity_id: null,
        visitor_id: null,
      },
    ];
    if (
      this.context.state.evaluation_stage == null ||
      this.context.state.evaluation_stage < 1 ||
      !this.context.state.evaluation_stage
    ) {
      this.context.history.push("/evaluation/welcome");
    }

    //-------------------Dummy Data---------------------
    // let Eval=[];
    // Eval.push({joint_hurt_id:'11',visitor_id:'39',joint_id:'3',name:'Right Knee',priority_id:this.state.priority2,isEvaluated:false})   // Right Knee

    // this.context.multipleUpdateValue([{key:'joint_id',value:'3'},{key:'Eval',value:Eval},{key:'form',value:form},{key:'patient',value:{}},{key:'report_id',value:39},{key:'token',value:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU4OTIwNTk4N30.k8ywG7mAJjyGq3lCmCwY-VVBzqvyP_9kmIKufZYIghs'} ])

    //---------Dummy Data End---------------------------------

    //Initializing Evaluation State
    this.context.multipleUpdateValue([
      { key: "XrayMatch", value: false },
      { key: "UXray", value: false },
      { key: "Pro", value: false },
      { key: "Evaluations", value: Evaluations },
      { key: "Eval", value: [] },
      { key: "form", value: form },
      { key: "patient", value: {} },
      { key: "report_id", value: null },
    ]);

    // this.context.updateValue('token',null);
    // this.context.updateValue('user_id',null);
    // this.context.updateValue('report_id',null);
  }
  render() {
    return (
      <div id="Evaluation_Main_Div">
        {this.context.state.report_id === undefined ? (
          "loader"
        ) : (
          <div>
            {this.context.history.location.pathname !== "/evaluation/welcome" &&
            this.context.history.location.pathname !==
              "/evaluation/Demographics" &&
            this.context.history.location.pathname !== "/evaluation/Video" &&
            this.context.history.location.pathname !== "/evaluation" ? (
              <div id="Evaluation_Main_Div_Top_Name">
                {this.context.state.patient.name}
              </div>
            ) : null}
            {console.log(this.context.state.report_id)}
            <Router history={this.context.history}>
              <Route
                exact
                path="/evaluation/resume-evaluation"
                component={ResumeEvaluation}
              />
              <Route
                exact
                path="/evaluation/resume-evaluation/recover"
                component={ResumeEvaluationSelect}
              />

              <Route exact path="/Evaluation/Welcome" component={Welcome} />
              <Route exact path="/Evaluation/Video" component={Video} />
              <Route
                exact
                path="/Evaluation/Demographics"
                component={PatientDemoGraphics}
              />
              <Route
                exact
                path="/Evaluation/new-evaluation"
                component={NewEvaluation}
              />

              <Route
                exact
                path="/Evaluation/patient-profile"
                component={PatientProfile}
              />

              <Route path="/Evaluation/forms" component={Forms} />
              <Route
                path="/Evaluation/patient-report"
                component={PatientReport}
              />

              <Route path="/Evaluation/upload-xrays" component={UploadXray} />
              <Route
                path="/Evaluation/x-ray-matching"
                component={XrayMatching}
              />

              <Route path="/Evaluation/report" component={Report} />
              <Route path="/Evaluation/chart" component={Chart} />
              <Route path="/Evaluation/pdf" component={Pdf} />
            </Router>
          </div>
        )}
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
