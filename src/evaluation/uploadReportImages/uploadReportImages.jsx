import React, { Component } from 'react';

import ChartImage from '../pdfImages/chartImage';
import GetImage1 from '../pdfImages/getImage1';
import JointRcpImage from '../pdfImages/JointRcpImage';
import ReportPage1 from '../pdfImages/reportPage1';

import html2canvas from 'html2canvas'
import firebase from '../../helper/firebase';
import PostData1 from '../../Fetch/postData5';

import { SemipolarLoading } from 'react-loadingg';
import MyContext from '../../helper/themeContext';
import { Button } from '@material-ui/core';

import './uploadReportImages.css';
import GetImage from '../pdfImages/getImage';

const TJRPath="Operative Candidate - Total Joint Replacement"
const PJRPath="Operative Candidate - Partial Joint Replacement"
const NOCPath="Non Operative Candidate"
const NOCOIPath="Non Operative Candidate - Operational Injection"

const ptSummaryPages = 5;
var pdfPages = 5;

class UploadReportImages extends Component {
    constructor(props) {
        super(props);
        this.state = {  loading:true,imageMounted:false,startedUploading:false,JointMapArray:[],req:[] }
    }

    componentDidMount()
    {
       this.loadJointsRCP();
    }

    componentDidUpdate()
    {
        if(this.state.imageMounted===true && this.state.startedUploading===false)
        {
            this.setState({startedUploading:true});
            this.handleReportUpload()
        }    
    }

    loadJointsRCP()
    {
        let AllEval = this.context.state.Eval;
        let MatchingEvaluations = this.context.state.Evaluations;
        let Joints = AllEval.length;
        let JointMapArray=[];

        for(let i=0;i<Joints;i++)
        {
            let Evaluation = MatchingEvaluations.find( eva => eva.joint_id.toString() === AllEval[i].joint_id.toString());
            let Score = this.getScore(Evaluation.joint_id);
            let Compartment1 = this.getAggregate(Evaluation.Xrays[0].xrays[0].state,Evaluation.Xrays[0].xrays[1].state)
            let Compartment2 = this.getAggregate(Evaluation.Xrays[1].xrays[0].state,Evaluation.Xrays[1].xrays[1].state)
            let Compartment3 = parseInt(Evaluation.Xrays[2].xrays[0].state);
            
            let {Path} = this.LoadPath(Score,Compartment1,Compartment2,Compartment3);

            JointMapArray.push({ Name:Evaluation.name,Compartment1,Compartment2,Compartment3,Score,Path })
        }

        this.setState({JointMapArray,imageMounted:true})
    }

    LoadPath = (Score,Compartment1,Compartment2,Compartment3) =>
    {
        let Replacement="";
        let Path="";
        if(Score < 74)
        {
            if(Compartment1>2 || Compartment2>2 || Compartment3>2)
            {   
            
                //surgical Candidate Care Pathway
                if( (Compartment1==1 && Compartment2==1) || (Compartment1==1 && Compartment3==1) || (Compartment2==1 && Compartment3==1) )
                {  
                    //Optional Injections - Partial Joint Replacement
                    if(Compartment1>2)
                    {
                        Replacement="Medial"
                    }
                    else if(Compartment2>2)
                    {
                        Replacement="Lateral"
                    }
                    else if(Compartment3>2)
                    {
                        Replacement="Kneecap"
                    }

                    Path=PJRPath + " " + Replacement;
                }

                else
                {
                    //Optional Injections - Total Joint Replacement
                    Path=TJRPath
                }
            }

            else
            {
                //Non Operative Care Pathway
                if(Compartment1>1 || Compartment2>1 || Compartment3>1)
                {
                    //Non Operative Candidate (Operational Injection)
                    Path=NOCOIPath
                }
                else
                {
                    //Non Operative Candidate
                    Path=NOCPath;
                }
            }
        }

        else 
        {
            //Non Operative Care Pathway
            if(Compartment1>1 || Compartment2>1 || Compartment3>1)
            {
                //Non Operative Candidate (Operational Injection)
                Path=NOCOIPath;
            }
            else
            {
                //Non Operative Candidate
                Path=NOCPath;
            }
        }
        return {Path}
    }

    getAggregate = (a,b) =>
    {
        let int1 = parseInt(a)
        let int2 = parseInt(b)
        if(int1 - int2>0)
        {
            return int1;
        }
        else return int2; 
    }

    getScore = (joint_id) =>
    {
        let OverallInterval = 0;
        let SumPain=0;
        let SumStiff=0;
        let SumFunction=0;
        const OverAll = this.context.ChartOverAll();

        let Question1Answer = parseInt(this.context.state.form.find(ques => ques.question_id.toString()==="1" && ques.joint_id.toString()===joint_id.toString()).pro_severity_id);
        if(Question1Answer.toString()!=="NaN")
        {
            SumStiff=Question1Answer - 1;
        }
        else SumStiff=0;

        this.context.state.form.filter(ques=> { if( (parseInt(ques.question_id) > 1 && parseInt(ques.question_id) < 6) && ques.joint_id.toString()===joint_id.toString() )  {  if( parseInt(ques.pro_severity_id).toString()!="NaN"){ SumPain=SumPain+parseInt(ques.pro_severity_id) -1 } } });
        this.context.state.form.filter(ques=> { if( (parseInt(ques.question_id) > 5 && parseInt(ques.question_id) < 8) && ques.joint_id.toString()===joint_id.toString() )  {  if( parseInt(ques.pro_severity_id).toString()!="NaN"){ SumFunction=SumFunction+parseInt(ques.pro_severity_id) -1 } } });

        OverallInterval = Math.round( ( OverAll[SumPain+SumStiff+SumFunction]) * 10)/10; 
        return OverallInterval
    }


