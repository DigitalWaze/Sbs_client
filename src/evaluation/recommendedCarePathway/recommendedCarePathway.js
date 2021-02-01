import { CompareArrows } from '@material-ui/icons';
import React, { Component } from 'react';
import MyContext from '../../helper/themeContext';
import CRM from './CRM';
import JointNoi1 from './JointNoi1';
import JointNoi2 from './JointNoi2';
import JointNoi3 from './JointNoi3';
import JointNoi4 from './JointNoi4';
import JointNoi5 from './JointNoi5';
import JointNoi6 from './JointNoi6';
import JointSummary from './JointSummary';
import JointTreatment from './JointTreatment';
import JPR from './JPR';
import Replacement from './Replacement';
import Welcome from './Welcome';


const TJRPath="TJR"
const PJRPath="PJR"
const NOCPath="NOC"
const NOCOIPath="NOC-OI"


class RecommendedCarePathway extends Component {
    constructor(props) {
        super(props);
        this.state = { NoOfJoints:0,RemainingJointRCP:0,loading:true,page:0 }
    }

    handleFailure = () =>
    {
        alert('Unable to load Patient Recommended Care Pathway')
        this.context.history.push('/home')
    }

    componentDidMount()
    {
        let Evaluations = this.context.state.Evaluations
        if(Evaluations)
        {
            if(Evaluations.length>0)
            {
                if(this.context.state.Eval.length.toString() !== Evaluations.length.toString())
                {
                    this.handleFailure();
                    return;
                }

                this.LoadCurrRCP("Mounter");
            }

            else this.handleFailure();            
        }
        else this.handleFailure();

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
       
        // let PainInterval = Math.round(( (1 - SumPain/16) *100) * 10) /10;
        // let StiffInterval =  Math.round(((1 - SumStiff/4) *100) * 10) /10;
        // let FunctionInterval = Math.round( ( (1 - SumFunction/8) *100 ) * 10)/10;

        OverallInterval = Math.round( ( OverAll[SumPain+SumStiff+SumFunction]) * 10)/10; 
        return OverallInterval
    }


