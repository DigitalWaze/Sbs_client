import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

import RightHipIconRed from '../../assets/right-knee-icon-red.png'
import LeftHipIconRed from '../../assets/left-knee-icon-red.png'

import BoneImage from '../../assets/bone3_Bitmap.png'
import BoneImage1 from '../../assets/bone4_Bitmap.png'

import MyContext from '../../helper/themeContext';

import './evalName.css'



class EvalName extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        
            <div>

                <div id="Evaluaion_XrayMatching_EvalName_Content_Wrapper">
                    <div  id="Evaluaion_XrayMatching_EvalName_Content1_Wrapper">
                        <div id="Evaluaion_Welcome_Heading2_Div">
                            Joint Evaluation: {this.props.eval.name}
                        </div>
                    
                    </div>

                    <div  id="Evaluaion_XrayMatching_EvalName_Content2_Wrapper">

                        { this.context.state.Eval[this.context.state.activeJointIndex].joint_id.toString()==='3'?
                            <div className="Evaluaion_XrayMatching_EvalName_Image_Left_Div">

                                <div className="Evaluaion_PatientProfile_Image_Left_Inner_Down" >
                                    <div className="Evaluaion_PatientProfile_Image_Left_Inner_Down_Content1">
                                        <TextField value={"Priority: "+this.context.state.Eval[this.context.state.activeJointIndex].priority_id.toString()} style={{width:'115px'}} variant="outlined" inputProps = { {className:"textbox-height"} }/> 

                                    </div>  
                                    <div className="Evaluaion_PatientProfile_Image_Left_Inner_Down_Content2">
                                            <div style={{color:'white',marginBottom:'10px',fontSize:'18px'}}>
                                                RIGHT KNEE
                                            </div>
                                        <img style={{width:'40px',marginBottom:'20px'}} src={RightHipIconRed}/>
                                    </div>
                                    
                                </div>
                            </div>
                        :null}



                        <div id="Evaluaion_XrayMatching_EvalName_Image_Bone_Div"> <img src={this.context.state.Eval[this.context.state.activeJointIndex].joint_id.toString()==='3'?BoneImage:BoneImage1} alt="SBS" id="Evaluaion_XrayMatching_EvalName_Image_Bone" /></div>

                        {this.context.state.Eval[this.context.state.activeJointIndex].joint_id.toString()==='4'?
                            <div className="Evaluaion_XrayMatching_EvalName_Image_Right_Div">

                                <div className="Evaluaion_PatientProfile_Image_Right_Inner_Down" >
                                    <div className="Evaluaion_PatientProfile_Image_Right_Inner_Up_Content2">
                                            <div style={{color:'white',marginBottom:'10px',fontSize:'18px'}}>
                                                LEFT KNEE
                                            </div>
                                        <img style={{width:'40px',marginBottom:'20px'}} src={LeftHipIconRed}/>
                                    </div>
                                    <div className="Evaluaion_PatientProfile_Image_Right_Inner_Down_Content1">
                                        <TextField value={"Priority: "+this.context.state.Eval[this.context.state.activeJointIndex].priority_id.toString()} style={{width:'115px'}} variant="outlined" inputProps = { {className:"textbox-height"} }/> 

                                    </div>  
                                    
                                </div>
                            </div>
                        :null}
                    </div>
                    <div id="Evaluaion_XrayMatching_EvalName_Next_Button_Div">
                        <Button id="Evaluaion_Welcome_Next_Button" variant="contained" onClick={this.props.handleClick}> Next </Button>
                    </div>
                </div>

            </div>
        );
    }
}
EvalName.contextType=MyContext;
export default EvalName;