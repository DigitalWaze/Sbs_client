import React, { Component } from 'react';

import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';


import '../patientReport.css';
import MyContext from '../../../../helper/themeContext';
class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = { Answer1:null}
    }

    componentDidMount()
    {
        this.setState({Answer1:this.props.Answer1})
    }
    handleChange = (e) =>
    {
        console.log(e.target.value)
        this.setState({[e.target.name]:e.target.value})
    }

    handleClick = () =>
    {
        this.props.changeAnswer('Question1',this.state.Answer1)
        if(this.state.Answer1==null)
        {
            alert('Please choose an appropriate option')
        }
        else this.props.handlePageChange();
    }
    render() { 
        const options=[{value:'None',id:1},{value:'Mild',id:2},{value:'Moderate',id:3},{value:'Severe',id:4},{value:'Extreme',id:5}];
        const old= parseInt(this.context.state.activeEvaluation.stage.id)>2?true:false;
        return ( 
        
        <div>
            <div  id="Evaluaion_PatientReport_Content_Wrapper">
                <div id="Evaluaion_PatientReport_Heading1_Div">
                    KOOS, JR. KNEE SURVEY <span className="red-emphasis"> Right Knee </span>
                </div>

                

                <div className="Evaluaion_PatientReport_Text2" >
                    <span className="Evaluaion_PatientReport_SubHead2">Stiffness </span> <br/> <span>The following question concerns the amount of joint stiffness you have experienced during the <b>last week </b>in your <span className="red-emphasis"> right </span> knee. Stiffness is a sensation of restriction or slowness in the ease with which you move your <span className="red-emphasis"> right </span> knee joint. </span>
                </div>

                <div className="Evaluaion_PatientReport_Question_Div">
                    1. How severe is your <span className="red-emphasis"> right </span> knee stiffness after first wakening in the morning?
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
Page1.contextType=MyContext;
export default Page1;