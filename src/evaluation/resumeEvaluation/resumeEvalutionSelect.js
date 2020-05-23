import React, { Component } from 'react';

import './resumeEvaluation.css';
import { Button } from '@material-ui/core';
import { SemipolarLoading } from 'react-loadingg';
import MyContext from '../../helper/themeContext';
import GetData from '../../Fetch/getDataUniversal';

import Xray1 from '../../assets/xray1.jpeg';
import Xray2 from '../../assets/xray2.jpeg';
import Xray3 from '../../assets/xray3.jpeg';
import Xray4 from '../../assets/xray4.png';

class ResumeEvaluationSelect extends Component {
    constructor(props) {
        super(props);
        this.state = { loading:false }
    }

    handleRecover = () =>
    {
        console.log(this.context.state.temp_patient_id)
        this.setState({loading:true})
        GetData(this.context.baseUrl+'/api/v1/get/report',200,this.context.state.token,this.setMe)
    }


    handleRefresh = () =>
    {
        this.setState({loading:true})
        GetData(this.context.baseUrl+'./api/v1/delete/report',200,this.context.state.token,this.setMeTwo)

        // this.context.discardLeft();
        // this.props.history.push('/evaluation/welcome')
    }

    setMeTwo = () =>
    {
        this.context.setCookie('evaluation_stage','',0);
        this.context.setCookie('temp_report_id','',0);
        this.context.setCookie('temp_patient_id','',0);
        this.context.multipleUpdateValueWithHistory([{key:'evaluation_stage',value:null},{key:'temp_report_id',value:null},{key:'temp_patient_id',value:null},{key:'old',value:false}],'/evaluation/welcome');
    }
    
