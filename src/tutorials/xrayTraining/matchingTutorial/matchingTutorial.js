import React, { Component } from 'react';


import Overview from './overview';
import Matching from './matching';

import Bone1Image from '../../../assets/bone3_Bitmap.png'
import MFV from '../../../assets/medial-flexion.png'
import MNFV from '../../../assets/medial-nonflexion.png'
import LFV from '../../../assets/lateral-flexion.png'
import LNFV from '../../../assets/lateral-nonflexion.png'
import KV from '../../../assets/kneecapview.jpg'

import MFVUP from '../../../assets/medial-flexion-up.png'
import MNFVUP from '../../../assets/medial-nonflexion-up.png'
import LFVUP from '../../../assets/lateral-flexion-up.png'
import LNFVUP from '../../../assets/lateral-nonflexion-up.png'
import KVUP from '../../../assets/matching_tutorial_keencap_up.png'

import MFVUP1 from "../../../assets/eval-comp-xrays/medial-flexion-up-1.png"; 
import MNFVUP1 from "../../../assets/eval-comp-xrays/medial-nonflexion-up-1.png";
import LFVUP1 from "../../../assets/eval-comp-xrays/lateral-flexion-up-1.png";
import LNFVUP1 from "../../../assets/eval-comp-xrays/lateral-nonflexion-up-1.png";
import KVUP1 from "../../../assets/eval-comp-xrays/kneecap-up-1.png";

import MFVUP2 from "../../../assets/eval-comp-xrays/medial-flexion-up-2.png";
import MNFVUP2 from "../../../assets/eval-comp-xrays/medial-nonflexion-up-2.png";
import LFVUP2 from "../../../assets/eval-comp-xrays/lateral-flexion-up-2.png";
import LNFVUP2 from "../../../assets/eval-comp-xrays/lateral-nonflexion-up-2.png";
import KVUP2 from "../../../assets/eval-comp-xrays/kneecap-up-2.png";

import MFVUP3 from "../../../assets/eval-comp-xrays/medial-flexion-up-3.png";
import MNFVUP3 from "../../../assets/eval-comp-xrays/medial-nonflexion-up-3.png";
import LFVUP3 from "../../../assets/eval-comp-xrays/lateral-flexion-up-3.png";
import LNFVUP3 from "../../../assets/eval-comp-xrays/lateral-nonflexion-up-3.png";
import KVUP3 from "../../../assets/eval-comp-xrays/kneecap-up-3.png";

import MFVUP4 from "../../../assets/eval-comp-xrays/medial-flexion-up-4.png";
import MNFVUP4 from "../../../assets/eval-comp-xrays/medial-nonflexion-up-4.png";
import LFVUP4 from "../../../assets/eval-comp-xrays/lateral-flexion-up-4.png";
import LNFVUP4 from "../../../assets/eval-comp-xrays/lateral-nonflexion-up-4.png";
import KVUP4 from "../../../assets/eval-comp-xrays/kneecap-up-4.png";

// import './xrayMatching.css';
import MyContext from '../../../helper/themeContext';
import { SemipolarLoading } from 'react-loadingg';

// let Evaluation= 
//     {name:'Right Knee',image:Bone1Image  , joint_id:'3',
//         Xrays:[ 
//             {name:'Medial',id:1,isDone:false,enable:true,xrays:[{name:'FlexionView',id:1,image:null,isDone:false,enable:true,state:null,state_id:null,notes:null,thumbnail:MFV,up:MFVUP,up1:MFVUP1,up2:MFVUP2,up3:MFVUP3,up4:MFVUP4,answer:'3'},{name:'Non-FlexionView',image:null,id:2,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:MNFV,up:MNFVUP,up1:MNFVUP1,up2:MNFVUP2,up3:MNFVUP3,up4:MNFVUP4,answer:'3'}]},
//             {name:'Lateral',id:2,isDone:false,enable:false,xrays:[{name:'FlexionView',id:1,image:null,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:LFV,up:LFVUP,up1:LFVUP1,up2:LFVUP2,up3:LFVUP3,up4:LFVUP4,answer:'1'},{name:'Non-FlexionView',image:null,id:2,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:LNFV,up:LNFVUP,up1:LNFVUP1,up2:LNFVUP2,up3:LNFVUP3,up4:LNFVUP4,answer:'1'}]},
//             {name:'Kneecap',id:3,isDone:false,enable:false,xrays:[{name:'Kneecap',id:3,image:null,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:KV,up:KVUP,up1:KVUP1,up2:KVUP2,up3:KVUP3,up4:KVUP4,answer:'4'}]},

//         ] 
//     }


