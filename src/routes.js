import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import history from "./helper/history";
import MyContext from "./helper/themeContext";
import Evaluation from "./evaluation/evaluation";
import Drawer from "./general/drawer/drawer";
import Tutorials from "./tutorials/tutorials";
import LearnMore from "./tutorials/LearnMore/LearnMore";

import Bone1Image from "./assets/bone3_Bitmap.png";
import MFV from "./assets/medial-flexion.png";
import MNFV from "./assets/medial-nonflexion.png";
import LFV from "./assets/lateral-flexion.png";
import LNFV from "./assets/lateral-nonflexion.png";
import KV from "./assets/kneecapview.jpg";

import MFVUP from "./assets/medial-flexion-up.png";
import MNFVUP from "./assets/medial-nonflexion-up.png";
import LFVUP from "./assets/lateral-flexion-up.png";
import LNFVUP from "./assets/lateral-nonflexion-up.png";
import KVUP from "./assets/kneecap-up.png";

import MFVUP1 from "./assets/medial-flexion-up-1.png";
import MNFVUP1 from "./assets/medial-nonflexion-up-1.png";
import LFVUP1 from "./assets/lateral-flexion-up-1.png";
import LNFVUP1 from "./assets/lateral-nonflexion-up-1.png";
import KVUP1 from "./assets/kneecap-up-1.png";

import MFVUP2 from "./assets/medial-flexion-up-2.png";
import MNFVUP2 from "./assets/medial-nonflexion-up-2.png";
import LFVUP2 from "./assets/lateral-flexion-up-2.png";
import LNFVUP2 from "./assets/lateral-nonflexion-up-2.png";
import KVUP2 from "./assets/kneecap-up-2.png";

import MFVUP3 from "./assets/medial-flexion-up-3.png";
import MNFVUP3 from "./assets/medial-nonflexion-up-3.png";
import LFVUP3 from "./assets/lateral-flexion-up-3.png";
import LNFVUP3 from "./assets/lateral-nonflexion-up-3.png";
import KVUP3 from "./assets/kneecap-up-3.png";

import MFVUP4 from "./assets/medial-flexion-up-4.png";
import MNFVUP4 from "./assets/medial-nonflexion-up-4.png";
import LFVUP4 from "./assets/lateral-flexion-up-4.png";
import LNFVUP4 from "./assets/lateral-nonflexion-up-4.png";
import KVUP4 from "./assets/kneecap-up-4.png";

// import Chart from './'

import Login from "./login/login";
import CreateUser from "./admin/createUser/createUser";
import Home from "./home/home";
import { ConsoleWriter } from "istanbul-lib-report";
import StartOver from "./offer/startOver";
// import UploadReport from './evaluation/patientReport/upload/uploadReports';

