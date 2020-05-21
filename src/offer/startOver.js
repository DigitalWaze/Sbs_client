import React, { Component } from 'react';

import { Button } from '@material-ui/core';

class StartOver extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        
        <div className="Evaluation_ResumeEvaluation_Main_Div">
        <div className="Evaluation_ResumeEvaluation_Content_Wrapper">
            <div className="Evaluation_ResumeEvaluation_Heading2_Div">
                What would you like to do?
            </div>
            

            <div className="Evaluation_ResumeEvaluation_Button_Div">
                <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={()=>this.props.history.push('/tutorial/page1')}> Review the Education </Button>
            </div>
            <div className="Evaluation_ResumeEvaluation_Button_Div">
                <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={()=>this.props.history.push('/evaluation/welcome')}> Evaluate a Patient </Button>
            </div>

        </div>


    </div> );
    }
}
 
export default StartOver;