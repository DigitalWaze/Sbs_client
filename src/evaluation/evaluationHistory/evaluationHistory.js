import React, { Component } from 'react';

import Button from '@material-ui/core/Button';


import './evaluationHistory.css';
import MyContext from '../../helper/themeContext';
import GetData from '../../Fetch/getDataUniversal';
import { SemipolarLoading } from 'react-loadingg';
class EvaluationHistory extends Component {
    constructor(props) {
        super(props);
        this.state = { loading:true,rows:[] }
    }

    handleClick = () =>
    {
        this.context.clearEvalState();
        this.context.history.push('./welcome')
    }

    componentDidMount()
    {
        GetData(this.context.baseUrl+'/api/v1/user/reports',400,this.context.state.token,this.setMe);
    }

    setMe = (response) =>
    {
        if(response.length>0)
        {
            let rows=[];
            response.forEach(element => {
            let mydate=element.patient[0].date.toString().match(/\d+/g).map(Number);
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
            let newdate=mydate_date+'-'+mydate_month+'-'+mydate_year;
                rows.push({patient_id:element.patient[0].id,patient_name:element.patient[0].name,evaluation_date:newdate,report_id:element.id})
            });

            this.setState({rows,loading:false})
        }

        else this.setState({loading:false})

    }

    handleViewReport = (report_id) =>
    {
        this.context.multipleUpdateValueWithHistory([{key:'random_report_id',value:report_id}],'./selected-patient-report')
    }

    

    
    render() { 
        return ( 
        
        <div id="Evaluaion_PatientReport_Main_Div">
            {this.state.loading==true?
            <SemipolarLoading size={'large'}  color={'#b4ec51'}/>
            :
            <div  id="Evaluaion_PatientReport_Content_Wrapper" style={{justifyContent:'flex-start'}}>
                <div id="Evaluaion_PatientReport_Heading1_Div">
                   Select a Report to View
                </div>
                
                <div id="Evalution_History_Table_Wrapper" style={{width:'80vw'}}>
                
                <div id="Evalution_History_Table_Head">
                    <div style={{width:'200px',display:'inline-block',marginRight:'20px'}}>
                        Patient Name
                    </div>
                    <div style={{width:'200px',display:'inline-block',marginRight:'20px'}}>
                        Date of Evaluation
                    </div>
                    <div style={{width:'200px',display:'inline-block',marginRight:'20px'}}>
                    </div>

                </div>

                <div id="Evalution_History_Table_Line" style={{width:'100%',height:'2px',background:'#ffffff'}}>
                    
                </div>

                <div id="Evalution_History_Table_Body">
                {
                    this.state.rows.map((row,id)=>
                    <div className="Evalution_History_Table_Body_Row">
                        <div className="Evalution_History_Table_Body_Text" style={{width:'200px',display:'inline-block',marginRight:'20px'}}>
                            {row.patient_name}
                        </div>
                        <div className="Evalution_History_Table_Body_Text" style={{width:'200px',display:'inline-block',marginRight:'20px'}}>
                            {row.evaluation_date}
                        </div>
                        <div style={{width:'200px',display:'inline-block',marginRight:'20px'}}>
                            <Button className="Evaluaion_History_Button"  variant="contained" onClick={()=>{this.handleViewReport(row.report_id)}}> View Report </Button>
                        </div>

                        <div style={{width:'200px',display:'inline-block',marginRight:'20px'}}>
                            <Button className="Evaluaion_History_Button"  variant="contained"> Suggested Care Pathway </Button>
                        </div>


                    </div>)
                }
                   
                </div>
                

                   
                </div>
                
                

                <div id="Evaluaion_PatientReport_Back_Button_Div">
                    <Button id="Evaluaion_PatientReport_Next_Button" variant="contained" onClick={()=>this.context.history.goBack()}> Back </Button>
                </div>

                <div id="Evaluaion_PatientReport_Next_Button_Div">
                    <Button id="Evaluaion_PatientReport_Next_Button" variant="contained" onClick={this.handleClick}> New Evaluation </Button>
                </div>
               

            </div>
            }
        

        </div> );
    }
}
EvaluationHistory.contextType=MyContext;
export default EvaluationHistory;