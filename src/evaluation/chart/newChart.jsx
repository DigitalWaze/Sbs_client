import React, { Component } from 'react';
import ChartShow from '../../components/chartShow/chartShow';
import MyContext from '../../helper/themeContext';

class ChartJs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    

    UNSAFE_componentWillMount()
    {
        let JointMapArray;        
        let SumPain=0;
        let SumStiff=0;
        let SumFunction=0;

        const OverAll = this.context.ChartOverAll();

        let Question1Answer = parseInt(this.context.state.form.find(ques => ques.question_id.toString()=="1" && ques.joint_id.toString()===this.context.state.Eval[0].joint_id.toString()).pro_severity_id);
        if(Question1Answer.toString()!=="NaN")
        {
            SumStiff=Question1Answer - 1;
        }
        else SumStiff=0;

        this.context.state.form.filter(ques=> { if( (parseInt(ques.question_id) > 1 && parseInt(ques.question_id) < 6) && ques.joint_id.toString()===this.context.state.Eval[0].joint_id.toString() )  {  if( parseInt(ques.pro_severity_id).toString()!="NaN"){ SumPain=SumPain+parseInt(ques.pro_severity_id) -1 } } });
        this.context.state.form.filter(ques=> { if( (parseInt(ques.question_id) > 5 && parseInt(ques.question_id) < 8) && ques.joint_id.toString()===this.context.state.Eval[0].joint_id.toString() ){  if( parseInt(ques.pro_severity_id).toString()!="NaN"){ SumFunction=SumFunction+parseInt(ques.pro_severity_id) -1 } } });
       
        let PainInterval = Math.round(( (1 - SumPain/16) *100) * 10) /10;
        let StiffInterval =  Math.round(((1 - SumStiff/4) *100) * 10) /10;
        let FunctionInterval = Math.round( ( (1 - SumFunction/8) *100 ) * 10)/10;

        let OverallInterval = Math.round( ( OverAll[SumPain+SumStiff+SumFunction]) * 10)/10; 

        JointMapArray=[{joint_id:this.context.state.Eval[0].joint_id,PainInterval,StiffInterval,FunctionInterval,OverallInterval}];
        

        let priorityJoin = this.context.state.Eval[0].joint_id;
        for(let i=1;i<this.context.state.Eval.length;i++)
        {
            let TempJointMapArray=[];
            let NewSumPain=0;
            let NewSumStiff=0;
            let NewSumFunction=0;

            let NewQuestion1Answer = parseInt(this.context.state.form.find(ques => ques.question_id.toString()=="1" && ques.joint_id.toString()===this.context.state.Eval[i].joint_id.toString()).pro_severity_id);
            if(NewQuestion1Answer.toString()!=="NaN")
            {
                NewSumStiff=NewQuestion1Answer - 1;
            }

            else NewSumStiff=0;

            this.context.state.form.filter(ques=> { if( (parseInt(ques.question_id) > 1 && parseInt(ques.question_id) < 6) && ques.joint_id.toString()===this.context.state.Eval[i].joint_id.toString() )  {  if( parseInt(ques.pro_severity_id).toString()!="NaN"){ NewSumPain=NewSumPain+parseInt(ques.pro_severity_id) - 1 } } });
            this.context.state.form.filter(ques=> { if( (parseInt(ques.question_id) > 5 && parseInt(ques.question_id) < 8) && ques.joint_id.toString()===this.context.state.Eval[i].joint_id.toString() )  {  if( parseInt(ques.pro_severity_id).toString()!="NaN"){ NewSumFunction=NewSumFunction+parseInt(ques.pro_severity_id) - 1 } } });
 

            let NewPainInterval =  Math.round( ((1 - NewSumPain/16) *100 ) *10 ) / 10;
            let NewStiffInterval =  Math.round( ((1 - NewSumStiff/4) *100 ) * 10)/10;
            let NewFunctionInterval = Math.round( ((1 - NewSumFunction/8) *100) * 10) /10;
            let NewOverallInterval = Math.round( (OverAll[NewSumPain+NewSumStiff+NewSumFunction]) *10)/10; 
            let NewJointObject={joint_id:this.context.state.Eval[i].joint_id,PainInterval:NewPainInterval,StiffInterval:NewStiffInterval,FunctionInterval:NewFunctionInterval,OverallInterval:NewOverallInterval};
            if(this.context.state.Eval[i].priority_id<this.context.state.Eval.find(evalu=> evalu.joint_id==priorityJoin).priority_id)  //push in a ascending order
            {

                TempJointMapArray.push(NewJointObject,...JointMapArray);
                JointMapArray=TempJointMapArray;
            }
            else JointMapArray.push(NewJointObject);
        }

        let NextButtonText = "";

        if(this.context.state.Eval.length > 1)
        {
            if(JointMapArray[0].joint_id.toString()==='3')
                NextButtonText = 'View Left PRO Report Card'

            else NextButtonText = "View Right PRO Report Card";

        }
 
        else NextButtonText = "Next";

        this.setState({totalLeft:this.context.state.Eval.length,JointMapArray,NextButtonText })
    }
    

    next = () =>
    {
        if(this.state.totalLeft==2)
        {
            let joint_id=null;
            if(this.context.state.joint_id=='3')
            {
                joint_id='4'
            }

            else  joint_id='3'
            this.setState({totalLeft:1,active:joint_id,NextButtonText:"Next"})
        }

        else this.context.history.push('./upload-report-images')
    }

    render() { 
        return (
            
            
        <div>


            <ChartShow ButtonText={this.state.NextButtonText} JointMapObject={this.state.JointMapArray[this.state.JointMapArray.length - this.state.totalLeft]} next={this.next}/>

        </div> );
    }
}
 
ChartJs.contextType=MyContext;
export default ChartJs;