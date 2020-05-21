import React, { Component } from 'react';

import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';


import './patientReport.css';
import MyContext from '../../../helper/themeContext';
class Page3 extends Component {
    constructor(props) {
        super(props);
        this.state = { Answer6:null,Answer7:null}
    }
    handleChange = (e) =>
    {
        console.log(e.target.value)
        this.setState({[e.target.name]:e.target.value})
    }

    componentDidMount()
    {
        this.setState({Answer6:this.props.Answer6,Answer7:this.props.Answer7})
    }
    

    handleClick = () =>
    {
        this.props.changeAnswer('Question6',this.state.Answer6)
        this.props.changeAnswer('Question7',this.state.Answer7)
        this.props.handlePageChange();
    }
    render() {
        const old= this.context.state.old==true && parseInt(this.context.state.evaluation_stage)>2?true:false; 
        const options=[{value:'None',id:1},{value:'Mild',id:2},{value:'Moderate',id:3},{value:'Severe',id:4},{value:'Extreme',id:5}];
        return ( 
        
        <div>

            <div  id="Evaluaion_PatientReport_Content_Wrapper">
                <div id="Evaluaion_PatientReport_Heading1_Div">
                    KOOS, JR. KNEE SURVEY
                </div>

                <div className="Evaluaion_PatientReport_Text1">
                    <span className="Evaluaion_PatientReport_SubHead2">Function, daily living </span> <br/> 
                    The following questions concern your physical function. By this we mean your ability to move around and to look after yourself. For each of the following activities please indicate the degree of dificulty you have experienced in the <b> last week </b> due to your knee. This survey asks for your view about your knee. This information will help us keep track of how you feel about your knee and how well you are able to do your usual activities.
                </div>


                <div className="Evaluaion_PatientReport_Question_Div">
                    6. Rising from sitting
                </div>

                <div className="Evaluaion_PatientReport_Answer1_Div">
                {
                    options.map((option,id) => 
                        <span key={id}>
                            <Radio
                                disabled={old}
                                checked={this.state.Answer6 == option.id}
                                onChange={this.handleChange}
                                value={option.id}
                                name="Answer6"
                                style={{color:'white'}}
                            />
                            <span className="Evaluaion_PatientReport_Answer1_Option">
                                {option.value}
                            </span>
                        </span>
                     )
                }
                </div>

                <div className="Evaluaion_PatientReport_Question_Div">
                    7. Bending to floor/pick up an object
                </div>

                <div className="Evaluaion_PatientReport_Answer1_Div">
                {
                    options.map((option,id) => 
                        <span key={id}>
                            <Radio
                                disabled={old}
                                checked={this.state.Answer7 == option.id}
                                onChange={this.handleChange}
                                value={option.id}
                                name="Answer7"
                                style={{color:'white'}}
                            />
                            <span className="Evaluaion_PatientReport_Answer1_Option">
                                {option.value}
                            </span>
                        </span>
                     )
                }
                </div>

                <div id="Evaluaion_PatientReport_Next_Button_Div">
                    <Button id="Evaluaion_PatientReport_Next_Button" variant="contained" onClick={this.handleClick}> Next </Button>
                </div>
               

            </div>
        

        </div> );
    }
}
Page3.contextType=MyContext;
export default Page3;