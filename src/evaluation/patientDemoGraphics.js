import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';


import MyContext from '../helper/themeContext';

import './patientDemoGraphics.css';

class PatientDemoGraphics extends Component {
    constructor(props) {
        super(props);
        this.state = { patient_name:'' }
    }

    handleClick = () =>
    {
        this.context.updateValue('patient_name',this.state.patient_name)
        this.context.updateValue('birth_date',this.state.birth_date)
        this.context.history.push('./new-evaluation')
    }

    handleChange = (e) =>
    {
        this.setState({[e.target.id]:e.target.value})
    }
    render() { 
        return (
            <div id="Evaluaion_PatientDemoGraphics_Main_Div">

                <div  id="Evaluaion_PatientDemoGraphics_Text_Wrapper">
                    <div id="Evaluaion_PatientDemoGraphics_Heading2_Div">
                        Patient Demographics
                    </div>
                    <div id="Evaluaion_PatientDemoGraphics_Form_Div">
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span1">
                            <span style={{display:'inline-block',width:'70px',marginBottom:'5px'}}> Name:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 90px)'}} >
                                <Input
                                    id="patient_name"
                                    value={this.state.patient_name}
                                    onChange={this.handleChange}
                                    //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                        </span> 
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2"> 
                            <span style={{display:'inline-block',width:'105px'}}> Birthdate:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 125px)'}} >
                                <Input
                                    id="birth_date"
                                    value={this.state.birth_date}
                                    onChange={this.handleChange}
                                />
                            </FormControl>  
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'50px'}} >Age:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 70px)'}} >
                                <Input
                                    id="standard-adornment-amount"
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>  
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'92px'}}>Gender:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 112px)'}} >
                                <Input
                                    id="standard-adornment-amount"
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl> 
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'80px'}}>Height:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 100px)'}} >
                                <Input
                                    id="standard-adornment-amount"
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl> 
                        </span>                        
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'135px'}}>Home Phone:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 155px)'}} >
                                <Input
                                    id="standard-adornment-amount"
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl> 
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'115px'}}>Cell Phone:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 135px)'}} >
                                <Input
                                    id="standard-adornment-amount"
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'85px'}}>Weight: </span>
                            <FormControl fullWidth style={{width:'calc(100% - 105px)'}} >
                                <Input
                                    id="standard-adornment-amount"
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl> 
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span1">
                            <span style={{display:'inline-block',width:'152px'}}>Home Address:  </span>
                            <FormControl fullWidth style={{width:'calc(100% - 172px)'}} >
                                <Input
                                    id="standard-adornment-amount"
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'65px'}}>Email: </span> 
                            <FormControl fullWidth style={{width:'calc(100% - 85px)'}} >
                                <Input
                                    id="standard-adornment-amount"
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span1">
                            <span style={{display:'inline-block',width:'150px'}}>Marital Status:  </span>
                            <FormControl fullWidth style={{width:'calc(100% - 170px)'}} >
                                <Input
                                    id="standard-adornment-amount"
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'60px'}}>Date:  </span>
                            <FormControl fullWidth style={{width:'calc(100% - 80px)'}} >
                                <Input
                                    id="standard-adornment-amount"
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span3">
                            <span style={{display:'inline-block',width:'200px'}}>Emergency Contact:  </span>
                            <FormControl fullWidth style={{width:'calc(100% - 220px)'}} >
                                <Input
                                    id="standard-adornment-amount"
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                        </span>
                    </div>
                    <div id="Evaluaion_PatientDemoGraphics_Next_Button_Div">
                        <Button id="Evaluaion_PatientDemoGraphics_Next_Button" variant="contained" onClick={this.handleClick}> Next </Button>
                    </div>

                </div>

            </div>
        );
    }
}
PatientDemoGraphics.contextType=MyContext;
export default PatientDemoGraphics;