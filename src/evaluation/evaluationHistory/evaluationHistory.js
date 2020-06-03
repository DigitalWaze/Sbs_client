import React, { Component } from 'react';

import Button from '@material-ui/core/Button';


import './evaluationHistory.css';
import MyContext from '../../helper/themeContext';
class EvaluationHistory extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    handleClick = () =>
    {
        this.context.clearEvalState();
        this.context.history.push('./welcome')
    }

    

    
    render() { 
        return ( 
        
        <div id="Evaluaion_PatientReport_Main_Div">
            <div  id="Evaluaion_PatientReport_Content_Wrapper">
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
                

                   
                </div>
                {/* <div className="Evaluaion_PatientReport_Text1">
                    <span className="Evaluaion_PatientReport_SubHead1">INSTRUCTIONS: </span> <span>This survey asks for your view about your knee. This information will help us keep track of how you feel about your knee and how well you are able to do your usual activities. </span> <br/>
                    <span>Answer every question by ticking the appropriate box, <u> only </u> one box for each question. If you are unsure about how to answer a question, please give the best answer you can.</span>
                </div>

                <div className="Evaluaion_PatientReport_Text2" >
                    <span className="Evaluaion_PatientReport_SubHead2">Stiffness </span> <br/> <span>The following question concerns the amount of joint stiffness you have experienced during the <b>last week </b>in your <span className="red-emphasis"> right </span> knee. Stiffness is a sensation of restriction or slowness in the ease with which you move your <span className="red-emphasis"> right </span> knee joint. </span>
                </div>

                <div className="Evaluaion_PatientReport_Question_Div">
                    1. How severe is your <span className="red-emphasis"> right </span> knee stiffness after first wakening in the morning?
                </div> */}

{/* this.context.clearEvalState(); */}
                

                <div id="Evaluaion_PatientReport_Back_Button_Div">
                    <Button id="Evaluaion_PatientReport_Next_Button" variant="contained" onClick={()=>this.context.history.goBack()}> Back </Button>
                </div>

                <div id="Evaluaion_PatientReport_Next_Button_Div">
                    <Button id="Evaluaion_PatientReport_Next_Button" variant="contained" onClick={this.handleClick}> New Evaluation </Button>
                </div>
               

            </div>
        

        </div> );
    }
}
EvaluationHistory.contextType=MyContext;
export default EvaluationHistory;