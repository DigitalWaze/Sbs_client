import React, { Component } from 'react';

import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


import MyContext from '../../helper/themeContext';

import './patientReport.css';
class PatientReport extends Component {
    constructor(props) {
        super(props);
        this.state = { Answer1:'None',Answer2:'0' }
    }
    handleChange = (e) =>
    {
        this.setState({[e.target.name]:e.target.value})
    }

    handleClick = () =>
    {
        this.context.updateValue('Pro',true)
        this.context.history.push('./forms')
    }
    render() { 

        const Questions2 = [{name:'Twisting/pivoting on your knee',id:'Answer3'},{name:'Straightening your knee fully',id:'Answer4'},{name:'Walking on a flat surface',id:'Answer5'},{name:'Going up or down stairs',id:'Answer6'},{name:'Sitting or lying',id:'Answer7'},{name:'Standing upright',id:'Answer8'},{name:'Rising from sitting',id:'Answer9'},{name:'Standing',id:'Answer10'},{name:'Bending to the floor',id:'Answer11'},{name:'Getting in/out of a car',id:'Answer12'}];
        return ( 
        
        <div id="Evaluaion_PatientReport_Main_Div">

            <div  id="Evaluaion_PatientReport_Content_Wrapper">
                <div id="Evaluaion_PatientReport_Heading1_Div">
                    Patient Reported Evaluation - Questionnaire
                </div>

                <div className="Evaluaion_PatientReport_Question_Div">
                    How severe is the stiffness in your knee after first waking in the morning?
                </div>

                <div className="Evaluaion_PatientReport_Answer1_Div">
                {
                    ['None','Mild','Moderate','Severe','Extreme'].map((option,id) => 
                        <span key={id}>
                            <Radio
                                checked={this.state.Answer1 === option}
                                onChange={this.handleChange}
                                value={option}
                                name="Answer1"
                                style={{color:'white'}}
                            />
                            <span className="Evaluaion_PatientReport_Answer1_Option">
                                {option}
                            </span>
                        </span>
                     )
                }
                </div>
                
                <div className="Evaluaion_PatientReport_Question_Div">
                    How often do you experience knee pain?
                </div>

                <div className="Evaluaion_PatientReport_Answer1_Div">
                {
                    ['Never','Monthly','Weekly','Daily','Always'].map((option,id) => 
                        <span key={id}>
                            <Radio
                                checked={this.state.Answer2 === option}
                                onChange={this.handleChange}
                                value={option}
                                name="Answer2"
                                style={{color:'white'}}
                            />
                            <span className="Evaluaion_PatientReport_Answer1_Option">
                                {option}
                            </span>
                        </span>
                     )
                }
                </div>

                <div className="Evaluaion_PatientReport_Question_Div">
                    What amount of pain have you experienced the last week in your knee 
                </div>

                <div className="Evaluaion_PatientReport_Answer2_Div">
                
                <Grid container >
                    <Grid container item xs={12} spacing={0}>
                        <React.Fragment>
                            
                            <Grid item xs={5}>
                                
                            </Grid>
                            <Grid item xs={1}>
                                <div className="Evaluaion_PatientReport_Answer2_Option_Head"> None </div>
                            </Grid>
                            <Grid item xs={1}>
                            <div  className="Evaluaion_PatientReport_Answer2_Option_Head"> Mild </div> 
                            </Grid>
                            <Grid item xs={2}>
                            <div  className="Evaluaion_PatientReport_Answer2_Option_Head"> Moderate </div> 
                            </Grid>
                            <Grid item xs={1}>
                            <div  className="Evaluaion_PatientReport_Answer2_Option_Head"> Severe </div> 
                            </Grid>
                            <Grid item xs={1}>
                            <div  className="Evaluaion_PatientReport_Answer2_Option_Head"> Extreme </div>   
                            </Grid>
                        </React.Fragment>
                    </Grid>

                    {Questions2.map((row,key) =>
                        <Grid key={key} container item xs={12} spacing={0} >
                        <React.Fragment>
                            
                            <Grid item xs={5}>
                                <div className="Evaluaion_PatientReport_Answer2_Option_Name"> {row.name} </div>
                            </Grid>
                            <Grid item xs={1}>
                                <div className="Evaluaion_PatientReport_Answer2_Option"> 
                                    <Radio
                                        checked={this.state[row.id] === 'None'}
                                        onChange={this.handleChange}
                                        value={'None'}
                                        name={row.id}
                                        className="Evaluaion_PatientReport_Answer2_Option_Radio"
                                        
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={1}>
                                <div className="Evaluaion_PatientReport_Answer2_Option"> 
                                    <Radio
                                        checked={this.state[row.id] === 'Mild'}
                                        onChange={this.handleChange}
                                        value={'Mild'}
                                        name={row.id}
                                        className="Evaluaion_PatientReport_Answer2_Option_Radio"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={2}>
                                <div className="Evaluaion_PatientReport_Answer2_Option"> 
                                    <Radio
                                        checked={this.state[row.id] === 'Moderate'}
                                        onChange={this.handleChange}
                                        value={'Moderate'}
                                        name={row.id}
                                        className="Evaluaion_PatientReport_Answer2_Option_Radio"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={1}>
                                <div className="Evaluaion_PatientReport_Answer2_Option"> 
                                    <Radio
                                        checked={this.state[row.id] === 'Severe'}
                                        onChange={this.handleChange}
                                        value={'Severe'}
                                        name={row.id}
                                        className="Evaluaion_PatientReport_Answer2_Option_Radio"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={1}>
                                <div className="Evaluaion_PatientReport_Answer2_Option"> 
                                    <Radio
                                        checked={this.state[row.id] === 'Extreme'}
                                        onChange={this.handleChange}
                                        value={'Extreme'}
                                        name={row.id}
                                        className="Evaluaion_PatientReport_Answer2_Option_Radio"
                                    />
                                </div>
                            </Grid>
                        </React.Fragment>
                    </Grid>
                        
                        )}

                    
                
                </Grid>
               

                </div>
                <div id="Evaluaion_PatientReport_Next_Button_Div">
                        <Button id="Evaluaion_PatientReport_Next_Button" variant="contained" onClick={this.handleClick}> Next </Button>
                </div>
               

            </div>
        

        </div> );
    }
}
PatientReport.contextType=MyContext;
export default PatientReport;