import React, { Component } from 'react';

import { Button } from '@material-ui/core';
import MyContext from '../helper/themeContext';

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
                <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={()=> {this.context.setCookie('tutorial-'+this.context.state.user_id,41); this.props.history.push('/tutorials/sbs/welcome')} }> Review the Education </Button>
            </div>
            {/*  */}
            {
                this.context.state.isTutorialCompleted.toString()==='true'?
                    <div className="Evaluation_ResumeEvaluation_Button_Div">
                        <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={()=> {this.context.setCookie('tutorial-'+this.context.state.user_id,41); this.props.history.push('/evaluation/welcome')} }> Evaluate a Patient </Button>
                    </div>
                :null
            }
            

        </div>


    </div> );
    }
}

StartOver.contextType=MyContext;
export default StartOver;