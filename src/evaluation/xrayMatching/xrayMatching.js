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

import GetImage from '../pdfImages/getImage';
import html2canvas from 'html2canvas'
import ReportPage1 from '../pdfImages/reportPage1';
import GetImage1 from '../pdfImages/getImage1';
import ChartImage from '../pdfImages/chartImage';


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
            uploaded:false,
         }
         this.reportRef = React.createRef();
         this.chartRef = React.createRef();


    }

    UNSAFE_componentWillMount()
    {

        console.log(this.context.state.Evaluations);
        this.setState({Evaluations:this.context.state.Evaluations,Next:false});
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

    

    uploadpage2 = async () =>
    {
        console.log('in uploadpage2')
        let upload=1;
        const global=this;
        var storage = firebase.storage();
        var storageRef = storage.ref().child('report-images/'+this.context.state.report_id+ " page2");
        let pagetwo=document.getElementsByClassName("chart-image-wrapper")[0];
            await new html2canvas(pagetwo,{
                useCORS: true,
                allowTaint: false,
                letterRendering: true,
                logging:true,
                }).then( async function(canvas2) {
             storageRef.putString(canvas2.toDataURL("image/png"), 'data_url').then( async function(snapshot) {
                snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log('File available at ', downloadURL);
                    upload=upload+1;
                    global.handleAllCheckUpload(upload,downloadURL,global.context.state.Eval.length+2)
                });
                
            });
            return;
        })
        console.log('page 2 uploaded');
        return;
    }

    uploadpage3 = async(number) =>
    {
        const global=this;
        var storage = firebase.storage();
        if(this.context.state.Eval.length.toString()===number.toString())
        {
            let upload=2;
            var storageRef = storage.ref().child('report-images/'+this.context.state.report_id+ " page3");

            await new html2canvas(document.getElementsByClassName("GetImage")[0],{
                useCORS: true,
                allowTaint: false,
                letterRendering: true,
                logging:true,
                }).then(async function(canvas3) {
                     storageRef.putString(canvas3.toDataURL("image/png"), 'data_url').then(async function(snapshot) {
                         snapshot.ref.getDownloadURL().then(function(downloadURL) {
                            console.log('File available at ', downloadURL);
                            upload=upload+1;
                            global.handleAllCheckUpload(upload,downloadURL,global.context.state.Eval.length - number+3)
                            });
                        
                    });
                    return;
                });

            return this.uploadpage3(number-1)
        }

        else if(number > 0)
        {
            
        }

        else return;

        
    }

     handleReportUpload = async () =>
    {
        const global=this;
        var storage = firebase.storage();
        let upload=0;
        var storageRef = storage.ref().child('report-images/'+this.context.state.report_id+ " page1");
        await new html2canvas(document.getElementsByClassName("Report-Page1")[0],{
            useCORS: true,
            allowTaint: false,
            letterRendering: true,
            logging:true,
            }).then( async function(canvas) {
             storageRef.putString(canvas.toDataURL("image/png"), 'data_url').then( async function(snapshot) {
                 snapshot.ref.getDownloadURL().then( function(downloadURL) {
                    console.log('File available at ', downloadURL);
                    upload=upload+1;
                    global.handleAllCheckUpload(upload,downloadURL,1)
                });
                return;
            })
            console.log('uploaded page 1')
            return;
      })

      console.log('after function 1')



    //   await this.uploadpage2();

      console.log('after function 2')




        for(let i=0;i<this.context.state.Eval.length;i++)
        {
            var storageRef = storage.ref().child('report-images/'+this.context.state.report_id+ " page"+(i+2));
            
            if(i==0)
            {
                await new html2canvas(document.getElementsByClassName("GetImage")[0],{
                    useCORS: true,
                    allowTaint: false,
                    letterRendering: true,
                    logging:true,
                    }).then( function(canvas) {
                            storageRef.putString(canvas.toDataURL("image/png"), 'data_url').then( async function(snapshot) {
                                snapshot.ref.getDownloadURL().then(function(downloadURL) {
                                    console.log('File available at ', downloadURL);
                                    upload=upload+1;
                                    global.handleAllCheckUpload(upload,downloadURL,2)
                                });
                    });
                    return;
                })
            }

            else
            {
                await new html2canvas(document.getElementsByClassName("GetImage1")[i-1],{
                    useCORS: true,
                    allowTaint: false,
                    letterRendering: true,
                    logging:true,
                    }).then(function(canvas4) {
                    storageRef.putString(canvas4.toDataURL("image/png"), 'data_url').then(function(snapshot) {
                        snapshot.ref.getDownloadURL().then(function(downloadURL) {
                            console.log('File available at ', downloadURL);
                            upload=upload+1;
                            global.handleAllCheckUpload(upload,downloadURL,i+2)
                          });
                        
                    });
                    return;
                })
            }
        }

        let page4storageRef = storage.ref().child('report-images/'+this.context.state.report_id+ " page"+this.context.state.Eval.length+2);
        let pagetwo=document.getElementsByClassName("chart-image-wrapper")[0];
        await new html2canvas(pagetwo,{
            useCORS: true,
            allowTaint: false,
            letterRendering: true,
            logging:true,
            }).then( async function(canvas2) {
                page4storageRef.putString(canvas2.toDataURL("image/png"), 'data_url').then( async function(snapshot) {
                snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log('File available at ', downloadURL);
                    upload=upload+1;
                    global.handleAllCheckUpload(upload,downloadURL,global.context.state.Eval.length+2)
                });
                
            });
            return;
        })
       
        return ;
        
    }
    handleAllCheckUpload = (uploaded,url,pageNumber)  =>
    {
        let req=this.state.req;
        req.push({visitor_id:this.context.state.report_id,imageURL:url,page_no:pageNumber})
        console.log(uploaded)
        console.log(this.context.state.Eval.length)
        if(uploaded==this.context.state.Eval.length+2)
        {
            PostData1(this.context.baseUrl+'/api/v1/report/image',201,req,this.context.state.token,this.setMeThree)
        }
    }

    setMeThree = () =>
    {
        Next=true;
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
                // this.setState({mountImages:true,loading:true})

                let req=[];
                Evaluation.Xrays.forEach(element => {

                    element.xrays.forEach(ele => {
                        // let id=this.state.Matching.filter(match=>match.Xray_type.id==element.id && match.view.id==ele.id)[0].id;
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

    componentDidUpdate()
    {
        if(this.state.mountImages===true && this.state.uploaded===false)
        {
            this.setState({uploaded:true});
            this.handleReportUpload()
        }                

    }

    setMeTwo = async (response) =>
    {
        if(response.length>0)
        {
            let joint_id=null;
            let priority_id=null;

            if(this.context.state.noOfEvalRemainToUpload>1)
            {
                this.state.Evaluations[this.context.state.activeJointIndex].isEvaluated=true;
                
                console.log('SECOND EVAL');
                console.log(joint_id,'joint_id')
                //load new matching;
                Next=true;
                this.setState({Next:true,Matching:null,loading:false});
            }

            else
            {
                console.log('SINGLE EVAL');
                this.context.evalDone();
                this.setState({mountImages:true})  //this call to handleReportUpload function in componentDidUpdate
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
                            this.state.ActivePage==='Overview' && <Overview Next={Next} Evaluation={this.state.Evaluations.find(eva => eva.joint_id.toString()===Eval.joint_id.toString())} handleClick={(ActiveType,ActiveXray)=>this.handleOverviewClick(ActiveType,ActiveXray)} handleNextClick={this.handleNextClick}/>
                        }
                        {
                            this.state.ActivePage==='Matching' && <Matching  apiKey={this.state.Evaluations.apiKey} Nonce={this.state.Evaluations.Nonce} baseUrl={this.state.Evaluations.baseUrl}  eval={this.state.Evaluations.find(eva => eva.joint_id.toString()===Eval.joint_id.toString())} ActiveTypeIndex={this.state.ActiveTypeIndex}  ActiveXrayIndex={this.state.ActiveXrayIndex} ActiveType={this.state.ActiveType} ActiveXray={this.state.ActiveXray} handleClick={(state,notes)=>this.handleMatchingClick(state,notes)}/>
                        }
                    </div>
                }

                {
                    this.state.mountImages===true?
                    this.context.state.Eval.map((eva,id)=>{
                        if(id==0)
                        { console.log('here')
                            return <GetImage EvaluationId={eva.joint_id.toString()}/>;
                        }
                        return <GetImage1 EvaluationId={eva.joint_id.toString()}/>
    
                        }
                            
                        )
                    :null
                }
               
                
                {
                    this.state.mountImages===true?<ReportPage1 ref={this.reportRef}/>:null
                }
                {
                    this.state.mountImages===true?<ChartImage ref={this.chartRef}/>:null
                }


               
            </div>
        );
    }
}
XrayMatching.contextType=MyContext;
export default XrayMatching;