const baseUrlH = "https://sbs-server-adonis.herokuapp.com";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  setCookie(cname, cvalue, exmins) {
    var d = new Date();
    d.setMinutes(d.getMinutes() + exmins);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  Logout = () => {
    //this.clearLeft();  -> done in setState Below
    this.setState({
      old: false,
      tutorial: null,
      evaluation_stage: null,
      temp_report_id: null,
      temp_patient_id: null,
      joint_id: null,
      activePriority: null,
      Evaluations: [],
      Eval: [],
      loggedIn: false,
      token: null,
      type: null,
      user_id: null,
      user_email: null,
      user_type: null,
      organization: null,
    });
    this.setCookie("token", "", 0);
    this.setCookie("type", "", 0);
    this.setCookie("user_id", "", 0);
    this.setCookie("user_email", "", 0);
    this.setCookie("user_type_id", "", 0);
    this.setCookie("user_type_name", "", 0); 
    this.setCookie("organization", "", 0);
    this.setCookie("tutorial", "", 0);
    this.setCookie("evaluation_stage", "", 0);
    this.setCookie("temp_report_id", "", 0);
    this.setCookie("temp_patient_id", "", 0);

    history.push("/login");
  };

  updateSession = () => {
    this.setCookie("token", this.state.token, 30);
    this.setCookie("type", this.state.type, 30);
    this.setCookie("user_id", this.state.user_id, 30);
    this.setCookie("user_email", this.state.user_email, 30);
    this.setCookie("user_type_id", this.state.user_type.id, 30);
    this.setCookie("user_type_name", this.state.user_type.type, 30);
    this.setCookie("organization", this.state.organization, 30);
    this.setCookie("tutorial", this.state.tutorial, 30);
    this.setCookie("temp_report_id", this.state.temp_report_id, 30);
    this.setCookie("temp_patient_id", this.state.temp_patient_id, 30);
  };

  componentWillMount() {
    if (
      this.state.token == null ||
      !this.state.token ||
      this.state.token == "" ||
      this.state.token == " "
    ) {
      let token = this.getCookie("token");
      let type = this.getCookie("type");
      let user_id = this.getCookie("user_id");
      let user_email = this.getCookie("user_email");
      let user_type_id = this.getCookie("user_type_id");
      let user_type_name = this.getCookie("user_type_name");
      let organization = this.getCookie("organization");
      let evaluation_stage = this.getCookie("evaluation_stage");
      let temp_report_id = this.getCookie("temp_report_id");
      let temp_patient_id = this.getCookie("temp_patient_id");

      if (
        token == undefined ||
        token == "" ||
        token == " " ||
        type == undefined ||
        type == "" ||
        type == " " ||
        user_id == undefined ||
        user_id == "" ||
        user_id == " " ||
        user_email == undefined ||
        user_email == "" ||
        user_email == " " ||
        user_type_id == undefined ||
        user_type_id == "" ||
        user_type_id == " " ||
        user_type_name == undefined ||
        user_type_name == "" ||
        user_type_name == " " ||
        organization == undefined ||
        organization == "" ||
        organization == " "
      ) {
        console.log("No Login Session");
        this.setState({ loading: false });
        history.push("/login");
      } else {
        console.log(evaluation_stage);
        this.setState({
          old: false,
          evaluation_stage: evaluation_stage,
          temp_report_id: temp_report_id,
          temp_patient_id,
          temp_patient_id,
          loading: false,
          loggedIn: true,
          token: token,
          type: type,
          user_id: user_id,
          user_email: user_email,
          user_type: { id: user_type_id, type: user_type_name },
          organization: organization,
        });
        if (parseInt(evaluation_stage) > 0) {
          {
            history.push("/evaluation/resume-evaluation");
          }
        }
        if (history.location.pathname == "/login") {
          history.push("/");
        }
      }
    }
  }

  updateValue = (key, value) => {
    this.setState({ [key]: value });
  };

  multipleUpdateValue = (objects) => {
    let newState = {};
    for (var obj in objects) {
      newState[objects[obj].key] = objects[obj].value;
    }
    console.log(newState);
    this.setState(newState);
  };

  multipleUpdateValueWithHistory = (objects, url) => {
    let newState = {};
    for (var obj in objects) {
      newState[objects[obj].key] = objects[obj].value;
    }
    this.setState(newState);
    history.push(url);
  };

  clearLeft = () => {
    //delete old education;
    this.setState({
      old: null,
      tutorial: null,
      evaluation_stage: null,
      temp_report_id: null,
      temp_patient_id: null,
    });
  };

  evalDone = () => {
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

    // this.setState({report_id:null,patient:{},XrayMatch:false,UXray:false,Pro:false,old:null,tutorial:null,evaluation_stage:null,temp_report_id:null,temp_patient_id:null,joint_id:null,activePriority:null,Evaluations,Eval:[],form});
    this.setCookie("evaluation_stage", "", 0);
    this.setCookie("temp_report_id", "", 0);
    this.setCookie("temp_patient_id", "", 0);
  };

  discardLeft = () => {
    //api  to delete old evaluation;
    this.setCookie("tutorial-" + this.state.user_id, "", 0);
    this.setState({
      old: null,
      tutorial: null,
      evaluation_stage: null,
      temp_report_id: null,
      temp_patient_id: null,
    });
  };

  // updatePatient = (key,value) =>
  // {
  //     this.setState({[key]:value})
  // }
  render() {
    return this.state.loading == false ? (
      <Router history={history}>
        <MyContext.Provider
          value={{
            evalDone: this.evalDone,
            setCookie: this.setCookie,
            getCookie: this.getCookie,
            logout: this.Logout,
            updateSession: this.updateSession,
            multipleUpdateValueWithHistory: this.multipleUpdateValueWithHistory,
            multipleUpdateValue: this.multipleUpdateValue,
            baseUrl: baseUrlH,
            state: this.state,
            updateValue: this.updateValue,
            history: history,
          }}
        >
          {this.state.loggedIn == true ? (
            <Route path="/" component={Drawer} />
          ) : null}{" "}
          {/* WIDTH 70 PX */}
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} /> {/* DEFAULT */}
          <Route path="/start-over" component={StartOver} />
          <Route path="/tutorials" component={Tutorials} />
          <Route path="/Learn-more" component={LearnMore} />
          <Route
            path="/evaluation"
            component={Evaluation}
          /> {/* CHECKER */} {/* ROUTER */}
          <Route path="/admin/create-user" component={CreateUser} />{" "}
          {/* CHECKER */} {/* ROUTER */}
          {/* CHECKER */} {/* ROUTER */}
          {/* <Route path="/Evaluation/forms" component={Forms}/> */}
          {/* <Route path="/Evaluation/patient-report" component={PatientReport}/> */}
          {/* <Route path="/Evaluation/upload-report" component={UploadReport}/> */}
        </MyContext.Provider>
      </Router>
    ) : (
      <div>Loading</div>
    );
  }
}

export default Routes;
