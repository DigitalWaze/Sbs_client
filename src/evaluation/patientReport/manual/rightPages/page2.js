import React, { Component } from 'react';

import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';


import '../patientReport.css';
import MyContext from '../../../../helper/themeContext';
class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = { Answer2:null,Answer3:null,Answer4:null,Answer5:null }
    }
    handleChange = (e) =>
    {
        this.setState({[e.target.name]:e.target.value})
    }
    componentDidMount()
    {
        this.setState({Answer2:this.props.Answer2,Answer3:this.props.Answer3,Answer4:this.props.Answer4,Answer5:this.props.Answer5})
    }
    handleClick = () =>
    {
        this.props.changeAnswer('Question2',this.state.Answer2)
        this.props.changeAnswer('Question3',this.state.Answer3)
        this.props.changeAnswer('Question4',this.state.Answer4)
        this.props.changeAnswer('Question5',this.state.Answer5)
        if(this.state.Answer2==null || this.state.Answer3==null ||this.state.Answer4==null ||this.state.Answer5==null)
        {
            alert('Please choose an appropriate option')
        }
        else this.props.handlePageChange();

    }
    render() { 
        const old=  parseInt(this.context.state.evaluation_stage)>2?true:false;

        return ( 
        
        <div>

            <div  id="Evaluaion_PatientReport_Content_Wrapper">
                <div id="Evaluaion_PatientReport_Heading1_Div">
                    KOOS, JR. KNEE SURVEYS <span className="red-emphasis"> Right Knee </span>
                </div>

                <div className="Evaluaion_PatientReport_Text1">
                    <span className="Evaluaion_PatientReport_SubHead2">Pain</span> <br/>
                    What amount of <span className="red-emphasis"> right </span> knee pain have you experienced the <b> last week </b>during the following activities?
                </div>

               

                <div className="Evaluaion_PatientReport_Question_Div">
                    2. Twisting/pivoting on your knee
                </div>

                <div className="Evaluaion_PatientReport_Answer1_Div">
                {
                    [{value:'None',id:1},{value:'Mild',id:2},{value:'Moderate',id:3},{value:'Severe',id:4},{value:'Extreme',id:5}].map((option,id) => 
                        <span key={id}>
                            <Radio
                                disabled={old}
                                checked={this.state.Answer2 == option.id}
                                onChange={this.handleChange}
                                value={option.id}
                                name="Answer2"
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
                    3. Straightening knee fully
                </div>

                <div className="Evaluaion_PatientReport_Answer1_Div">
                {
                    [{value:'None',id:1},{value:'Mild',id:2},{value:'Moderate',id:3},{value:'Severe',id:4},{value:'Extreme',id:5}].map((option,id) => 
                        <span key={id}>
                            <Radio
                                disabled={old}
                                checked={this.state.Answer3 == option.id}
                                onChange={this.handleChange}
                                value={option.id}
                                name="Answer3"
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
                    4. Going up or down stairs
                </div>

                <div className="Evaluaion_PatientReport_Answer1_Div">
                {
                    [{value:'None',id:1},{value:'Mild',id:2},{value:'Moderate',id:3},{value:'Severe',id:4},{value:'Extreme',id:5}].map((option,id) => 
                        <span key={id}>
                            <Radio
                                disabled={old}
                                checked={this.state.Answer4 == option.id}
                                onChange={this.handleChange}
                                value={option.id}
                                name="Answer4"
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
                    5. Standing upright
                </div>

                <div className="Evaluaion_PatientReport_Answer1_Div">
                {
                    [{value:'None',id:1},{value:'Mild',id:2},{value:'Moderate',id:3},{value:'Severe',id:4},{value:'Extreme',id:5}].map((option,id) => 
                        <span key={id}>
                            <Radio
                                disabled={old}
                                checked={this.state.Answer5 == option.id}
                                onChange={this.handleChange}
                                value={option.id}
                                name="Answer5"
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

Page2.contextType=MyContext;

export default Page2;