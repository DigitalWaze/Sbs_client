import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputMask from 'react-input-mask';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


// import { withStyles } from '@material-ui/core/styles';
import MyContext from '../../helper/themeContext';

import './patientDemoGraphics.css';

// const style = theme => ({

//     input:{
//         // color:'yellow',
//         // borderColor:'yellow !important',
//         '&$cssFocused $notchedOutline': {
//             borderColor: `${theme.palette.primary.main} !important`,
//           }
//     }
// })

class PatientDemoGraphics extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            patient_name:'',patient_name_error:null,
            birth_date:'' , birth_date_error:null ,
            age:'',age_error:null,
            gender:'',gender_error:null,
            height:'',height_error:null,
            home_phone:'',home_phone_error:null,
            cell_phone:'',cell_phone_error:null,
            weight:'',weight_error:null,
            home_address:'',home_address_error:null,
            email:'',email_error:null,
            martial_status:'',martial_status_error:null,
            date:'',date_error:null,
            emergency_contact:'',emergency_contact_error:null,
            error:null
        }
    }

    componentDidMount()
    {
        // document.getElementById('')
    }


    validation = () =>
    {
        // if(this.state.patient_name.length<3)
        // {

        //     console.log(this.state.birth_date.toString().length)
        //     this.setState({patient_name_error:'Must be more than 2 words',error:'Patient name must be more than 2 words'});
        //     // let input = document.getElementById('patient_name')
        //     // input.style.color='red';
        //     // input.style.borderColor='red';
        //     return false;
        // }

        // if(this.state.birth_date==='')
        // {
        //     this.setState({birth_date_error:'Birthdate Empty',error:'Birthdate Empty'});
        //     return false;
        // }

        // let birth_num=this.state.birth_date.toString().match(/\d+/g).map(Number);
        // if(birth_num.length<3 || birth_num[0].toString().length<2 || birth_num[1].toString().length<2 || birth_num[2].toString().length<4)
        // {
        //     this.setState({birth_date_error:'Please Correct Format As 99 / 99 / 9999',error:'BirthDate Format Error, Correct Format As 99 / 99 / 9999'});
        //     return false;
        // }

        // if(this.state.age==null)
        // {
        //     this.setState({age_error:'Should not be empty',error:'Please enter Age'});
        //     return false;
        // }
        // if(this.state.gender==='')
        // {
        //     this.setState({gender_error:'Should not be empty',error:'Please enter Gender'});
        //     return false;
        // }

        // if(this.state.height==='')
        // {
        //     this.setState({height_error:'Height Empty',error:'Height Empty'});
        //     return false;
        // }

        // let height_num=this.state.height.toString().match(/\d+/g).map(Number);
        // if(height_num.length<2 || height_num[0].toString().length<1 || height_num[1].toString().length<1)
        // {
        //     this.setState({height_error:'Enter Correctly as Foot and Inch',error:'Please enter height correctly'});
        //     return false;
        // }

        // if(this.state.home_phone==='')
        // {
        //     this.setState({home_phone_error:'Home Phone Empty',error:'Home Phone Empty'});
        //     return false;
        // }

        // let home_num=this.state.home_phone.toString().match(/\d+/g).map(Number);
        // if(home_num.length<4 || home_num[0].toString().length<2 || home_num[1].toString().length<3 || home_num[2].toString().length<3 || home_num[3].toString().length<4)
        // {
        //     this.setState({home_phone_error:'Badly Formatted',error:'Home Phone Badly Formatted'});
        //     return false;
        // }

        if(this.state.cell_phone==='')
        {
            this.setState({cell_phone_error:'Home Phone Empty',error:'Home Phone Empty'});
            return false;
        }

        let cell_num=this.state.cell_phone.toString().match(/\d+/g).map(Number);
        if(cell_num.length<4 || cell_num[0].toString().length<2 || cell_num[1].toString().length<3 || cell_num[2].toString().length<3 || cell_num[3].toString().length<4)
        {
            this.setState({cell_phone_error:'Badly Formatted',error:'Home Phone Badly Formatted'});
            return false;
        }

            

        return true;


        // else if()
        // {

        // }
    }

    handleClick = () =>
    {
        if(!this.validation())
        {
            return ;
        }

        this.context.updateValue('patient_name',this.state.patient_name)
        this.context.updateValue('birth_date',this.state.birth_date)
        this.context.history.push('./new-evaluation')
        
    }

    handleChange = (e) =>
    {
        this.setState({[e.target.id || e.target.name]:e.target.value,error:null})
    }
    render() { 
        // const {classes} = this.props;
        return ( 
            <div id="Evaluaion_PatientDemoGraphics_Main_Div">

                <div  id="Evaluaion_PatientDemoGraphics_Text_Wrapper">
                    <div id="Evaluaion_PatientDemoGraphics_Heading2_Div">
                        Patient Demographics
                    </div>
                    <div id="Evaluaion_PatientDemoGraphics_Form_Div">
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span1">
                            <span style={{display:'inline-block',width:'70px',marginBottom:'5px'}}> Name:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 90px)'}} id="aaa">
                                <Input
                                    id="patient_name"
                                    value={this.state.patient_name}
                                    onChange={this.handleChange}
                                    
                                    // error={true}
                                    //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                        </span> 
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2"> 
                            <span style={{display:'inline-block',width:'105px'}}> Birthdate:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 125px)'}} >
                                <InputMask mask="99/ 99 / 9999" maskChar=" " id="birth_date"
                                    value={this.state.birth_date}
                                    onChange={this.handleChange}>
                                    {(inputProps) => <Input {...inputProps}  
                                    
                                />}
                                
                                </InputMask> 
                            </FormControl>  
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'50px'}} >Age:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 70px)'}} >
                                <Input
                                    id="age"
                                    type='number'
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>  
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'92px'}}>Gender:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 112px)'}} >
                                <Select
                                    name="gender"
                                    value={this.state.gender}
                                    onChange={(e)=>this.handleChange(e)}
                                >
                                    <MenuItem value={'Male'} >Male</MenuItem>
                                    <MenuItem value={'Female'} >Female</MenuItem>
                                    <MenuItem value={'Other'} >Other</MenuItem>
                                </Select>
                                {/* <Input
                                    id="gender"
                                    value={this.state.gender}
                                    onChange={this.handleChange}
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                /> */}
                            </FormControl> 
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'80px'}}>Height:</span> 

                            <FormControl fullWidth style={{width:'calc(100% - 100px)'}} >
                                <InputMask mask={`9'9"`}  maskChar=" "
                                    id="height"
                                    value={this.state.height}
                                    onChange={this.handleChange}
                                >
                                    {(inputProps) => <Input {...inputProps}  
                                    
                                />}
                                
                                </InputMask> 
                            </FormControl>  
                        </span>                        
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'135px'}}>Home Phone:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 155px)'}} >
                                <InputMask mask="+99-999-999-9999" maskChar=" "
                                    id="home_phone"
                                    value={this.state.home_phone}
                                    onChange={this.handleChange}>
                                    {(inputProps) => <Input {...inputProps}  
                                
                                />}
                                
                                </InputMask> 
                            </FormControl> 
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'115px'}}>Cell Phone:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 135px)'}} >
                                <Input
                                    id="cell_phone"
                                    value={this.state.cell_phone}
                                    onChange={this.handleChange}
                                    type="tel"
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
                                    id="weight"
                                    value={this.state.weight}
                                    onChange={this.handleChange}
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
                                    id="home_address"
                                    value={this.state.home_address}
                                    onChange={this.handleChange}
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
                                    id="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
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
                                    id="martial_status"
                                    value={this.state.martial_status}
                                    onChange={this.handleChange}
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
                                    id="date"
                                    value={this.state.date}
                                    onChange={this.handleChange}
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
                                    id="emergency_contact"
                                    value={this.state.emergency_contact}
                                    onChange={this.handleChange}
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                        </span>
                        {this.state.error &&
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span3">
                            <span style={{display:'inline-block',width:'800px',color:'red'}}>Error<sup>*</sup> : {this.state.error} </span>
                        </span>
                        }
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