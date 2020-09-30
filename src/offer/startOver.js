import React, { Component } from 'react';

import { Button } from '@material-ui/core';
import MyContext from '../helper/themeContext';

class StartOver extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // componentWillMount()
    // {
    //     let Eval=[];
    //     Eval.push({joint_hurt_id:'11',visitor_id:'39',joint_id:'3',name:'Right Knee',priority_id:2,isEvaluated:false})   // Right Knee
    //     this.context.multipleUpdateValue([{key:'patient_id',value:'4948'},{key:'joint_id',value:'3'},{key:'Eval',value:Eval},{key:'report_id',value:39},{key:'token',value:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU4OTIwNTk4N30.k8ywG7mAJjyGq3lCmCwY-VVBzqvyP_9kmIKufZYIghs'} ])
    //     console.log('here')
    // }
    render() { 
        console.log(this.context.state.Eval)
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