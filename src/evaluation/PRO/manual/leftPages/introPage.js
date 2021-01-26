import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class LeftIntroPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <div>
                <div  id="Evaluaion_PatientReport_Content_Wrapper">
                    <div id="Evaluaion_PatientReport_Heading1_Div">
                        KOOS, JR. KNEE SURVEY  <span className="red-emphasis"> Left Knee </span>
                    </div>

                    <div className="Evaluaion_PatientReport_Text1">
                        <span className="Evaluaion_PatientReport_SubHead1">INSTRUCTIONS: </span> <span>This survey asks for your view about your knee. This information will help us keep track of how you feel about your knee and how well you are able to do your usual activities. </span> <br/>
                        <span>Answer every question by ticking the appropriate box, <u> only </u> one box for each question. If you are unsure about how to answer a question, please give the best answer you can.</span>
                    </div>
                </div>
                <div id="Evaluaion_PatientReport_Back_Button_Div">
                    <Button id="Evaluaion_PatientReport_Next_Button" variant="contained" onClick={this.props.handleBack}> Back </Button>
                </div>

                <div id="Evaluaion_PatientReport_Next_Button_Div">
                    <Button id="Evaluaion_PatientReport_Next_Button" variant="contained" onClick={this.props.handlePageChange}> Next </Button>
                </div>
            </div> );
    }
}
 
export default LeftIntroPage;