class MatchingTutorial extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            Evaluation:{},
            activeId:0,
            ActivePage:'Overview',
            ActiveType:null,
            ActiveXray:null,
            Next:false,
            req:[],
            start:true,
         }
    }

    UNSAFE_componentWillMount()
    {
        let Evaluation= 
        {name:'Right Knee',image:Bone1Image  , joint_id:'3',
            Xrays:[ 
                {name:'Medial',id:1,isDone:false,enable:true,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:true,state:null,state_id:null,notes:null,thumbnail:MFV,up:MFVUP,up1:MFVUP1,up2:MFVUP2,up3:MFVUP3,up4:MFVUP4,answer:'3'},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:MNFV,up:MNFVUP,up1:MNFVUP1,up2:MNFVUP2,up3:MNFVUP3,up4:MNFVUP4,answer:'3'}]},
                {name:'Lateral',id:2,isDone:false,enable:false,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:LFV,up:LFVUP,up1:LFVUP1,up2:LFVUP2,up3:LFVUP3,up4:LFVUP4,answer:'1'},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:LNFV,up:LNFVUP,up1:LNFVUP1,up2:LNFVUP2,up3:LNFVUP3,up4:LNFVUP4,answer:'1'}]},
                {name:'Kneecap',id:3,isDone:false,enable:false,xrays:[{name:'Kneecap',id:3,image:null,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:KV,up:KVUP,up1:KVUP1,up2:KVUP2,up3:KVUP3,up4:KVUP4,answer:'4'}]},
    
            ] 
        }
        this.setState({Evaluation})
   
    }

    

    
    



    handleEvalChange = (state,notes) =>
    {
        let Evaluations=this.state.Evaluations;
        let Evaluation=Evaluations.filter(Eval => Eval.joint_id.toString()==this.context.state.joint_id.toString())[0];
        let type=Evaluation.Xrays.find(type => type.name===this.state.ActiveType)
        let Xray=type.xrays.find(xray => xray.name===this.state.ActiveXray)
        Xray.state=state;
        Xray.notes=notes;
    }

    
    handleOverviewClick = (ActiveType,ActiveXray) =>
    {
        let Evaluation=this.state.Evaluation;
        let ActiveTypeIndex=Evaluation.Xrays.findIndex(ev=>ev.name==ActiveType);
        let ActiveXrayIndex=Evaluation.Xrays[ActiveTypeIndex].xrays.findIndex(eva=>eva.name==ActiveXray);
        console.log(ActiveTypeIndex,'ActiveTypeIndex')
        console.log(ActiveXrayIndex,'ActiveXrayIndex')
        this.setState({ActivePage:'Matching',ActiveType,ActiveXray,ActiveXrayIndex,ActiveTypeIndex,start:false})
    }
    handleMatchingClick = (state,notes) =>
    {
        let Evaluation=this.state.Evaluation;
        let type=Evaluation.Xrays.find(type => type.name===this.state.ActiveType)
        let Xray=type.xrays.find(xray => xray.name===this.state.ActiveXray)
        let XrayIndex=type.xrays.findIndex(xray => xray.name===this.state.ActiveXray)
        Xray.state=state;
        Xray.notes=notes;
        Xray.isDone=true;

        if(type.xrays[XrayIndex+1] && type.xrays[XrayIndex+1]!==null)
        {
            type.xrays[XrayIndex+1].enable=true;
        }
        else 
        {
            type.isDone=true;
            let typeIndex=Evaluation.Xrays.findIndex(type => type.name===this.state.ActiveType)
            if( Evaluation.Xrays[typeIndex+1] &&  Evaluation.Xrays[typeIndex+1]!==null)
            {
                Evaluation.Xrays[typeIndex+1].enable=true;
                Evaluation.Xrays[typeIndex+1].xrays[0].enable=true;
            }

            else 
            {
                // let req=[];
                // let Evaluation=this.state.Evaluations.filter(Eval => Eval.joint_id.toString()==this.context.state.joint_id.toString())[0];
                // Evaluation.Xrays.forEach(element => {

                //     element.xrays.forEach(ele => {
                //         let id=this.state.Matching.filter(match=>match.Xray_type.id==element.id && match.view.id==ele.id)[0].id;
                //         let reqObject={processed_xray_id:id,xray_matching_id:ele.state,notes:ele.notes};
                //         req.push(reqObject);
                //     });
                    
                //     // let reqObject={processed_xray_id=}
                // });
                // this.setState({loading:true})

                // console.log(req);
                this.context.setCookie("tutorial-" + this.context.state.user_id,40);
                this.context.history.push('./congratulations')
            }
            

        }
        // console.log(Evaluation);

        this.setState({ActivePage:'Overview'})
    }

    
    handleNextClick = async () =>
    {
        // this.context.updateValue('Evaluations',this.state.Evaluations)
        // this.context.history.push('./report')
        // await this.handleReportUpload();
        // this.context.updateSession();
        // this.context.multipleUpdateValueWithHistory([{key:'Evaluations',value:this.state.Evaluations}],'./report')
    }

    render() { 
        return ( 
            <div id="Evaluaion_XrayMatching_Intro_Main_Div">
                {this.state.loading===true?<SemipolarLoading size={"large"} color={'#b4ec51'}/>
            
            
                :   <div>
                    
                        {
                            this.state.ActivePage==='Overview' && <Overview start={this.state.start} Next={this.state.Next} Evaluation={this.state.Evaluation} handleClick={(ActiveType,ActiveXray)=>this.handleOverviewClick(ActiveType,ActiveXray)} handleNextClick={this.handleNextClick}/>
                        }
                        {
                            this.state.ActivePage==='Matching' && <Matching   eval={this.state.Evaluation} ActiveTypeIndex={this.state.ActiveTypeIndex}  ActiveXrayIndex={this.state.ActiveXrayIndex} ActiveType={this.state.ActiveType} ActiveXray={this.state.ActiveXray} handleClick={(state,notes)=>this.handleMatchingClick(state,notes)}/>
                        }
                    </div>
                }
               
               
            </div>
        );
    }
}
MatchingTutorial.contextType=MyContext;
export default MatchingTutorial;