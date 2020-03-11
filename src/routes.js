import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import history from './helper/history';
import Welcome from './evaluation/welcome/welcome';
import MyContext from './helper/themeContext';
import Evaluation from './evaluation/evaluation';
import Drawer from './general/drawer/drawer';
import PatientDemoGraphics from './evaluation/patientDemographics/patientDemoGraphics';
import NewEvaluation from './evaluation/newEvaluation/newEvaluation';
import PatientProfile from './evaluation/patientProfile/patientProfile';
import Forms from './evaluation/form/forms';
import PatientReport from './evaluation/patientReport/patientReport';
import UploadXray from './evaluation/uploadXray/uploadXray';
import XrayMatching from './evaluation/xrayMatching/xrayMatching';
import Report from './evaluation/report/report';

import Bone1Image from './assets/bone3_Bitmap.png'
import MFV from './assets/medial-flexion.png'
import MNFV from './assets/medial-nonflexion.png'
import LFV from './assets/lateral-flexion.png'
import LNFV from './assets/lateral-nonflexion.png'
import KV from './assets/kneecapview.jpg'



class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = { Pro:false,UXray:false,XrayMatch:false,
            Evaluations:[   {name:'Joint Evaluation : Right Knee',image:Bone1Image  , 
                Xrays:[ 
                    {name:'Medial',isDone:false,enable:true,xrays:[{name:'FlexionView',image:null,isDone:false,enable:true,state:null,notes:null,thumbnail:MFV},{name:'Non-FlexionView',image:null,isDone:false,enable:false,state:null,notes:null,thumbnail:MNFV}]},
                    {name:'Lateral',isDone:false,enable:false,xrays:[{name:'FlexionView',image:null,isDone:false,enable:false,state:null,notes:null,thumbnail:LFV},{name:'Non-FlexionView',image:null,isDone:false,enable:false,state:null,notes:null,thumbnail:LNFV}]},
                    {name:'Kneecap',isDone:false,enable:false,xrays:[{name:'Kneecap',image:null,isDone:false,enable:false,state:null,notes:null,thumbnail:KV}]},

                ] 
                },

                {name:'Joint Evaluation : Left Knee',image:Bone1Image  , 
                Xrays:[ 
                    {name:'Medial',isDone:false,enable:false,xrays:[{name:'FlexionView',image:null,isDone:false,enable:false,state:null,notes:null,thumbnail:null},{name:'Non-FlexionView',image:null,isDone:false,enable:false,state:null,notes:null,thumbnail:null}]},
                    {name:'Lateral',isDone:false,enable:false,xrays:[{name:'FlexionView',image:null,isDone:false,enable:false,state:null,notes:null,thumbnail:null},{name:'Non-FlexionView',image:null,isDone:false,enable:false,state:null,notes:null,thumbnail:null}]},
                    {name:'Kneecap',isDone:false,enable:false,xrays:[{name:'Kneecap',image:null,isDone:false,enable:false,state:null,notes:null,thumbnail:null}]},
                ] 
                }
                
                
            ] 
        }
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
                    <Route path="/Evaluation/x-ray-matching" component={XrayMatching}/>
                    <Route path="/Evaluation/report" component={Report}/>

                </MyContext.Provider>   

            </Router>
         );
    }
}

export default Routes;