    setMe = (response) =>
    {
        if(response.incomplete_vistor_id!=null && response.incomplete_vistor_id!=undefined && response.incomplete_vistor_id!="" && response.incomplete_vistor_id!=" ")
        {
           //populate all data
            let patient = {};
            patient["name"]=response.patient[0].name;
            patient["birth_date"]=response.patient[0].birthday;
            
            let birthday=response.patient[0].birthday.toString().match(/\d+/g).map(Number);
            let birthday_year=birthday[0];
            let birthday_month=birthday[1];
            let birthday_date=birthday[2];

            patient["birth_date"]=birthday_date+'/'+birthday_month+'/'+birthday_year;

            patient["age"]=response.patient[0].age;
            patient["gender"]=response.patient[0].gender;
            patient["height"]=response.patient[0].height;
            patient["home_phone"]=response.patient[0].homephone;
            patient["cell_phone"]=response.patient[0].cellphone;
            patient["weight"]=response.patient[0].weight;
            patient["home_address"]=response.patient[0].homeaddress;
            patient["email"]=response.patient[0].email;
            patient["marital_status"]=response.patient[0].maritalstatus;

            let mydate=response.patient[0].date.toString().match(/\d+/g).map(Number);
            let mydate_year=mydate[0];
            let mydate_month=mydate[1];
            let mydate_date=mydate[2];

            if(mydate_month.toString().length==1)
            {
                mydate_month='0'+mydate_month;
            }
            
            if(mydate_date.toString().length==1)
            {
                mydate_date='0'+mydate_date;
            }
            patient["date"]=mydate_date+'-'+mydate_month+'-'+mydate_year;

            console.log(patient)
            let temp_report_id=response.incomplete_vistor_id;
            console.log(temp_report_id)
            let temp_patient_id=response.patient[0].id;
            console.log(temp_patient_id)
            
            let Eval=[];
            let active=0;
            let activePriority=0;
            let newForm=[
                {name:'Question1',question_id:1,pro_severity_id:null,visitor_id:null},
                {name:'Question2',question_id:2,pro_severity_id:null,visitor_id:null},
                {name:'Question3',question_id:3,pro_severity_id:null,visitor_id:null},
                {name:'Question4',question_id:4,pro_severity_id:null,visitor_id:null},
                {name:'Question5',question_id:5,pro_severity_id:null,visitor_id:null},
                {name:'Question6',question_id:6,pro_severity_id:null,visitor_id:null},
                {name:'Question7',question_id:7,pro_severity_id:null,visitor_id:null}
            ]
            let Xrays=[];

            if(parseInt(this.context.state.evaluation_stage)>1)
            {
                if(response.joint_hurt_priority.length>0)
                {
                    
                    response.joint_hurt_priority.forEach(element => {
                        let name=null;
                        if(element.joint_id=='3')
                        {
                            name='Right Knee'
                        }
                        else if(element.joint_id=='4')
                        {
                            name='Left Knee'
                        }
                        else if(element.joint_id=='1')
                        {
                            name='Right Hip'
                        }
                        else if(element.joint_id=='2')
                        {
                            name='Left Hip'
                        }
                        if(element.priority_id>activePriority)
                        {
                            activePriority=element.priority_id;
                            active=element.joint_id;
                        }
                        Eval.push({visitor_id:element.visitor_id,joint_id:element.joint_id,name:name,priority_id:element.priority_id,isEvaluated:true,joint_hurt_id:element.id})
                        
                    });


                }
            }

            if(parseInt(this.context.state.evaluation_stage)>2)
            {
                if(response.form.length>0)
                {
                   
                    response.form.forEach(element => {

                        let question=newForm.find(el => el.question_id==element.question_id);
                        question.visitor_id=element.visitor_id;
                        question.pro_severity_id=element.pro_severity_id;
                    });
                }

            }

            if(parseInt(this.context.state.evaluation_stage)>3)
            {
                if(response.Uploaded_xrays.length>0)
                {
                    let RightKnee=false;
                    let LeftKnee=false;

                    Eval.forEach(element => {
                        if(element.name==="Right Knee")
                        {
                            RightKnee=true
                        }
                        else if(element.name==="Left Knee")
                        {
                            LeftKnee=true
                        }
                        
                    });

                    if(RightKnee===true && LeftKnee === true)
                    {
                        
                        Xrays=[
                            {id:12,name:'PA Standing Bilateral Flexion',isDone:true,image:null,thumbnail:Xray1,enable:true},
                            {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:true,image:null,thumbnail:Xray2,enable:true},
                            {id:6,name:'Bilateral Kneecap',isDone:true,image:null,thumbnail:Xray3,enable:true},
                            {id:3,name:'Right Lateral',isDone:true,image:null,thumbnail:Xray3,enable:true},
                            {id:5,name:'Left Lateral',isDone:true,image:null,thumbnail:Xray4,enable:true},

                        ] 
                    }

                    else if(RightKnee==true)
                    {
                        Xrays=[
                            {id:12,name:'PA Standing Bilateral Flexion',isDone:true,image:null,thumbnail:Xray1,enable:true},
                            {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:true,image:null,thumbnail:Xray2,enable:true},
                            {id:2,name:'Right Kneecap',isDone:true,image:null,thumbnail:Xray3,enable:true},
                            {id:3,name:'Right Lateral',isDone:true,image:null,thumbnail:Xray4,enable:true},

                        ] 
                    }

                    else if(LeftKnee==true)
                    {
                        Xrays=[
                            {id:12,name:'PA Standing Bilateral Flexion',isDone:true,image:null,thumbnail:Xray1,enable:true},
                            {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:true,image:null,thumbnail:Xray2,enable:true},
                            {id:4,name:'Left Kneecap',isDone:true,image:null,thumbnail:Xray3,enable:true},
                            {id:5,name:'Left Lateral',isDone:true,image:null,thumbnail:Xray4,enable:true},

                        ] 
                    }
                }
            }

            console.log(newForm)
            this.context.multipleUpdateValueWithHistory([{key:'Xrays',value:Xrays},{key:'form',value:newForm},{key:'Eval',value:Eval},{key:'joint_id',value:active},{key:'activePriority',value:activePriority},{key:'report_id',value:temp_report_id},{key:'patient_id',value:temp_patient_id},{key:'old',value:true},{key:'patient',value:patient}],'/evaluation/demographics')
        }

        
    }
    render() { 
        return (
            
        <div className="Evaluation_ResumeEvaluation_Main_Div">
            { this.state.loading==true?
                <SemipolarLoading size={"large"} color={'#b4ec51'}/>:
                <div className="Evaluation_ResumeEvaluation_Content_Wrapper">
                    <div className="Evaluation_ResumeEvaluation_Heading2_Div">
                        You Have an Ongoing Evaluation
                    </div>
                    <div className="Evaluation_ResumeEvaluation_Text_Div">
                        Would you like to review and complete your current
                        evaluation or start a new evaluation?
                    </div>

                    <div className="Evaluation_ResumeEvaluation_Button_Div">
                        <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={this.handleRecover}> Review and Complete Current Evaluation </Button>
                    </div>
                    <div className="Evaluation_ResumeEvaluation_Button_Div">
                        <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={this.handleRefresh}> Start a New Evaluation </Button>
                    </div>

                </div>
            }


        </div> );
    }
}
ResumeEvaluationSelect.contextType=MyContext;
export default ResumeEvaluationSelect;