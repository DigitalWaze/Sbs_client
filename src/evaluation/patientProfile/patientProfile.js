import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import BoneImage from '../../assets/bone3_Bitmap.png'
import BoneImage1 from '../../assets/bone4_Bitmap.png'


import Tick from '../../assets/button-tick.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';




import RightHipIcon from '../../assets/right-hip-icon.png'


import './patientProfile.css'

import MyContext from '../../helper/themeContext';
import { TextField } from '@material-ui/core';

class PatientProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentWillMount()
    {
        if(!this.context.state.patient)
        {
            this.context.history.push('./demographics')
        }
    }
    render() { 
        return ( 
            <div id="Evaluaion_PatientProfile_Main_Div">
                <div id="Evaluaion_PatientProfile_Content_Wrapper">
                    <div  id="Evaluaion_PatientProfile_Content1_Wrapper">
                        <div id="Evaluaion_PatientProfile_Heading1_Div">
                            Patient Profile
                        </div>
                        <div id="Evaluaion_PatientProfile_Profile_Div">
                            <div id="Evaluaion_PatientProfile_Profile_Avatar_Div">
                                <Avatar className="Evaluaion_PatientProfile_Profile_Avatar" alt={this.context.state.patient.name} src={AccountCircleIcon} />
                            
                            </div>
                            <div id="Evaluaion_PatientProfile_Profile_Text_Div">
                                <span className="small-paragraph"> {this.context.state.patient.name} </span>
                                <br/>
                                <span className="title-small-2"> {this.context.state.patient.birth_date} </span>
                            </div> 
                        </div>
                        <div id="Evaluaion_PatientProfile_Heading2_Div" className="small-paragraph">
                            Evaluation started: {this.context.state.patient.date}
                        </div>
                        <div id="Evaluaion_PatientProfile_Box1_Div">

                            <div className="Evaluaion_PatientProfile_Box1_Content1">
                                <img className="Evaluaion_PatientProfile_Box1_Content1_Image" src="https://assets.website-files.com/5d8d4f718f129fc077e4b98d/5d9e0d14916a658e42a03643_Asset%202doc.png" width="20px" alt=""/>
                            </div>
                            <div  className="Evaluaion_PatientProfile_Box1_Content2">
                                {this.context.state.Pro===true ?
                                    <div>
                                        <div className="Evaluaion_PatientProfile_Box_DisbaleText"> Forms </div>
                                        <div className="Evaluaion_Forms_Box_DisbaleText2"> <img src={Tick} alt="Completed"/> &nbsp; Complete </div>
                                    </div>
                                :
                                    <Button className="Evaluaion_PatientProfile_Box_Button"  variant="contained" onClick={()=>{this.context.history.push('./forms')}}> PRO </Button>
                                }
                                
                            </div>

                            <div className="Evaluaion_PatientProfile_Box1_Content1">
                                <img className="Evaluaion_PatientProfile_Box1_Content1_Image" src="https://assets.website-files.com/5d8d4f718f129fc077e4b98d/5d9e0e86916a654154a044e6_Asset%201doc3.png" width="20px" alt=""/>
                            </div>
                            <div  className="Evaluaion_PatientProfile_Box1_Content2">
                                {this.context.state.Pro===false ? 
                                    <div className="Evaluaion_PatientProfile_Box_DisbaleText"> Upload X-rays </div>
                                :
                                this.context.state.UXray===true ?
                                    <div>
                                        <div className="Evaluaion_PatientProfile_Box_DisbaleText"> Upload X-rays </div>
                                        <div className="Evaluaion_Forms_Box_DisbaleText2"> <img src={Tick} alt="Completed"/> &nbsp; Complete </div>
                                    </div>
                                :
                                    <Button className="Evaluaion_PatientProfile_Box_Button" variant="contained" onClick={()=>{this.context.history.push('./upload-xrays')}}> Upload X-rays </Button>
                                }
                            </div>

                            <div className="Evaluaion_PatientProfile_Box1_Content1">
                                <img className="Evaluaion_PatientProfile_Box1_Content1_Image" src="https://assets.website-files.com/5d8d4f718f129fc077e4b98d/5d9e0d14ad4a3a4e7ad1b279_Asset%201doc22.png" width="20px" alt=""/>
                            </div>
                            <div  className="Evaluaion_PatientProfile_Box1_Content2">
                                {this.context.state.UXray===false ? 
                                    <div className="Evaluaion_PatientProfile_Box_DisbaleText"> X-ray Mataching </div>
                                :
                                    <Button className="Evaluaion_PatientProfile_Box_Button" variant="contained" onClick={()=>{this.context.history.push('./x-ray-matching')}}> X-ray Matching </Button>
                                }
                            </div>



                        </div>
                    </div>

                    <div  id="Evaluaion_PatientProfile_Content2_Wrapper">

                        {this.context.state.joint_id==='3'?
                            <div className="Evaluaion_PatientProfile_Image_Left_Div">

                                <div className="Evaluaion_PatientProfile_Image_Left_Inner_Down" >
                                    <div className="Evaluaion_PatientProfile_Image_Left_Inner_Down_Content1">
                                        <TextField value={"Priority: "+this.context.state.activePriority} style={{width:'115px'}} variant="outlined" inputProps = { {className:"textbox-height"} }/> 
            
                                    </div>  
                                    <div className="Evaluaion_PatientProfile_Image_Left_Inner_Down_Content2">
                                            <div style={{color:'white',marginBottom:'10px',fontSize:'18px'}}>
                                                RIGHT KNEE
                                            </div>
                                        <img style={{width:'40px',marginBottom:'20px'}} src={RightHipIcon}/>
                                    </div>
                                    
                                </div>
                            </div>
                        :null}

                        

                        <div id="Evaluaion_PatientProfile_Image_Bone_Div"> <img src={this.context.state.joint_id=='3'?BoneImage:BoneImage1} alt="SBS" id="Evaluaion_PatientProfile_Image_Bone" /></div>
                        {this.context.state.joint_id==='4'?
                            <div className="Evaluaion_PatientProfile_Image_Right_Div">

                                <div className="Evaluaion_PatientProfile_Image_Right_Inner_Down" >
                                    <div className="Evaluaion_PatientProfile_Image_Right_Inner_Up_Content2">
                                            <div style={{color:'white',marginBottom:'10px',fontSize:'18px'}}>
                                                LEFT KNEE
                                            </div>
                                        <img style={{width:'40px',marginBottom:'20px'}} src={RightHipIcon}/>
                                    </div>
                                    <div className="Evaluaion_PatientProfile_Image_Right_Inner_Down_Content1">
                                        <TextField value={"Priority: "+this.context.state.activePriority} style={{width:'115px'}} variant="outlined" inputProps = { {className:"textbox-height"} }/> 
            
                                    </div>  
                                    
                                </div>
                            </div>
                        :null}
                    </div>
                </div>                  

            </div> );
    }
}
PatientProfile.contextType=MyContext;
export default PatientProfile;