    handleReportUpload = async () =>
    {
        const global=this;
        var storage = firebase.storage();
        let upload=0;
        let PRCPages=[];

        console.log(this.state.JointMapArray)

        for(let j=0;j<this.state.JointMapArray.length;j++)
        {
            PRCPages.push({pageType:'live',elementClass:'JointImage',elementId:j})

            if(this.state.JointMapArray[j].Path===NOCOIPath || this.state.JointMapArray[j].Path===NOCOIPath)
            {
                PRCPages.push({pageType:'static',src:'https://firebasestorage.googleapis.com/v0/b/sbs-evaluation.appspot.com/o/static-report-images%2FNoi-Treatments.jpg?alt=media&token=4364d4be-64d1-4ab5-a2a7-6c8e96bd5f06'})
            }

            else if(this.state.JointMapArray[j].Path===TJRPath || this.state.JointMapArray[j].Path===PJRPath)
            {
                PRCPages.push({pageType:'static',src:'https://firebasestorage.googleapis.com/v0/b/sbs-evaluation.appspot.com/o/static-report-images%2FExpected_Outcomes.jpg?alt=media&token=13eb86ac-67f5-46a1-be19-acc133f58435'})
                PRCPages.push({pageType:'static',src:'https://firebasestorage.googleapis.com/v0/b/sbs-evaluation.appspot.com/o/static-report-images%2FSurgical_Oi.jpg?alt=media&token=90bb4e8f-637f-4b3e-a8c0-67df6c10378a'})
            }

        }

        pdfPages = ptSummaryPages + PRCPages.length;
        console.log(pdfPages)
        
        for(let i=0;i<pdfPages;i++)
        {
            let element = null

            if(i==0)
            {
               element = document.getElementsByClassName("Report-Page1")[0]
            }
            else if(i==1)
            {
               element = document.getElementsByClassName("GetImage")[0]
            }
            
            else if(i==2)
            {
               element = document.getElementsByClassName("chart-image-wrapper")[0];
            }

            else if(i==3)
            {
               element = document.getElementsByClassName("GetImage1")[0]
            }

            else if(i==4)
            {
                upload=upload+1;
                global.handleAllCheckUpload(upload,"https://firebasestorage.googleapis.com/v0/b/sbs-evaluation.appspot.com/o/static-report-images%2FPt-Summary-Page-5.jpg?alt=media&token=a13e1fef-e4e6-4af9-9465-b05cbd3d63eb",i+1)
            }



            
            else if(i>4)
            {
                if(PRCPages[i-ptSummaryPages].pageType==="static")                 //PtSummarypages - i = 0
                {
                    upload=upload+1;
                    global.handleAllCheckUpload(upload,PRCPages[i-ptSummaryPages].src,i+1)
                }

                else
                {
                    let elementClass = PRCPages[i-ptSummaryPages].elementClass;
                    let classId = PRCPages[i-ptSummaryPages].elementId;
                    let query=elementClass+classId
                    element = document.getElementsByClassName(query)[0];
                }
            }

            if(element)
            {
                var storageRef = storage.ref().child('report-images/'+this.context.state.report_id+ " page"+(i+1));
                await new html2canvas(element,{
                    useCORS: true,
                    allowTaint: false,
                    letterRendering: true,
                    logging:true,
                    }).then( function(canvas) {
                            storageRef.putString(canvas.toDataURL("image/png"), 'data_url').then( async function(snapshot) {
                                snapshot.ref.getDownloadURL().then(function(downloadURL) {
                                    console.log('File available at ', downloadURL);
                                    upload=upload+1;
                                    global.handleAllCheckUpload(upload,downloadURL,i+1)
                                });
                    });
                    return;
                })
            }
            else
            {
                
            }
        }   
        return ; 
    }
    handleAllCheckUpload = (uploaded,url,pageNumber)  =>
    {
        let req=this.state.req;
        console.log(pageNumber)
        req.push({visitor_id:this.context.state.report_id,imageURL:url,page_no:pageNumber})
        console.log(uploaded)
        console.log(pdfPages)
        if(uploaded==pdfPages)
        {
            PostData1(this.context.baseUrl+'/api/v1/report/image',201,req,this.context.state.token,this.setMeThree)
        }
    }

    setMeThree = () =>
    {
        // Next=true;
        // this.setState({loading:false,Next:true,Matching:null});
        this.context.evalDone();
        this.setState({loading:false})
    }
    render() { 
        return ( 
            <div id="Evaluaion_XrayMatching_Intro_Main_Div">
                {this.state.loading===true?
                    <React.Fragment>
                        <div style={{height:'100vh',width:'100vw'}}> <SemipolarLoading size={"large"} color={'#b4ec51'}/> </div>
                        <ReportPage1 />
                        <GetImage />
                        <GetImage1 />
                        <ChartImage /> 
                        <JointRcpImage JointMapArray={this.state.JointMapArray}/>
                    </React.Fragment>
                :
                <React.Fragment>

                <div className="Evaluation_Upload_Report_Images_Text">
                    Report Pdf Generated...
                </div>

                <div className="Evaluation_Upload_Report_Images_Next_Button_Wrapper">
                    <Button variant="contained" className="Evaluation_Upload_Report_Images_Next_Button" onClick={()=>this.context.history.push('./patient-summary')}> Next </Button>
                </div>

                </React.Fragment>
                
                }
            </div>
               
        );
    }
}
 
UploadReportImages.contextType=MyContext;
export default UploadReportImages;