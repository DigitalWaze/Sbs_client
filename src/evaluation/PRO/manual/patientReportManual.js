import React, { Component } from 'react';
import MyContext from '../../../helper/themeContext';

import './patientReport.css';
import Page1 from './rightPages/page1';
import Page2 from './rightPages/page2';
import Page3 from './rightPages/page3';
import PostData from '../../../Fetch/postData2';
import { SemipolarLoading } from 'react-loadingg';
import Page1Left from './leftPages/page1';
import Page2Left from './leftPages/page2';
import Page3Left from './leftPages/page3';
import RightIntroPage from './rightPages/rightIntroPage';
import LeftIntroPage from './leftPages/introPage';
import ManualFormWrapper from './ManualFormWrapper';
import ChartShow from '../../../components/chartShow/chartShow';

class PatientReportManual extends Component {
    constructor(props) {
        super(props);
        this.state = { page:0,form:null,loading:true,MultiChart:false,AllJoints:[]}
    }

    UNSAFE_componentWillMount()
    {
        this.setState({totalLeft:this.context.state.Eval.length,active:null,formLoad:{total:this.context.state.Eval.length,active:this.context.state.Eval[this.context.state.activeJointIndex].joint_id,firstDone:false} })
    }

    componentDidMount()
    {
        if(this.context.state.form)
        {
            console.log('mounter',this.context.state.form)
            this.setState({form:this.context.state.form,loading:false})
        }
    }


    handleChange = (e) =>
    {
        this.setState({[e.target.name]:e.target.value})
    }

    changeAnswer(state,value)
    {
        console.log(this.state.active)
        let form=this.state.form;
        form.find((question)=>question.name==state && question.joint_id.toString()==this.state.active.toString()).pro_severity_id=value;
        form.find((question)=>question.name==state && question.joint_id.toString()==this.state.active.toString()).visitor_id=this.context.state.report_id;
    }

    setChartInfoandChangePage()
    {
        let SumPain=0;
        let SumStiff=0;
        let SumFunction=0;

        const OverAll = this.context.ChartOverAll();

        let Question1Answer = parseInt(this.context.state.form.find(ques => ques.question_id.toString()=="1" && ques.joint_id.toString()===this.state.active.toString()).pro_severity_id);
        if(Question1Answer.toString()!=="NaN")
        {
            SumStiff=Question1Answer - 1;
        }
        else SumStiff=0;



        this.context.state.form.filter(ques=> { if( (parseInt(ques.question_id) > 1 && parseInt(ques.question_id) < 6) && ques.joint_id.toString()===this.state.active.toString()) {  if( parseInt(ques.pro_severity_id).toString()!="NaN"){ SumPain=SumPain+parseInt(ques.pro_severity_id) -1 } } });
        this.context.state.form.filter(ques=> { if( (parseInt(ques.question_id) > 5 && parseInt(ques.question_id) < 8) && ques.joint_id.toString()===this.state.active.toString()) {  if( parseInt(ques.pro_severity_id).toString()!="NaN"){ SumFunction=SumFunction+parseInt(ques.pro_severity_id) -1 } } });




        let PainInterval = Math.round(( (1 - SumPain/16) *100) *10) /10;
        let StiffInterval =  Math.round(((1 - SumStiff/4) *100) *10) /10;
        let FunctionInterval = Math.round( ( (1 - SumFunction/8) *100 ) *10)/10;

        console.log(SumPain+SumStiff+SumFunction);

        let OverallInterval = Math.round( ( OverAll[SumPain+SumStiff+SumFunction]) * 10)/10; 

        let JointMapObject = { PainInterval, StiffInterval, FunctionInterval, OverallInterval, joint_id:this.state.active}
        let AllJoints = this.state.AllJoints;
        AllJoints.push(JointMapObject)
        this.setState({page:this.state.page+1 ,JointMapObject,AllJoints});   
    }

    handlePageChange = () =>
    {
        if(this.state.page===3)
        {
            this.setChartInfoandChangePage();
        }

        else this.setState({page:this.state.page+1})   
    }


    handleMulti

