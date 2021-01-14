import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


import BoneImage from '../../assets/bone3_Bitmap.png'
import BoneImage1 from '../../assets/bone4_Bitmap.png'
import BoneImage2 from '../../assets/bone5_Bitmap.png'


import Tick from '../../assets/button-tick.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import RightKneeIconRed from '../../assets/right-knee-icon-red.png'
import LeftKneeIconRed from '../../assets/left-knee-icon-red.png'


import './patientProfile.css'

import MyContext from '../../helper/themeContext';
import { TextField } from '@material-ui/core';
import GetData from '../../Fetch/getDataJson';

class PatientProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { pocessedXrayLoading:false }
    }

    UNSAFE_componentWillMount()
    {
        if(!this.context.state.patient)
        {
            this.context.history.push('./demographics')
        }

        else if(this.context.state.UXray.toString()==="true")
        {
            this.getProcessedXray();
        }

        console.log('on will mount');
    }

    getProcessedXray = () =>
    {
        this.setState({pocessedXrayLoading:true})
        let req = {
            visitor_id:this.context.state.report_id
        }
        GetData(this.context.baseUrl+'/api/v1/processed/xrays',200,req,this.context.state.token,this.setMe,this.getProcessedXray)
    }

    setMe = (response) =>
    {
        if(response.ResponseCode==="Success")
        {
            let updatedEvaluations = this.context.state.Evaluations;
            updatedEvaluations['apiKey']=response.apiKey;
            updatedEvaluations['Nonce']=response.Nonce;
            updatedEvaluations['baseUrl']=response.baseUrl;


            if(response.ProcessedXrays.length>0)
            {
                console.log('here')

                let proXrays = response.ProcessedXrays;

                for (let evalu of this.context.state.Eval)
                {
                    if(evalu.joint_id.toString()==="3")  //for right
                    {
                        let flexMedial=proXrays.find((proXray) => proXray.joint_hurt_id.toString()===evalu.joint_hurt_id.toString() && proXray.view_id.toString()==='1' && proXray.processed_xray_type_id.toString()==='1');
                        let flexLateral=proXrays.find((proXray) => proXray.joint_hurt_id.toString()===evalu.joint_hurt_id.toString() && proXray.view_id.toString()==='1' && proXray.processed_xray_type_id.toString()==='2');
                        let nonFlexMedial=proXrays.find((proXray) => proXray.joint_hurt_id.toString()===evalu.joint_hurt_id.toString() && proXray.view_id.toString()==='2' && proXray.processed_xray_type_id.toString()==='1');
                        let nonFlexLateral=proXrays.find((proXray) => proXray.joint_hurt_id.toString()===evalu.joint_hurt_id.toString() && proXray.view_id.toString()==='2' && proXray.processed_xray_type_id.toString()==='2');
                        let Kneecap=proXrays.find((proXray) => proXray.joint_hurt_id.toString()===evalu.joint_hurt_id.toString() && proXray.view_id.toString()==='3' && proXray.processed_xray_type_id.toString()==='3');

                        

                        let updatedEvaluationsIndex = updatedEvaluations.findIndex((processed_xrays) => processed_xrays.joint_id==="3" );
                        console.log('flexMedial=> ', flexMedial);
                        console.log('updatedEvaluationsIndex=> ', updatedEvaluationsIndex);
                        console.log('updatedEvaluations[updatedEvaluationsIndex]=> ', updatedEvaluations[updatedEvaluationsIndex]);
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[0].xrays[0].prediction=flexMedial.prediction; //medial flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[0].xrays[1].prediction=nonFlexMedial.prediction; //medial non flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[1].xrays[0].prediction=flexLateral.prediction; //lateral flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[1].xrays[1].prediction=nonFlexLateral.prediction; // lateral non flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[2].xrays[0].prediction=Kneecap.prediction; //kneecap prediction

                        updatedEvaluations[updatedEvaluationsIndex].Xrays[0].xrays[0].image=flexMedial.image_url; //medial flexion image
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[0].xrays[1].image=nonFlexMedial.image_url; //medial non flexion image
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[1].xrays[0].image=flexLateral.image_url; //lateral flexion image
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[1].xrays[1].image=nonFlexLateral.image_url; // lateral non flexion image
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[2].xrays[0].image=Kneecap.image_url; //kneecap image

                        updatedEvaluations[updatedEvaluationsIndex].Xrays[0].xrays[0]['processed_xray_id']=flexMedial.id; //medial flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[0].xrays[1]['processed_xray_id']=nonFlexMedial.id; //medial non flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[1].xrays[0]['processed_xray_id']=flexLateral.id; //lateral flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[1].xrays[1]['processed_xray_id']=nonFlexLateral.id; // lateral non flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[2].xrays[0]['processed_xray_id']=Kneecap.id; //kneecap prediction
                    }
                    
                    if(evalu.joint_id.toString()==="4")  //for right
                    {
                        let flexMedial=proXrays.find((proXray) => proXray.joint_hurt_id.toString()===evalu.joint_hurt_id.toString() && proXray.view_id.toString()==='1' && proXray.processed_xray_type_id.toString()==='1');
                        let flexLateral=proXrays.find((proXray) => proXray.joint_hurt_id.toString()===evalu.joint_hurt_id.toString() && proXray.view_id.toString()==='1' && proXray.processed_xray_type_id.toString()==='2');
                        let nonFlexMedial=proXrays.find((proXray) => proXray.joint_hurt_id.toString()===evalu.joint_hurt_id.toString() && proXray.view_id.toString()==='2' && proXray.processed_xray_type_id.toString()==='1');
                        let nonFlexLateral=proXrays.find((proXray) => proXray.joint_hurt_id.toString()===evalu.joint_hurt_id.toString() && proXray.view_id.toString()==='2' && proXray.processed_xray_type_id.toString()==='2');
                        let Kneecap=proXrays.find((proXray) => proXray.joint_hurt_id.toString()===evalu.joint_hurt_id.toString() && proXray.view_id.toString()==='3' && proXray.processed_xray_type_id.toString()==='3');

                        let updatedEvaluationsIndex = updatedEvaluations.findIndex((processed_xrays) => processed_xrays.joint_id==="4" );
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[0].xrays[0].prediction=flexMedial.prediction; //medial flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[0].xrays[1].prediction=nonFlexMedial.prediction; //medial non flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[1].xrays[0].prediction=flexLateral.prediction; //lateral flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[1].xrays[1].prediction=nonFlexLateral.prediction; // lateral non flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[2].xrays[0].prediction=Kneecap.prediction; //kneecap prediction

                        updatedEvaluations[updatedEvaluationsIndex].Xrays[0].xrays[0].image=flexMedial.image_url; //medial flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[0].xrays[1].image=nonFlexMedial.image_url; //medial non flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[1].xrays[0].image=flexLateral.image_url; //lateral flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[1].xrays[1].image=nonFlexLateral.image_url; // lateral non flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[2].xrays[0].image=Kneecap.image_url; //kneecap 
                        
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[0].xrays[0]['processed_xray_id']=flexMedial.id; //medial flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[0].xrays[1]['processed_xray_id']=nonFlexMedial.id; //medial non flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[1].xrays[0]['processed_xray_id']=flexLateral.id; //lateral flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[1].xrays[1]['processed_xray_id']=nonFlexLateral.id; // lateral non flexion
                        updatedEvaluations[updatedEvaluationsIndex].Xrays[2].xrays[0]['processed_xray_id']=Kneecap.id; //kneecap prediction
                    } 
                    
                }

                
                this.context.multipleUpdateValue([{key:'Evaluations',value:updatedEvaluations}])

            }
            this.setState({pocessedXrayLoading:false})
        }

        else
        {
            console.log('failed!!! ',response)
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
                                    <Button className="Evaluaion_PatientProfile_Box_Button"  variant="contained" onClick={()=>{this.context.history.push('./form-type')}}> PRO: KOOS </Button>
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
                                    <div className="Evaluaion_PatientProfile_Box_DisbaleText"> Confirm Evaluations </div>
                                
                                :
                                    this.state.pocessedXrayLoading===true
                                
                                ?
                                    <div className='Evaluaion_PatientProfile_Disable_Box'>
                                        <Button className="Evaluaion_PatientProfile_Box_Button Evaluaion_PatientProfile_Box_DisbaleButton" variant="contained" disabled={true}> Confirm Evaluations </Button>
                                        <div className="Evaluaion_PatientProfile_Box_DisbaleText3">
                                            <Loader
                                            type="Rings"
                                            color="#B4EC51"
                                            height={60}
                                            width={60}   
                                            style={{display:'inline-block',verticalAlign:'middle',opacity:'1'}}                                 
                                            /> Processing X-rays...
                                        </div>
                                    </div>
                                :   
                                    <Button className="Evaluaion_PatientProfile_Box_Button" variant="contained" onClick={()=>{this.context.history.push('./x-ray-matching')}}> Confirm Evaluations </Button>
                                }
                            </div>



                        </div>
                    </div>

                    <div  id="Evaluaion_PatientProfile_Content2_Wrapper">

                        {this.context.state.Eval.length>1||this.context.state.joint_id=='3'?
                            <div className="Evaluaion_PatientProfile_Image_Left_Div">

                                <div className="Evaluaion_PatientProfile_Image_Left_Inner_Down" >
                                    <div className="Evaluaion_PatientProfile_Image_Left_Inner_Down_Content1">
                                        <TextField value={"Priority: "+this.context.state.Eval.find(eva=>eva.joint_id.toString()=='3').priority_id} style={{width:'115px'}} variant="outlined" inputProps = { {className:"textbox-height"} }/> 
            
                                    </div>  
                                    <div className="Evaluaion_PatientProfile_Image_Left_Inner_Down_Content2">
                                            <div style={{color:'white',marginBottom:'10px',fontSize:'18px'}}>
                                                RIGHT KNEE
                                            </div>
                                        <img style={{width:'40px',marginBottom:'20px'}} src={RightKneeIconRed}/>
                                    </div>
                                    
                                </div>
                            </div>
                        :null}


                        <div id="Evaluaion_PatientProfile_Image_Bone_Div"> <img src={this.context.state.Eval.length>1?BoneImage2:this.context.state.joint_id=='3'?BoneImage:BoneImage1} alt="SBS" id="Evaluaion_PatientProfile_Image_Bone" /></div>
                        {this.context.state.Eval.length>1||this.context.state.joint_id=='4'?
                            <div className="Evaluaion_PatientProfile_Image_Right_Div">

                                <div className="Evaluaion_PatientProfile_Image_Right_Inner_Down" >
                                    <div className="Evaluaion_PatientProfile_Image_Right_Inner_Up_Content2">
                                            <div style={{color:'white',marginBottom:'10px',fontSize:'18px'}}>
                                                LEFT KNEE
                                            </div>
                                        <img style={{width:'40px',marginBottom:'20px'}} src={LeftKneeIconRed}/>
                                    </div>
                                    <div className="Evaluaion_PatientProfile_Image_Right_Inner_Down_Content1">
                                        <TextField value={"Priority: "+this.context.state.Eval.find(eva=>eva.joint_id.toString()=='4').priority_id} style={{width:'115px'}} variant="outlined" inputProps = { {className:"textbox-height"} }/> 
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