import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputMask from 'react-input-mask';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { SemipolarLoading } from 'react-loadingg';



// import { withStyles } from '@material-ui/core/styles';
import MyContext from '../../helper/themeContext';

import './patientDemoGraphics.css';
import GetData from '../../Fetch/getData';

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
            error:null,
            loading:false,
        }
    }

    componentDidMount()
    {
        // console.log(this.context.state.patient)
        // console.log(this.context.state.evaluation_stage)
        if(this.context.state.patient.name!=undefined && parseInt(this.context.state.evaluation_stage)>0)
        {
            console.log('old pateint loaded')
            let oldPatient = this.context.state.patient;
            this.setState({patient_name:oldPatient.name,birth_date:oldPatient.birth_date,age:oldPatient.age,gender:oldPatient.gender,height:oldPatient.height,
            home_phone:oldPatient.home_phone,cell_phone:oldPatient.cell_phone,weight:oldPatient.weight,home_address:oldPatient.home_address,
            email:oldPatient.email,martial_status:oldPatient.marital_status,date:oldPatient.date})
        }
        else 
        {  var d = new Date;
            let date="";
            if(d.getMonth().toString().length==1)
            {
                date='0';
            }
            date=date+(d.getMonth()+1)+'-';
            if(d.getDate().toString().length==1)
            {
                date=date+'0';
            }
            date=date+d.getDate()+'-'+d.getFullYear();
            console.log(date)
            this.setState({date})
        }
    }


    validation = () =>
    {
        if(this.state.patient_name.length<3)
        {
            console.log(this.state.birth_date.toString().length)
            this.setState({patient_name_error:'Must be more than 2 words',error:'Patient name must be more than 2 words'});
            // let input = document.getElementById('patient_name')
            // input.style.color='red';
            // input.style.borderColor='red';
            return false;
        }

        if(this.state.birth_date==='')
        {
            this.setState({birth_date_error:'Birthdate Empty',error:'Birthdate Empty'});
            return false;
        }

        let birth_num=this.state.birth_date.toString().match(/\d+/g).map(Number);
        if(birth_num.length<3 || birth_num[0].toString().length<1 || birth_num[1].toString().length<1 || birth_num[2].toString().length!==4)
        {
            this.setState({birth_date_error:'Please Correct Format As 99 / 99 / 9999',error:'BirthDate Format Error, Correct Format As 99 / 99 / 9999'});
            return false;
        }

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
        // if(home_num.length<3 || home_num[0].toString().length<3 || home_num[1].toString().length<3 || home_num[2].toString().length<4)
        // {
        //     this.setState({home_phone_error:'Badly Formatted',error:'Home Phone Badly Formatted'});
        //     return false;
        // }

        // if(this.state.cell_phone==='')
        // {
        //     this.setState({cell_phone_error:'Cell Phone Empty',error:'Cell Phone Empty'});
        //     return false;
        // }

        // let cell_num=this.state.cell_phone.toString().match(/\d+/g).map(Number);
        // if(cell_num.length<3 || cell_num[0].toString().length<3 || cell_num[1].toString().length<3 || cell_num[2].toString().length<4)
        // {
        //     this.setState({cell_phone_error:'Badly Formatted',error:'Cell Phone Badly Formatted'});
        //     return false;
        // }

        // if(this.state.weight<1)
        // {
        //     this.setState({weight_error:'Nullify Formatted',error:'Weight Nullify Formatted'});
        //     return false;
        // }

        // if(this.state.home_address==="" || this.state.home_address===" ")
        // {
        //     this.setState({home_address_error:'Empty',error:'Home Address Empty'});
        //     return false;
        // }

        // if(this.state.email==="" || this.state.email===" ")
        // {
        //     this.setState({email_error:'Empty',error:'Email Empty'});
        //     return false;
        // }

        // if ( !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) )
        // {
        //     this.setState({email_error:'Badly Formatted',error:'Email Badly Formatted'});
        //     return false;
        // }

        // if(this.state.martial_status==='')
        // {
        //     this.setState({martial_status_error:'Should not be empty',error:'Please enter Martial Status'});
        //     return false;
        // }

        if(this.state.date==='' || this.state.date===' ' )
        {
            this.setState({date_error:'Date Empty',error:'Please Enter Date'});
            return false;
        }

        let date_num=this.state.date.toString().match(/\d+/g).map(Number);

        if(date_num.length<3 || date_num[0].toString().length<1 || date_num[1].toString().length<1 || date_num[2].toString().length!==4)
        {
            console.log(date_num)
            this.setState({date_error:'Please Correct Format As 99 - 99 - 9999',error:'Date Format Error, Correct Format As 99 / 99 / 9999'});
            return false;
        }
        
        return true;
    }

    updateContext = (report_id,patient_id,oldEvaluations) =>
    {
        let patient={};
        patient["name"]=this.state.patient_name;
        patient["birth_date"]=this.state.birth_date;
        patient["age"]=this.state.age;
        patient["gender"]=this.state.gender;
        patient["height"]=this.state.height;
        patient["home_phone"]=this.state.home_phone;
        patient["cell_phone"]=this.state.cell_phone;
        patient["weight"]=this.state.weight;
        patient["home_address"]=this.state.home_address;
        patient["email"]=this.state.email;
        patient["marital_status"]=this.state.martial_status;
        patient["date"]=this.state.date;

        console.log(oldEvaluations)
        this.context.multipleUpdateValueWithHistory([{key:'patient',value:patient},{key:'report_id',value:report_id},{key:'patient_id',value:patient_id},{key:'oldEvaluations',value:oldEvaluations}],'./new-evaluation')
    } 

    handleClick = () =>
    {
        console.log(this.context.state.oldEvaluations);

        if(this.context.state.evaluation_stage)
        {
            if(parseInt(this.context.state.evaluation_stage)>0)
            {
                this.context.history.push('./new-evaluation');
            }
            // console.log('old')
        }
        else 
        {
            if(!this.validation())
            {
                return ;
            }

            let patient={};
            patient["name"]=this.state.patient_name;
            patient["birthday"]=this.state.birth_date;
            patient["age"]=this.state.age;
            patient["gender"]=this.state.gender;
            patient["height"]=this.state.height;
            patient["homephone"]=this.state.home_phone;
            patient["cellphone"]=this.state.cell_phone;
            patient["weight"]=this.state.weight;
            patient["homeaddress"]=this.state.home_address;
            patient["email"]=this.state.email;
            patient["maritalstatus"]=this.state.martial_status;
            patient["date"]=this.state.date;

            this.setState({loading:true})

            GetData(this.context.baseUrl+'/api/v1/create/patient',201,patient,this.context.state.token,this.setMe)
        }
        
    }

    setMe = (response) =>
    {
        console.log(response)
        if(response._visitor)
        {
            let oldEvaluations = this.context.state.oldEvaluations;

            console.log(oldEvaluations);

            let currEvaluation = { id:response._visitor.id , stage:{id:1 , stage:'Patient Demographics Submitted'},visitor:{id:response._visitor.id,patient_id:response._visitor.patient_id} }
            oldEvaluations.push(currEvaluation);

            this.updateContext(response._visitor.id,response._visitor.patient_id,oldEvaluations);
            // this.setState({loading:false})
        }
        else
        {
            this.setState({loading:false})
            console.log('Undefined Response')
        }
    }

    handleChange = (e) =>
    {
        this.setState({[e.target.id || e.target.name]:e.target.value,error:null})
    }
    render() { 
        // const {classes} = this.props;
        const old=parseInt(this.context.state.evaluation_stage)>0;
        return ( 
            
            <div id="Evaluaion_PatientDemoGraphics_Main_Div">
                {this.state.loading?<SemipolarLoading size={"large"} color={'#b4ec51'}/>:
                <div  id="Evaluaion_PatientDemoGraphics_Text_Wrapper">
                    <div id="Evaluaion_PatientDemoGraphics_Heading2_Div">
                        Patient Demographics
                    </div>
                    {/* <FormControl component="fieldset">
                        <RadioGroup row aria-label="new or old patient" name="new or old patient" defaultValue={"false"}>
                            <FormControlLabel disabled={false}  value={"false"} style={{color:"white"}} control={<Radio style={{color:"white"}} />} label="New Patient" />
                            <FormControlLabel disabled={true} value={"true"}  style={{color:"white"}} control={<Radio style={{color:"white"}} />} label="Return Patient" />
                        </RadioGroup>
                    </FormControl> */}
                    <div id="Evaluaion_PatientDemoGraphics_Form_Div">
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span1">
                            <span style={{display:'inline-block',width:'70px',marginBottom:'5px'}}> Name:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 90px)'}} id="aaa">
                                <Input
                                    disabled={old}
                                    id="patient_name"
                                    value={this.state.patient_name}
                                    onChange={this.handleChange}
                                   
                                />
                            </FormControl>
                        </span> 
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2"> 
                            <span style={{display:'inline-block',width:'105px'}}> Birthdate:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 125px)'}} >
                                <InputMask mask="99/ 99 / 9999" maskChar=" " id="birth_date"
                                    disabled={old}
                                    value={this.state.birth_date}
                                    onChange={this.handleChange}>
                                    {(inputProps) => <Input disabled={old}  {...inputProps}  
                                    
                                />}
                                
                                </InputMask> 
                            </FormControl>  
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'50px'}} >Age:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 70px)'}} >
                                <Input
                                    disabled={old}
                                    id="age"
                                    type='number'
                                    inputProps = {{min:"1"}}
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
                                    disabled={old}
                                    name="gender"
                                    value={this.state.gender}
                                    onChange={(e)=>this.handleChange(e)}
                                    MenuProps={{
                                        anchorOrigin: {
                                          vertical: "bottom",
                                          horizontal: "left"
                                        },
                                        transformOrigin: {
                                          vertical: "top",
                                          horizontal: "left"
                                        },
                                        getContentAnchorEl: null,
                                        className:"patient-demographics-select-box"
                                      }}
                                >
                                    <MenuItem  className="Evaluaion_NewEvaluation_MenuItem" value={'Male'} >Male</MenuItem>
                                    <MenuItem  className="Evaluaion_NewEvaluation_MenuItem" value={'Female'} >Female</MenuItem>
                                    <MenuItem  className="Evaluaion_NewEvaluation_MenuItem" value={'Other'} >Other</MenuItem>
                                </Select>
                               
                            </FormControl> 
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'80px'}}>Height:</span> 

                            <FormControl fullWidth style={{width:'calc(100% - 100px)'}} >
                                <InputMask mask={`9'99"`}  maskChar=" "
                                    disabled={old}
                                    id="height"
                                    value={this.state.height}
                                    onChange={this.handleChange}
                                >
                                    {(inputProps) => <Input disabled={old} {...inputProps}  
                                    
                                />}
                                
                                </InputMask> 
                            </FormControl>  
                        </span>                        
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'135px'}}>Home Phone:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 155px)'}} >
                                <InputMask mask="999-999-9999" maskChar=" "
                                    disabled={old}
                                    id="home_phone"
                                    value={this.state.home_phone}
                                    onChange={this.handleChange}>
                                    {(inputProps) => <Input disabled={old} {...inputProps}  
                                
                                />}
                                
                                </InputMask> 
                            </FormControl> 
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'115px'}}>Cell Phone:</span>
                            <FormControl fullWidth style={{width:'calc(100% - 135px)'}} >
                                <InputMask mask="999-999-9999" maskChar=" "
                                    disabled={old}
                                    id="cell_phone"
                                    value={this.state.cell_phone}
                                    onChange={this.handleChange}
                                    type="tel">
                                    
                                    {(inputProps) => <Input disabled={old} {...inputProps}/>}
                                </InputMask> 
                            </FormControl>
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'85px'}}>Weight: </span>
                            <FormControl fullWidth style={{width:'calc(100% - 105px)'}} >
                                <Input
                                    disabled={old}
                                    id="weight"
                                    value={this.state.weight}
                                    onChange={this.handleChange}
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    type="number"
                                    endAdornment={<InputAdornment position="start" ><span style={{color:'white'}}> Lbs </span></InputAdornment>}
                                />
                            </FormControl> 
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span1">
                            <span style={{display:'inline-block',width:'152px'}}>Home Address:  </span>
                            <FormControl fullWidth style={{width:'calc(100% - 172px)'}} >
                                <Input
                                    disabled={old}
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
                                    disabled={old}
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
                                <Select
                                    disabled={old}
                                    name="martial_status"
                                    value={this.state.martial_status}
                                    onChange={(e)=>this.handleChange(e)}
                                    MenuProps={{
                                        anchorOrigin: {
                                          vertical: "bottom",
                                          horizontal: "left"
                                        },
                                        transformOrigin: {
                                          vertical: "top",
                                          horizontal: "left"
                                        },
                                        getContentAnchorEl: null,
                                        className:"patient-demographics-select-box"
                                      }}
                                >
                                    <MenuItem  className="Evaluaion_NewEvaluation_MenuItem" value={'Married'} >Married</MenuItem>
                                    <MenuItem  className="Evaluaion_NewEvaluation_MenuItem" value={'Single'} >Single</MenuItem>
                                </Select>
                               
                            </FormControl>
                        </span>
                        <span className="Evaluaion_PatientDemoGraphics_Form_Span2">
                            <span style={{display:'inline-block',width:'60px'}}>Date:  </span>
                            <FormControl fullWidth style={{width:'calc(100% - 80px)'}} >
                            
                               
                                <InputMask disabled={old} mask="99-99-9999" maskChar=" "
                                    id="date"
                                    value={this.state.date}
                                    onChange={this.handleChange}
                                    
                                    >
                                    
                                    {(inputProps) => <Input disabled={old} {...inputProps}/>}
                                </InputMask> 
                                {/* <Input
                                    id="date"
                                    value={this.state.date}
                                    onChange={this.handleChange}
                                    type="date"
                                    
                                /> */}
                            </FormControl>
                        </span>
                        {/* <span className="Evaluaion_PatientDemoGraphics_Form_Span3">
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
                        </span> */}
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
                }

            </div>
        );
    }
}
PatientDemoGraphics.contextType=MyContext;
export default PatientDemoGraphics;