    getPageRight = () =>
    {
        switch(this.state.page)
        {
            case 0: return <RightIntroPage handleBack = {this.handleBack0} handlePageChange={this.handlePageChange} />;
            case 1: return <Page1 handleBack = {this.handleBack1} Answer1={this.state.form.find((question)=>question.name=="Question1" && question.joint_id.toString()===this.state.active.toString()).pro_severity_id} handlePageChange={this.handlePageChange} changeAnswer={(state,value)=>this.changeAnswer(state,value)} />;
            case 2: return <Page2 handleBack = {this.handleBack2} Answer2={this.state.form.find((question)=>question.name=="Question2" && question.joint_id.toString()===this.state.active.toString()).pro_severity_id} Answer3={this.state.form.find((question)=>question.name=="Question3" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} Answer4={this.state.form.find((question)=>question.name=="Question4" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} Answer5={this.state.form.find((question)=>question.name=="Question5" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} handlePageChange={this.handlePageChange} changeAnswer={(state,value)=>this.changeAnswer(state,value)}/>;
            case 3: return <Page3 handleBack = {this.handleBack3} Answer6={this.state.form.find((question)=>question.name=="Question6" && question.joint_id.toString()===this.state.active.toString()).pro_severity_id} Answer7={this.state.form.find((question)=>question.name=="Question7" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} handlePageChange={this.handlePageChange} changeAnswer={(state,value)=>this.changeAnswer(state,value)}/>;
            case 4: return <ChartShow  ButtonText = {"NEXT"} JointMapObject={ this.state.JointMapObject } next={this.next}/>;
            default: return <div> Unreachable step</div>;
        }
    }

    getPageLeft = () =>
    {
        switch(this.state.page)
        {
            case 0: return <LeftIntroPage handleBack = {this.handleBack0} handlePageChange={this.handlePageChange} />;
            case 1: return <Page1Left handleBack = {this.handleBack1} Answer1={this.state.form.find((question)=>question.name=="Question1" && question.joint_id.toString()===this.state.active.toString()).pro_severity_id} handlePageChange={this.handlePageChange} changeAnswer={(state,value)=>this.changeAnswer(state,value)} />;
            case 2: return <Page2Left handleBack = {this.handleBack2} Answer2={this.state.form.find((question)=>question.name=="Question2" && question.joint_id.toString()===this.state.active.toString()).pro_severity_id} Answer3={this.state.form.find((question)=>question.name=="Question3" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} Answer4={this.state.form.find((question)=>question.name=="Question4" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} Answer5={this.state.form.find((question)=>question.name=="Question5" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} handlePageChange={this.handlePageChange}  changeAnswer={(state,value)=>this.changeAnswer(state,value)}/>;
            case 3: return <Page3Left handleBack = {this.handleBack3} Answer6={this.state.form.find((question)=>question.name=="Question6" && question.joint_id.toString()===this.state.active.toString()).pro_severity_id} Answer7={this.state.form.find((question)=>question.name=="Question7" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} handlePageChange={this.handlePageChange}  changeAnswer={(state,value)=>this.changeAnswer(state,value)}/>;
            case 4: return <ChartShow ButtonText = {"NEXT"} JointMapObject={ this.state.JointMapObject } next={this.next}/>;
            default: return <div> Unreachable step</div>;
        }
    }

    handleBack0 = () =>
    {
        this.context.history.push('./forms')
    }

    handleBack1 = () =>
    {
        this.setState({page:0})
    }

    handleBack2 = () =>
    {
        this.setState({page:1})
    }

    handleBack3 = () =>
    {
        this.setState({page:2})
    }
    

    next = () =>
    {
        console.log(this.state.form)

        if(this.state.totalLeft==2 && this.state.active !=null)
        {
            let formLoad=this.state.formLoad;
            formLoad.firstDone=true;
            this.setState({active:null,formLoad})
        }


        else if(this.state.totalLeft==2 && this.state.active == null)
        {
            let joint_id=null;
            joint_id = this.context.state.Eval[this.context.state.activeJointIndex+1].joint_id //next eval;
            console.log(joint_id)
            this.setState({totalLeft:1,page:0,active:joint_id})
        }


        else if(parseInt(this.context.state.evaluation_stage)>2)
        {
            // this.context.multipleUpdateValueWithHistory([{key:'Pro',value:true}],'./forms')
            this.context.multipleUpdateValue([{key:'Pro',value:true}]); //it enables next button navigation functionality
            this.setState({active:null})
        }
        
        else
        {
            this.setState({loading:true})
            PostData(this.context.baseUrl+'/api/v1/submit/answers',201,this.state.form,this.context.state.token,this.setMe)
        }
        // this.context.multipleUpdateValueWithHistory([{key:'Pro',value:true},{key:'form',value:this.state.form}],'./forms')
        //updateContext and call Api
    }

    setMe = (response) =>
    {
        if(response.length>0)
        {
            this.context.multipleUpdateValue([{key:'Pro',value:true},{key:'evaluation_stage',value:3},{key:'form',value:this.state.form}]);
            this.setState({loading:false,active:null})
        }
    }

    setActive = (id) =>
    {
        this.setState({active:id})
    }

    render() { 

        return ( 
            //if this.state.form does not exist then loader
            <div id="Evaluaion_PatientReport_Main_Div">
                 {/* {console.log(this.context.state)} */}
                {this.state.loading==true?
                    <SemipolarLoading size={'large'}  color={'#b4ec51'}/>

                :this.state.MultiChart===true? <ChartShowMulti  ButtonText = {"NEXT"} JointMapArray={ this.state.AllJoints } next={this.next}/>
                : this.state.active===null? <ManualFormWrapper formLoad={this.state.formLoad} next={this.next} setActive = { (id) =>this.setActive(id)} />
                : this.state.active.toString()=='3'?
                    this.getPageRight():this.getPageLeft()
                    }
            </div>
        
        );
    }
}
PatientReportManual.contextType=MyContext;
export default PatientReportManual;