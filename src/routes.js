import React, { Component } from "react";
import { Route, Router } from "react-router-dom";

//helpers
import history from "./helper/history";
import MyContext from "./helper/themeContext";

//components
import Evaluation from "./evaluation/evaluation";
import Drawer from "./general/drawer/drawer";
import Tutorials from "./tutorials/tutorials";
import LearnMore from "./tutorials/LearnMore/LearnMore";
import EvaluationHistory from "./pages/evaluationHistory/evaluationHistory";
import IncompleteEvaluations from "./pages/incompleteEvaluations/incompleteEvaluations";
import Login from "./login/login";
import CreateUser from "./admin/createUser/createUser";
import Home from "./home/homeNew";
import EditProfile from "./editprofile/EditProfile";


//functions
import {emptyEvalState, LoadDummyEvaluation}  from './StoreFunctions/evaluationStoreFunctions'




import StartOver from "./offer/startOver";
// import RecomCarePath from "./tutorials/PatientEvaluation/recomCarePath/recomendedcarepathway";
// import UploadReport from './evaluation/patientReport/upload/uploadReports';

const baseUrlH = "https://sbs-server-adonis.herokuapp.com"; //old Env
const baseUrlA = "https://sbs-backend-dw.herokuapp.com"
const baseUrlL = "http://127.0.0.1:3333"

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true,oldEvaluations:[] };
  }

  UNSAFE_componentWillMount() {


    LoadDummyEvaluation(this);
    // this.loadPrevSession();

  }


  loadPrevSession = () =>
  {
    if (this.state.token == null || !this.state.token || this.state.token == "" || this.state.token == " ")
    {
      // will always be true

      let token = this.getCookie("token");
      let type = this.getCookie("type");
      let user_id = this.getCookie("user_id");
      let user_email = this.getCookie("user_email");
      let user_type_id = this.getCookie("user_type_id");
      let user_type_name = this.getCookie("user_type_name");
      let organization = this.getCookie("organization");
      let isTutorialCompleted = this.getCookie("isTutorialCompleted");

      let oldEvaluations = this.getCookie("oldEvaluations");

      
      if(oldEvaluations && oldEvaluations.toString() !== 'undefined' && oldEvaluations.toString() !== 'null' )
      {
        oldEvaluations = JSON.parse(oldEvaluations);
      }

      else oldEvaluations=[];
         
      let tutorial_rem = this.getCookie("tutorial-" + user_id);
      if( 
          token == undefined || token == "" || token == " " ||
          type == undefined || type == "" || type == " " ||
          user_id == undefined || user_id == "" || user_id == " " ||
          user_email == undefined || user_email == "" || user_email == " " ||
          user_type_id == undefined || user_type_id == "" || user_type_id == " " ||
          user_type_name == undefined || user_type_name == "" || user_type_name == " " ||
          organization == undefined || organization == "" || organization == " "
        )
      {
        //on No previous session from cookie
        // console.log("No Login Session");
        this.setState({ loading: false });
        history.push("/login");
      } 
      else {
        // ------------------ redirection after loading previous session----------------------------------

        this.setState({
          oldEvaluations:oldEvaluations,
          loading: false,
          loggedIn: true,
          token: token,
          isTutorialCompleted: isTutorialCompleted,
          type: type,
          user_id: user_id,
          user_email: user_email,
          user_type: { id: user_type_id, type: user_type_name },
          organization: organization,
          tutorial_rem:tutorial_rem,
        });

        //----------- start --------- new setup after login session from cookie

        history.push("/home"); // ------ home will cater resume and tutorials

        //----------- end --------- new setup after login session from cookie
      }
    }

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
    this.setState({old: false,tutorial: null,evaluation_stage: null,temp_report_id: null,temp_patient_id: null,
      joint_id: null,activePriority: null,isTutorialCompleted: 0,Evaluations: [],Eval: [],Xrays: [],
      loggedIn: false,token: null,type: null,user_id: null,user_email: null,user_type: null,organization: null,
    });
    this.setCookie("token", "", 0);    this.setCookie("type", "", 0);        this.setCookie("user_id", "", 0);
    this.setCookie("user_email", "", 0); this.setCookie("user_type_id", "", 0); this.setCookie("user_type_name", "", 0);
    this.setCookie("isTutorialCompleted", "", 0);  this.setCookie("organization", "", 0);  this.setCookie("tutorial", "", 0);
    this.setCookie("oldEvaluations", "", 0); this.setCookie("temp_report_id", "", 0); this.setCookie("temp_patient_id", "", 0);

    history.push("/login");
  };

  updateSession = () => {

    let oldEvaluations=[];
    this.setCookie("token", this.state.token, 30);
    this.setCookie("type", this.state.type, 30);
    this.setCookie("user_id", this.state.user_id, 30);
    this.setCookie("user_email", this.state.user_email, 30);
    this.setCookie("user_type_id", this.state.user_type.id, 30);
    this.setCookie("user_type_name", this.state.user_type.type, 30);
    this.setCookie("isTutorialCompleted", this.state.isTutorialCompleted, 30);
    if(this.state.oldEvaluations)
    {
      oldEvaluations =  JSON.stringify(this.state.oldEvaluations)
    }

    else 
    {
      oldEvaluations =  JSON.stringify(oldEvaluations)
    }
    this.setCookie("oldEvaluations", oldEvaluations, 30);
    this.setCookie("organization", this.state.organization, 30);
    this.setCookie("tutorial", this.state.tutorial, 30);

  };

  

  updateValue = (key, value) => {
    this.setState({ [key]: value},()=>{this.updateSession()});    
  };

  multipleUpdateValue = (objects) => {
    let newState = {};
    for (var obj in objects) {
      newState[objects[obj].key] = objects[obj].value;
    }
    this.setState(newState,()=>{this.updateSession()});
  };

  multipleUpdateValueWithHistory = (objects, url) => {
    let newState = {};
    for (var obj in objects) {
      newState[objects[obj].key] = objects[obj].value;
    }
    this.setState(newState,()=>{this.updateSession()});
    history.push(url);
  };

  

  evalDone = () => {
    let oldEvaluations = this.state.oldEvaluations;
    if(oldEvaluations)
    {
    
      console.log('i ran')

      let oldEvaluationNew = oldEvaluations.filter(evalution => evalution.visitor.id.toString() !== this.state.report_id.toString() );

      console.log('evalution.visitor.id.toString() ')
      console.log('this.state.report_id.toString() ',this.state.report_id.toString())

      console.log('oldEvaluationNew) ',oldEvaluationNew)


      this.updateValue(oldEvaluations,oldEvaluationNew)
    }
  };

  newEval = () =>
  {
    emptyEvalState(this);
  }

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

  ChartOverAll = () => [100,91.975,84.600,79.914,76.332,73.342,70.704,68.284,65.994,63.776,61.583,
    59.381,57.140,54.840,52.465,50.012,47.487,44.905,42.281,39.625,36.931,
    34.174,31.307,28.251,24.875,20.941,15.939,8.291,0.000]


  render() {
    return this.state.loading == false ? (
      <Router history={history}>
        <MyContext.Provider
          value={{
            newEval: this.newEval,
            evalDone: this.evalDone,
            setCookie: this.setCookie,
            getCookie: this.getCookie,
            ChartOverAll:this.ChartOverAll,
            logout: this.Logout,
            updateSession: this.updateSession,
            multipleUpdateValueWithHistory: this.multipleUpdateValueWithHistory,
            multipleUpdateValue: this.multipleUpdateValue,
            baseUrl: baseUrlA,
            state: this.state,
            updateValue: this.updateValue,
            history: history,
          }}>
          {this.state.loggedIn == true ? <Route path="/" component={Drawer} /> : null}
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} /> {/* DEFAULT */}
          <Route path="/start-over" component={StartOver} />
          <Route path="/tutorials" component={Tutorials} />
          <Route path="/Learn-more" component={LearnMore} />
          <Route path="/edit-profile" component={EditProfile} />
          <Route path="/evaluation" component={Evaluation} /> {/* CHECKER */} {/* ROUTER */}
          <Route path="/evaluation-history" component={EvaluationHistory} />
          <Route path="/incomplete-evaluations" component={IncompleteEvaluations} />

          <Route path="/admin/create-user" component={CreateUser} />{" "}
          {/* <Route path="/recommended-care-pathway/" component={RecomCarePath} /> ROUTER */}
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