    LoadCurrRCP = (state=null) =>
    {
        let RemainingJointRCP;
        let NoOfJoints = this.context.state.Evaluations.length;
        let Replacement="";
        let Path="";
        let Score=0;
        let Joint_Name=""

        if(state==="Mounter")
        {
            RemainingJointRCP=NoOfJoints;
        }   
        else RemainingJointRCP = this.state.RemainingJointRCP;

        let activeJointIndex=NoOfJoints-RemainingJointRCP;
        let Curr_Joint_id = this.context.state.Eval[activeJointIndex].joint_id;
        let Curr_Evaluation = this.context.state.Evaluations.find(joint => joint.joint_id.toString()===Curr_Joint_id);
        
        if(Curr_Joint_id.toString()==="3")
        {
            Joint_Name="Right Knee"
        }
        else if(Curr_Joint_id.toString()==="4")
        {
            Joint_Name="Left Knee"
        }
        // matching ids => [{name:'Normal to Slight',id:'1'},{name:'Moderate',id:'2'},{name:'Near End Stage',id:'3'},{name:'End Stage',id:'4'},{name:'Cannot Evaluate',id:'5'}].map((text,id)=>
        //compartment levels

        //cannot eval   0
        // normal       1
        //moderate      2
        //nes           3
        //es            4

        let Compartment1 = this.getAggregate(Curr_Evaluation.Xrays[0].xrays[0],Curr_Evaluation.Xrays[0].xrays[1])
        let Compartment2 = this.getAggregate(Curr_Evaluation.Xrays[1].xrays[0],Curr_Evaluation.Xrays[1].xrays[1])
        let Compartment3 = parseInt(Curr_Evaluation.Xrays[2].xrays[0]);
        Score  = this.getScore(Curr_Joint_id);
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

                    Path=PJRPath
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
        this.setState({loading:false,Replacement,Path,Score,Compartment1,Compartment2,Compartment3})
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

    
    getNocPages = () =>
    {
        switch(this.state.page)
        {
            case 0: return <Welcome handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} handleReviewClick={this.handleReviewClick} />;
            case 1: return <CRM handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} />;
            case 2: return <JointSummary Joint_Name={this.state.Joint_Name} Score={this.state.Score} Compartment1={this.state.Compartment1} Compartment2={this.state.Compartment2} Compartment3={this.state.Compartment3} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} />;
            case 3: return <JointTreatment Joint_Name={this.state.Joint_Name} Recommendation="NOC" Score={this.state.Score} Compartment1={this.state.Compartment1} Compartment2={this.state.Compartment2} Compartment3={this.state.Compartment3} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} />;
            case 4: return <JointNoi1  Noi={[]} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick}/>;
            default: return <div> Unreachable step</div>;
        }  
    }

    getNocOiPages = () =>
    {
        switch(this.state.page)
        {
            case 0: return <Welcome handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} handleReviewClick={this.handleReviewClick} />;
            case 1: return <CRM handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} />;
            case 2: return <JointSummary Score={this.state.Score} Compartment1={this.state.Compartment1} Compartment2={this.state.Compartment2} Compartment3={this.state.Compartment3} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} />;
            case 3: return <JointTreatment Recommendation="NOC" Score={this.state.Score} Compartment1={this.state.Compartment1} Compartment2={this.state.Compartment2} Compartment3={this.state.Compartment3} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} />;
            case 4: return <JointNoi2  Noi={[]} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick}/>;
            default: return <div> Unreachable step</div>;
        }  
    }

    getTjrPages = () =>
    {
        switch(this.state.page)
        {
            case 0: return <Welcome handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} handleReviewClick={this.handleReviewClick} />;
            case 1: return <CRM handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} />;
            case 2: return <JointSummary Score={this.state.Score} Compartment1={this.state.Compartment1} Compartment2={this.state.Compartment2} Compartment3={this.state.Compartment3} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} />;
            case 3: return <JointTreatment Recommendation="OC" Score={this.state.Score} Compartment1={this.state.Compartment1} Compartment2={this.state.Compartment2} Compartment3={this.state.Compartment3} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} />;
            case 4: return <Replacement Recommendation="TKR" Score={this.state.Score} Compartment1={this.state.Compartment1} Compartment2={this.state.Compartment2} Compartment3={this.state.Compartment3} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} />;
            case 5: return <JointNoi3  Noi={[]} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick}/>;
            case 6: return <JointNoi4  Noi={[]} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick}/>;
            default: return <div> Unreachable step</div>;
        }  
    }

    getPjrPages = () =>
    {
        switch(this.state.page)
        {
            case 0: return <Welcome handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} handleReviewClick={this.handleReviewClick} />;
            case 1: return <CRM handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} />;
            case 2: return <JointSummary Score={this.state.Score} Compartment1={this.state.Compartment1} Compartment2={this.state.Compartment2} Compartment3={this.state.Compartment3} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} />;
            case 3: return <JointTreatment Recommendation="OC" Score={this.state.Score} Compartment1={this.state.Compartment1} Compartment2={this.state.Compartment2} Compartment3={this.state.Compartment3} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} />;
            case 4: return <Replacement Recommendation="PKR" Score={this.state.Score} Compartment1={this.state.Compartment1} Compartment2={this.state.Compartment2} Compartment3={this.state.Compartment3} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} />;
            case 5: return <JPR Replacement={this.state.Replacement} Score={this.state.Score} Compartment1={this.state.Compartment1} Compartment2={this.state.Compartment2} Compartment3={this.state.Compartment3} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick} />;
            case 6: return <JointNoi5  Noi={[]} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick}/>;
            case 7: return <JointNoi6  Noi={[]} handleBackClick = {this.handleBackClick} handleNextClick={this.handleNextClick}/>;
            default: return <div> Unreachable step</div>;
        }  
    }


    handleBackClick = () =>
    {
        if(this.state.page===0)
        {
            this.context.history.push('/patient-summary')
            return;
        }

        else 
        {
            let newPage = this.state.page-1;
            this.setState({page:newPage})
        }
    }

    handleNextClick = () =>
    {
        let newPage = this.state.page+1;
        this.setState({page:newPage})
    }

    handleReviewClick = () =>
    {
        //go to review education page
    }

    render() { 
        return ( 
            this.state.loading===false?
                this.state.Path===NOCPath?this.getNocPages()
            :   this.state.Path===NOCOIPath?this.getNocOiPages()
            :   this.state.Path===TJRPath?this.getTjrPages()
            :   this.state.Path===PJRPath?this.getPjrPages()
            :
            // unknown path block
            <div>

            </div>
            : //loading block
            <div>

            </div>
           
        );
    }
}
 
RecommendedCarePathway.contextType=MyContext;
export default RecommendedCarePathway;