import React, { Component } from 'react';

import Introduction from './intro';
import EvalName from './evalName';
import Overview from './overview';
import Matching from './matching';
import './xrayMatching.css';

import MyContext from '../../helper/themeContext';
import { SemipolarLoading } from 'react-loadingg';
import PostData from '../../Fetch/postData4';



let Next=false;

class XrayMatching extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Evaluations:[],
            activeId:0,
            ActivePage:'Intro',
            ActiveType:null,
            ActiveXray:null,
            Next:false,
            req:[],
            mountImages:false,
            startedUploading:false,
        }
    }

    UNSAFE_componentWillMount()
    {
        this.setState({Evaluations:this.context.state.Evaluations,Next:false});
    }

    handleIntroClick = () =>
    {
        this.setState({ActivePage:'EvalName'})
    }
    handleEvalClick = () =>
    {
        this.setState({ActivePage:'Overview'})
    }
    handleOverviewClick = (ActiveType,ActiveXray) =>
    {
        let Eval=this.context.state.Eval[this.context.state.activeJointIndex];
        let Evaluation=this.state.Evaluations.find(eva => eva.joint_id.toString()===Eval.joint_id.toString())
        let ActiveTypeIndex=Evaluation.Xrays.findIndex(ev=>ev.name==ActiveType);
        let ActiveXrayIndex=Evaluation.Xrays[ActiveTypeIndex].xrays.findIndex(eva=>eva.name==ActiveXray);
        this.setState({ActivePage:'Matching',ActiveType,ActiveXray,ActiveXrayIndex,ActiveTypeIndex})
    }
    handleMatchingClick = async (state,notes) =>
    {
        let Eval=this.context.state.Eval[this.context.state.activeJointIndex];
        let Evaluation=this.state.Evaluations.find(eva => eva.joint_id.toString()===Eval.joint_id.toString())
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
                let req=[];
                Evaluation.Xrays.forEach(element => {
                    element.xrays.forEach(ele => {
                        let reqObject={processed_xray_id:ele.processed_xray_id,xray_matching_id:ele.state,notes:ele.notes};
                        req.push(reqObject);
                    });
                });

                if(this.context.state.noOfEvalRemainToUpload>1)
                {
                    req.push({updateState:false})
                }
                else
                {
                    req.push({updateState:true})
                }

                this.setState({loading:true})
                PostData(this.context.baseUrl+'/api/v1/evaluate/xrays',201,req,this.context.state.token,this.setMeTwo)
                console.log(req);
            }
        }

        this.setState({ActivePage:'Overview'})
    }

    // componentDidUpdate()
    // {
    //     if(this.state.mountImages===true && this.state.startedUploading===false)
    //     {
    //         this.setState({startedUploading:true});
    //         this.handleReportUpload()
    //     }                

    // }

    setMeTwo = async (response) =>
    {
        if(response.length>0)
        {
            if(this.context.state.noOfEvalRemainToUpload>1)
            {
                let Curr_Joint_id = this.context.state.Eval[this.context.state.activeJointIndex].joint_id;
                this.state.Evaluations.find(eva => eva.joint_id.toString()=== Curr_Joint_id.toString()).isEvaluated=true;
                
                console.log('SECOND EVAL');
                //load new matching;
                Next=true;
                this.setState({Next:true,loading:false});
            }
            else
            {
                console.log(' -----------------------   EVALUATION MATCHING DONE ---------------------');
                //this.context.evalDone();
                //this.setState({mountImages:true})  //this call to handleReportUpload function in componentDidUpdate
                this.setState({Next:true,loading:false});
                Next=true;
            }
        }
        else {alert('Error! Please try again later.')}
    }
    handleNextClick = async () =>
    {
        this.context.multipleUpdateValueWithHistory([{key:'Evaluations',value:this.state.Evaluations}],'./report')
    }

    render() { 

        let Eval=this.context.state.Eval[this.context.state.activeJointIndex];
        
        return ( 
            <div id="Evaluaion_XrayMatching_Intro_Main_Div">
                {this.state.loading===true?<div style={{height:'100vh',width:'100vw'}}> <SemipolarLoading size={"large"} color={'#b4ec51'}/> </div>
                :   <div>
                        {   
                            this.state.ActivePage==='Intro' && <Introduction handleClick={this.handleIntroClick}/>
                        }
                        {
                            this.state.ActivePage==='EvalName' && <EvalName eval={this.state.Evaluations.find(eva => eva.joint_id.toString()===Eval.joint_id.toString())} handleClick={this.handleEvalClick}/>
                        }
                        {
                            this.state.ActivePage==='Overview' && <Overview Next={this.state.Next} Evaluation={this.state.Evaluations.find(eva => eva.joint_id.toString()===Eval.joint_id.toString())} handleClick={(ActiveType,ActiveXray)=>this.handleOverviewClick(ActiveType,ActiveXray)} handleNextClick={this.handleNextClick}/>
                        }
                        {
                            this.state.ActivePage==='Matching' && <Matching  apiKey={this.state.Evaluations.apiKey} Nonce={this.state.Evaluations.Nonce} baseUrl={this.state.Evaluations.baseUrl}  eval={this.state.Evaluations.find(eva => eva.joint_id.toString()===Eval.joint_id.toString())} ActiveTypeIndex={this.state.ActiveTypeIndex}  ActiveXrayIndex={this.state.ActiveXrayIndex} ActiveType={this.state.ActiveType} ActiveXray={this.state.ActiveXray} handleClick={(state,notes)=>this.handleMatchingClick(state,notes)}/>
                        }
                    </div>
                }
            </div>
        );
    }
}
XrayMatching.contextType=MyContext;
export default XrayMatching;