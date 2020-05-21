import React, { Component } from 'react';

import Introduction from './intro';
import EvalName from './evalName';
import Overview from './overview';
import Matching from './matching';
import firebase from '../../helper/firebase';







import './xrayMatching.css';
import MyContext from '../../helper/themeContext';
import GetData from '../../Fetch/getData1';
import { SemipolarLoading } from 'react-loadingg';
import PostData from '../../Fetch/postData4';
import PostData1 from '../../Fetch/postData5';

import GetImage from '../report/getImage';
import html2canvas from 'html2canvas'


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
            req:[]
         }
    }

    componentWillMount()
    {
        if(!this.context.state.Matching || this.context.state.Matching==null || this.context.state.Matching.length<1 )
        {
            let req={
                visitor_id:this.context.state.report_id,
                joint_hurt_id:this.context.state.Eval.filter(e => e.joint_id==this.context.state.joint_id.toString())[0].joint_hurt_id
            }
            console.log(req);
            console.log(this.context.state.Evaluations,'Evaluations')
            console.log(this.context.state.joint_id,'joint_id')
            this.setState({loading:true,Evaluations:this.context.state.Evaluations,Matching:null});
            GetData(this.context.baseUrl+'/api/v1/processed/xrays',200,req,this.context.state.token,this.setMe)
        }
        else this.setState({Evaluations:this.context.state.Evaluations,loading:false,Matching:this.context.state.Matching})
    }

    setMe = (response) =>
    {
        console.log(response);
        if(response.length>0)
        {
            this.setState({loading:false,Matching:response})

        }
        else { alert('Error! Please try again later.')}
        
    }

     handleReportUpload = async () =>
    {
        const global=this;
        var storage = firebase.storage();
        let upload=0;

        // newelement=document.getElementById("GetImage").cloneNode(true);
        for(let i=0;i<this.context.state.Eval.length;i++)
        {
            let newelement = document.createElement("div");
            var storageRef = storage.ref().child('report-images/'+this.context.state.report_id+ " page"+(i+2));
            newelement=document.getElementsByClassName("GetImage")[i];
            console.log(newelement)
            await html2canvas(newelement).then(function(canvas) {
                console.log( canvas.toDataURL("image/png"));
                storageRef.putString(canvas.toDataURL("image/png"), 'data_url').then(function(snapshot) {
                    snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        console.log('File available at ', downloadURL);
                        upload=upload+1;
                        global.handleAllCheckUpload(upload,downloadURL,i+2)
                      });
                    
                });
                return;
            });

        }
        return ;
        
    }
    handleAllCheckUpload = (uploaded,url,pageNumber)  =>
    {
        let req=this.state.req;
        req.push({visitor_id:this.context.state.report_id,imageURL:url,page_no:pageNumber})
        console.log(uploaded)
        console.log(this.context.state.Eval.length)
        if(uploaded==this.context.state.Eval.length)
        {
            PostData1(this.context.baseUrl+'/api/v1/report/image',201,req,this.context.state.token,this.setMeThree)
        }
    }

    setMeThree = () =>
    {
        this.setState({loading:false,Next:true,Matching:null});
    }

    downloadURI(uri, name) {
        var link = document.createElement("a");
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
       
      }



    handleEvalChange = (state,notes) =>
    {
        let Evaluations=this.state.Evaluations;
        let Evaluation=Evaluations.filter(Eval => Eval.joint_id==this.context.state.joint_id.toString())[0];
        let type=Evaluation.Xrays.find(type => type.name===this.state.ActiveType)
        let Xray=type.xrays.find(xray => xray.name===this.state.ActiveXray)
        Xray.state=state;
        Xray.notes=notes;
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
        let Evaluations=this.state.Evaluations;
        let Evaluation=Evaluations.filter(Eval => Eval.joint_id==this.context.state.joint_id.toString())[0];
        let ActiveTypeIndex=Evaluation.Xrays.findIndex(ev=>ev.name==ActiveType);
        let ActiveXrayIndex=Evaluation.Xrays[ActiveTypeIndex].xrays.findIndex(eva=>eva.name==ActiveXray);
        console.log(ActiveTypeIndex,'ActiveTypeIndex')
        console.log(ActiveXrayIndex,'ActiveXrayIndex')
        this.setState({ActivePage:'Matching',ActiveType,ActiveXray,ActiveXrayIndex,ActiveTypeIndex})
    }
    handleMatchingClick = (state,notes) =>
    {
        let Evaluations=this.state.Evaluations;
        let Evaluation=Evaluations.filter(Eval => Eval.joint_id==this.context.state.joint_id.toString())[0];
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
                let Evaluation=this.state.Evaluations.filter(Eval => Eval.joint_id==this.context.state.joint_id.toString())[0];
                Evaluation.Xrays.forEach(element => {

                    element.xrays.forEach(ele => {
                        let id=this.state.Matching.filter(match=>match.Xray_type.id==element.id && match.view.id==ele.id)[0].id;
                        let reqObject={processed_xray_id:id,xray_matching_id:ele.state,notes:ele.notes};
                        req.push(reqObject);
                    });
                    
                    // let reqObject={processed_xray_id=}
                });
                this.setState({loading:true})
                PostData(this.context.baseUrl+'/api/v1/evaluate/xrays',201,req,this.context.state.token,this.setMeTwo)

                console.log(req);
                // this.setState({Next:true})
            }
            

        }
        // console.log(Evaluation);

        this.setState({ActivePage:'Overview'})
    }

    setMeTwo = async (response) =>
    {
        if(response.length>0)
        {
            let joint_id=null;
            let priority_id=null;
            if(this.context.state.Eval.length>1)
            {
                this.context.state.Eval.filter(eva=>eva.joint_id==this.context.state.joint_id.toString())[0].isEvaluated=true;
                let joint_idall=this.context.state.Eval.filter(eva=>eva.joint_id!=this.context.state.joint_id.toString() && eva.isEvaluated==false);
                if(joint_idall.length>0)
                {joint_id=joint_idall[0].joint_id;}
                let priority_idall=this.context.state.Eval.filter(eva=>eva.joint_id!=this.context.state.joint_id.toString() && eva.isEvaluated==false);
                if(priority_idall.length>0)
                {priority_id=priority_idall[0].priority_id;}
            }

            console.log(joint_id,'joint_id')
            if(!joint_id || joint_id==null)
            {
                console.log('SINGLE EVAL');
                this.context.evalDone();
                await this.handleReportUpload();
            }

            else
            {
                console.log('SECOND EVAL');
                console.log(joint_id,'joint_id')
                //load new matching;
                this.context.multipleUpdateValue([{key:'joint_id',value:joint_id},{key:'activePriority',value:priority_id}])
                
                let req={
                    visitor_id:this.context.state.report_id,
                    joint_hurt_id:this.context.state.Eval.filter(e => e.joint_id==joint_id.toString())[0].joint_hurt_id
                }
                this.setState({Next:false,Matching:null,ActivePage:'EvalName',ActiveType:null,ActiveXray:null})
                
                GetData(this.context.baseUrl+'/api/v1/processed/xrays',200,req,this.context.state.token,this.setMe)
            }
        }
        else {alert('Error! Please try again later.')}
    }
    handleNextClick = async () =>
    {
        // this.context.updateValue('Evaluations',this.state.Evaluations)
        // this.context.history.push('./report')
        // await this.handleReportUpload();
        this.context.updateSession();
        this.context.multipleUpdateValueWithHistory([{key:'Evaluations',value:this.state.Evaluations}],'./report')
    }

    render() { 
        return ( 
            <div id="Evaluaion_XrayMatching_Intro_Main_Div">
                {this.state.loading===true?<SemipolarLoading size={"large"} color={'#b4ec51'}/>
            
            
                :   <div>
                    {console.log(this.state.Evaluations.filter(Eval => Eval.joint_id==this.context.state.joint_id.toString())[0])}
                        {   
                            this.state.ActivePage==='Intro' && <Introduction handleClick={this.handleIntroClick}/>
                        }
                        {
                            this.state.ActivePage==='EvalName' && <EvalName eval={this.state.Evaluations.filter(Eval => Eval.joint_id==this.context.state.joint_id.toString())[0]} handleClick={this.handleEvalClick}/>
                        }
                        {
                            this.state.ActivePage==='Overview' && <Overview Next={this.state.Next} Evaluation={this.state.Evaluations.filter(Eval => Eval.joint_id==this.context.state.joint_id.toString())[0]} handleClick={(ActiveType,ActiveXray)=>this.handleOverviewClick(ActiveType,ActiveXray)} handleNextClick={this.handleNextClick}/>
                        }
                        {
                            this.state.ActivePage==='Matching' && <Matching   eval={this.state.Evaluations.filter(Eval => Eval.joint_id==this.context.state.joint_id.toString())[0]} ActiveTypeIndex={this.state.ActiveTypeIndex}  ActiveXrayIndex={this.state.ActiveXrayIndex} ActiveType={this.state.ActiveType} ActiveXray={this.state.ActiveXray} handleClick={(state,notes)=>this.handleMatchingClick(state,notes)}/>
                        }
                    </div>
                }
               
               {
                   this.context.state.Eval.map((eva,id)=>
                        <GetImage className={"GetImage"} EvaluationId={eva.joint_id.toString()}/>
                   )
               }
            </div>
        );
    }
}
XrayMatching.contextType=MyContext;
export default XrayMatching;