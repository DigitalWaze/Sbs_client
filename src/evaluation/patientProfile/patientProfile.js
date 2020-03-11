import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import BoneImage from '../../assets/bone3_Bitmap.png'
import Tick from '../../assets/button-tick.png';


import './patientProfile.css'

import MyContext from '../../helper/themeContext';

class PatientProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount()
    {
        
    }
    render() { 
        return ( 
            <div id="Evaluaion_PatientProfile_Main_Div">

                <div  id="Evaluaion_PatientProfile_Content1_Wrapper">
                    <div id="Evaluaion_PatientProfile_Heading1_Div">
                        Patient Profile
                    </div>
                    <div id="Evaluaion_PatientProfile_Profile_Div">
                        <div id="Evaluaion_PatientProfile_Profile_Avatar_Div">
                            <Avatar className="Evaluaion_PatientProfile_Profile_Avatar" alt="Remy Sharp" src="https://assets.website-files.com/5d8d4f718f129fc077e4b98d/5d8d5a6b0168a95b05760cd3_Asset%203rs.png" />
                        </div>
                        <div id="Evaluaion_PatientProfile_Profile_Text_Div">
                            <span className="small-paragraph"> {this.context.state.pateint_name} </span>
                            <br/>
                            <span className="title-small-2"> {this.context.state.birth_date} </span>
                        </div>
                    </div>
                    <div id="Evaluaion_PatientProfile_Heading2_Div" className="small-paragraph">
                        Evaluation started: 10/22/2020
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
                    <img src={BoneImage} alt="SBS" id="Evaluaion_Welcome_Image_Bone" />
                </div>


            </div> );
    }
}
PatientProfile.contextType=MyContext;
export default PatientProfile;