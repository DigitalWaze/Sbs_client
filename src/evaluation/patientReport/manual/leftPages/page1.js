import React, { Component } from 'react';

import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';


import MyContext from '../../../../helper/themeContext';
class Page1Left extends Component {
    constructor(props) {
        super(props);
        this.state = { Answer1:null}
    }

    
    handleChange = (e) =>
    {
        console.log(e.target.value)
        this.setState({[e.target.name]:e.target.value})
    }

    handleClick = () =>
    {
        // if(this.state.Answer1==null)
        // {
        //     alert('Please choose an appropriate option')
        // }
        // else 
        this.props.handlePageChange();
    }
    render() { 
        const options=[{value:'None',id:1},{value:'Mild',id:2},{value:'Moderate',id:3},{value:'Severe',id:4},{value:'Extreme',id:5}];
        const old= this.context.state.old==true && parseInt(this.context.state.evaluation_stage)>2?true:false;
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

                <div className="Evaluaion_PatientReport_Text2" >
                    <span className="Evaluaion_PatientReport_SubHead2">Stiffness </span> <br/> <span>The following question concerns the amount of joint stiffness you have experienced during the <b>last week </b>in your <span className="red-emphasis"> left </span> knee. Stiffness is a sensation of restriction or slowness in the ease with which you move your <span className="red-emphasis"> left </span> knee joint. </span>
                </div>

                <div className="Evaluaion_PatientReport_Question_Div">
                    1. How severe is your <span className="red-emphasis"> left </span> knee stiffness after first wakening in the morning?
                </div>

                <div className="Evaluaion_PatientReport_Answer1_Div">
                {
                    options.map((option,id) => 
                        <span key={id}>
                            <Radio
                                disabled={old}
                                checked={this.state.Answer1 == option.id}
                                onChange={this.handleChange}
                                value={option.id}
                                name="Answer1"
                                style={{color:'white'}}
                            />
                            <span className="Evaluaion_PatientReport_Answer1_Option">
                                {option.value}
                            </span>
                        </span>
                     )
                }
                </div>

                <div id="Evaluaion_PatientReport_Back_Button_Div">
                    <Button id="Evaluaion_PatientReport_Next_Button" variant="contained" onClick={this.props.handleBack}> Back </Button>
                </div>

                <div id="Evaluaion_PatientReport_Next_Button_Div">
                    <Button id="Evaluaion_PatientReport_Next_Button" variant="contained" onClick={this.handleClick}> Next </Button>
                </div>
               

            </div>
        

        </div> );
    }
}
Page1Left.contextType=MyContext;
export default Page1Left;