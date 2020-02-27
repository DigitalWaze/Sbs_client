import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import history from './helper/history';
import Welcome from './evaluation/welcome';
import MyContext from './helper/themeContext';
import Evaluation from './evaluation/evaluation';
import Drawer from './general/drawer/drawer';
import PatientDemoGraphics from './evaluation/patientDemoGraphics';
import NewEvaluation from './evaluation/newEvaluation';
import PatientProfile from './evaluation/patientProfile';
import Forms from './evaluation/forms';
import PatientReport from './evaluation/patientReport';
import UploadFiles from './evaluation/uploadFiles';
import UploadXray from './evaluation/uploadXray';



class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = { Pro:false,UXray:false,XrayMatch:false }
    }

    updateValue = (key,value) =>
    {
        this.setState({[key]:value})
    }
    render() { 
        return ( 
            <Router history={history}> 

                <MyContext.Provider value={{state: this.state,updateValue: this.updateValue , history: history}}>   
                    <Route path="/" component={Drawer} />  {/* WIDTH 70 PX */}



                    <Route path="/Evaluation" component={Evaluation} /> {/* CHECKER */}

                    <Route exact path='/Evaluation/Welcome' component={Welcome} />
                    <Route exact path='/Evaluation/Demographics' component={PatientDemoGraphics} />
                    <Route path="/Evaluation/new-evaluation" component={NewEvaluation} />
                    <Route path="/Evaluation/patient-profile" component={PatientProfile} />
                    <Route path="/Evaluation/forms" component={Forms}/>
                    <Route path="/Evaluation/patient-report" component={PatientReport}/>
                    <Route path="/Evaluation/upload-xrays" component={UploadXray}/>
                    <Route path="/Evaluation/upload-files" component={UploadFiles}/>

                </MyContext.Provider>   

            </Router>
         );
    }
}

export default Routes;