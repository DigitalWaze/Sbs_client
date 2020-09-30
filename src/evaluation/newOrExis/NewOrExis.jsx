import React, { Component } from 'react';

// import './resumeEvaluation.css';
import { Button } from '@material-ui/core';
import GetData from '../../Fetch/getDataUniversal';
import MyContext from '../../helper/themeContext';
import './NewOrExis.css'
import SemipolarLoading from 'react-loadingg/lib/SemipolarLoading';


class NewOrExis extends Component {
    constructor(props) {
        super(props);
        this.state = { loading:false }
    }



    handleDelete = () =>
    {
        //call api to delete eva
        //navigate to offer
        
        this.setState({loading:true})
        GetData(this.context.baseUrl+'./api/v1/delete/report',200,this.context.state.token,this.setMe)
    }

    setMe = () =>
    {
        this.context.setCookie('evaluation_stage','',0);
        this.context.setCookie('temp_report_id','',0);
        this.context.setCookie('temp_patient_id','',0);
        this.context.multipleUpdateValueWithHistory([{key:'evaluation_stage',value:null},{key:'temp_report_id',value:null},{key:'temp_patient_id',value:null},{key:'old',value:false}],'/start-over');
    }
    render() { 
        return ( 
            
        <div className="Evaluation_ResumeEvaluation_Main_Div">
            
            <div className="Evaluation_ResumeEvaluation_Content_Wrapper">
    
                <div className="Evaluation_ResumeEvaluation_Text_Div">
                    Is this a new patient or existing patient?
                </div>

                <div className="Evaluation_ResumeEvaluation_Button_Div">
                    <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={()=>this.props.history.push('./demographics')}> New Patient </Button>
                </div>
                <div className="Evaluation_ResumeEvaluation_Button_Div">
                    <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" disabled={true} style={{opacity:'0.5'}}> Existing Patient </Button>
                </div>

                <div className="new-or-exis-back-button-div">
                    <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={()=>this.props.history.push('./welcome')} > Back </Button>
                </div>

            </div>

           
            


        </div> );
    }
}
NewOrExis.contextType=MyContext;
export default NewOrExis;