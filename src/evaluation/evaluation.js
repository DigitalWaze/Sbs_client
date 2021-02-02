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
import ReportCardSummary from "./reportCardSummary/reportCardSummary";
import RequiredReminder from "./requiredReminder/requiredReminder"; 
import ChartJs from "./chart/newChart"; 
import FormType from "./PRO/ProEntry/formType";
import PatientReportManual from "./PRO/manual/patientReportManual";
import NewOrExis from "./newOrExis/NewOrExis";
import MedentIntro from "./medent/medentIntro";
import MedentForm from "./medent/medentForm";
import PRO from "./PRO/ProWrapper";
import PatientSummary from "./patientSummary/patientSummary";
import RecommendedCarePathway from "./recommendedCarePathway/recommendedCarePathway";
import CompletePdf from "./completePdf/completePdf";


class Evaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

            <Route exact path="/Evaluation/pro" component={PRO} />


            <Route path="/Evaluation/form-type" component={FormType} />

            <Route path="/Evaluation/manual-form" component={PatientReportManual} />


            <Route path="/Evaluation/upload-xrays" component={UploadXray} />
            <Route path="/Evaluation/x-ray-matching" component={XrayMatching} />

            <Route path="/Evaluation/report-card-summary" component={ReportCardSummary} />
            <Route path="/Evaluation/report" component={Report} />

            <Route path="/Evaluation/chart" component={ChartJs} />

            <Route path="/Evaluation/patient-summary" component={PatientSummary} />
            <Route path="/Evaluation/recommended-care-pathway" component={RecommendedCarePathway} />
            <Route path="/Evaluation/complete-pdf" component={CompletePdf} />


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
