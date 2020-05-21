import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';


import RightHipIcon from '../../assets/right-hip-icon.png'
import LeftHipIcon from '../../assets/left-hip-icon.png'
import RightKneeIcon from '../../assets/right-knee-icon.png'
import LeftKneeIcon from '../../assets/left-knee-icon.png'
import BoneImage from '../../assets/bone2_Bitmap.png'

import MyContext from '../../helper/themeContext';

import './newEvaluation.css'
import PostData from '../../Fetch/postData1';
import SemipolarLoading from 'react-loadingg/lib/SemipolarLoading';


const MenuItems = [{name:'Priority: No Pain', id:'0'},{name:'Priority: 1', id:'1'},{name:'Priority: 2', id:'2'},{name:'Priority: 3', id:'3'},{name:'Priority: 4', id:'4'}]

class NewEvaluation extends Component {
    constructor(props) {
        super(props);
        this.state = {  priority1:0,priority2:0,priority3:0,priority4:0}
    }

    componentDidMount()
    {
        console.log(this.context.state.report_id)
        if(this.context.state.Eval.length>0)
        {
            let priority2=0,priority4=0;
            this.context.state.Eval.forEach(element => {

                if(element.joint_id==3)
                {
                    priority2=element.priority_id;
                }

                else if(element.joint_id==4)
                {
                    priority4=element.priority_id
                }
                
            });

            this.setState({priority2,priority4})
        }
    }

    // handleClick = () =>
    // {
    //     this.context.multipleUpdateValue([{key:'name',value:'ammar'},{key:'sukoon',value:'sukn'}])
    // }
    handleClick = () =>
    {
        if(this.context.state.old==true && parseInt(this.context.state.evaluation_stage)>1)
        {
            this.context.history.push('./patient-profile');
        }
        else 
        {
            let Eval=[];
            // let visitor_id=this.context.state.user_id;
            let visitor_id=this.context.state.report_id;
            console.log(visitor_id);
            if(this.state.priority1!='0')
            {
                Eval.push({visitor_id:visitor_id,joint_id:'1',name:'Right Hip',priority_id:this.state.priority1,isEvaluated:false,joint_hurt_id:null})   // Right Hip
            }
            if(this.state.priority3!='0')
            {
                Eval.push({visitor_id:visitor_id,joint_id:'2',name:'Left Hip',priority_id:this.state.priority3,isEvaluated:false,joint_hurt_id:null})   // Left Hip
            }

            if(this.state.priority2!='0')
            {
                Eval.push({visitor_id:visitor_id,joint_id:'3',name:'Right Knee',priority_id:this.state.priority2,isEvaluated:false,joint_hurt_id:null})   // Right Knee
            }

            if(this.state.priority4!='0')
            {
                Eval.push({visitor_id:visitor_id,joint_id:'4',name:'Left Knee',priority_id:this.state.priority4,isEvaluated:false,joint_hurt_id:null})   // Left Knee
            }

            let active=0;
            let activePriority=0;
            let id=0;
            if(Eval.length>0)
            {
                while(Eval.length>id)
                {
                    if(Eval[id].priority_id>activePriority)
                    {
                        activePriority=Eval[id].priority_id;
                        active=Eval[id].joint_id;
                    }
                    id++;
                }
            }

            if(active==0)
            {
                alert('Please select a joint');
                return;
            }

            else
            { 
                console.log(active,'active')
                console.log(activePriority,'activePriority')
                console.log(Eval,'Eval')
            
                this.setState({loading:true,active:active,activePriority:activePriority,Eval:Eval})
                PostData(this.context.baseUrl+'/api/v1/joint/priority',200,Eval,this.context.state.token,this.setMe)

            // this.context.multipleUpdateValueWithHistory([{key:'activePriority',value:activePriority},{key:'joint_id',active},{key:'Eval',Eval}],'./patient-profile')
          
            }
        }
    }

    setMe = (response) =>
    {
        if(response.res && response.res.length>0)
        {
            let Eval=this.state.Eval;
            response.res.forEach(element => {

                Eval.filter(eva => eva.joint_id==element.joint_id)[0].joint_hurt_id=element.id;
                
                
            });
            console.log(Eval);
            this.context.updateSession();
            this.context.setCookie('evaluation_stage',2,30);
            this.context.multipleUpdateValueWithHistory([{key:'activePriority',value:this.state.activePriority},{key:'joint_id',value:this.state.active},{key:'Eval',value:Eval}],'./patient-profile')
            // this.setState({loading:false})
        }

        else
        {
            this.setState({loading:false})
            alert('Something went Wrong, Please try again later.')
        }
    }
    handleChange= (e) =>
    {
        this.setState({[e.target.name]:e.target.value})
    }
    
    render() { 
        const old = this.context.state.old==true && parseInt(this.context.state.evaluation_stage)>1?true:false;
        return ( 
        <div id="Evaluaion_NewEvaluation_Main_Div">
            {this.state.loading==true?<SemipolarLoading size={"large"} color={'#b4ec51'}/>
            :
            
                <div  id="Evaluaion_NewEvaluation_Content_Wrapper">
                    <div id="Evaluaion_NewEvaluation_Heading1_Div">
                        New Evaluation 
                    </div>
                    <div id="Evaluaion_NewEvaluation_Heading2_Div">
                        Indicate which joints hurt
                    </div>
                    <div id="Evaluaion_NewEvaluation_Text_Div">
                        If a joint hurts, click on the priority label to rank the joint from 1 to 4.
                        1 represents the joint that hurts the most.  If a joint does not hurt, leave it as “No Pain.”
                    </div>

                    <div id="Evaluaion_NewEvaluation_Image_div">

                        <div className="Evaluaion_NewEvaluation_Image_Left_Div">
                        
                            <div className="Evaluaion_NewEvaluation_Image_Left_Inner_Up" >
                                <div className="Evaluaion_NewEvaluation_Image_Left_Inner_Up_Content1">
                                    <FormControl  variant="outlined" style={{color:'white'}}>
                                        {/* <InputLabel  htmlFor="outlined-priority1-native-simple" style={{color:'white'}}>Priority</InputLabel> */}
                                        <Select
                                        
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
                                            className:"new-evaluation-select-box"

                                        }}
                                        style={{height:'60px',minWidth:'180px',color:'white',borderRadius:'0px'}}
                                        
                                        value={this.state.priority1}
                                        onChange={this.handleChange}
                                        // label="Priority"
                                        inputProps={{
                                            name: 'priority1',
                                            className:"input-class-height"
                                            
                                        }}
                                        >
                                            {/* {MenuItems.map((option,id)=> <MenuItem key={id} className="Evaluaion_NewEvaluation_MenuItem" value={option.id}>{option.name}</MenuItem>)} */}
                                        </Select>
                                    </FormControl>
        
                                </div>  
                                <div className="Evaluaion_NewEvaluation_Image_Left_Inner_Up_Content2">
                                        <div style={{color:'white',marginBottom:'10px',fontSize:'18px'}}>
                                            RIGHT HIP
                                        </div>
                                    <img style={{width:'40px',marginBottom:'20px'}} src={RightHipIcon}/>
                                </div>
                                
                            </div>

                            <div className="Evaluaion_NewEvaluation_Image_Left_Inner_Down" >
                                <div className="Evaluaion_NewEvaluation_Image_Left_Inner_Down_Content1">
                                    <FormControl  variant="outlined" style={{color:'white'}}>
                                        {/* <InputLabel  htmlFor="outlined-priority1-native-simple" style={{color:'white'}}>Priority</InputLabel> */}
                                        <Select
                                        disabled={old}
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
                                            className:"new-evaluation-select-box"
                                        }}
                                        style={{height:'60px',minWidth:'180px',color:'white',borderRadius:'0px'}}
                                        
                                        value={this.state.priority2}
                                        onChange={this.handleChange}
                                        // label="Priority"
                                        inputProps={{
                                            name: 'priority2',
                                            className:"input-class-height"
                                            
                                        }}
                                        >
                                            {MenuItems.map((option,id)=> <MenuItem key={id} className="Evaluaion_NewEvaluation_MenuItem" value={option.id}>{option.name}</MenuItem>)}
                                        </Select>
                                    </FormControl>
        
                                </div>  
                                <div className="Evaluaion_NewEvaluation_Image_Left_Inner_Down_Content2">
                                        <div style={{color:'white',marginBottom:'10px',fontSize:'18px'}}>
                                            RIGHT KNEE
                                        </div>
                                    <img style={{width:'40px',marginBottom:'20px'}} src={RightHipIcon}/>
                                </div>
                                
                            </div>


                        </div>
                    
                        <div id="Evaluaion_NewEvaluation_Image_Wrapper" >
                            <img src={BoneImage} alt="SBS" id="Evaluaion_NewEvaluation_Image_Bone"/>   
                        </div>
                        
                        <div className="Evaluaion_NewEvaluation_Image_Right_Div">
                            <div className="Evaluaion_NewEvaluation_Image_Right_Inner_Up" >
                                <div className="Evaluaion_NewEvaluation_Image_Right_Inner_Up_Content2">
                                        <div style={{color:'white',marginBottom:'10px',fontSize:'18px'}}>
                                            LEFT HIP
                                        </div>
                                    <img style={{width:'40px',marginBottom:'20px'}} src={RightHipIcon}/>
                                </div>
                                <div className="Evaluaion_NewEvaluation_Image_Right_Inner_Up_Content1">
                                    <FormControl  variant="outlined" style={{color:'white'}}>
                                        {/* <InputLabel  htmlFor="outlined-priority1-native-simple" style={{color:'white'}}>Priority</InputLabel> */}
                                        <Select
                                        
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
                                            className:"new-evaluation-select-box"
                                        }}
                                        style={{height:'60px',minWidth:'180px',color:'white',borderRadius:'0px'}}
                                        
                                        value={this.state.priority3}
                                        onChange={this.handleChange}
                                        // label="Priority"
                                        inputProps={{
                                            name: 'priority3',
                                            className:"input-class-height"
                                            
                                        }}
                                        >
                                            {/* {MenuItems.map((option,id)=> <MenuItem key={id} className="Evaluaion_NewEvaluation_MenuItem" value={option.id}>{option.name}</MenuItem>)} */}
                                        </Select>
                                    </FormControl>
        
                                </div>  
                                
                                
                            </div>

                            <div className="Evaluaion_NewEvaluation_Image_Right_Inner_Down" >

                                <div className="Evaluaion_NewEvaluation_Image_Right_Inner_Up_Content2">
                                        <div style={{color:'white',marginBottom:'10px',fontSize:'18px'}}>
                                            LEFT KNEE
                                        </div>
                                    <img style={{width:'40px',marginBottom:'20px'}} src={RightHipIcon}/>
                                </div>
                                <div className="Evaluaion_NewEvaluation_Image_Right_Inner_Down_Content1">
                                    <FormControl  variant="outlined" style={{color:'white'}}>
                                        {/* <InputLabel  htmlFor="outlined-priority1-native-simple" style={{color:'white'}}>Priority</InputLabel> */}
                                        <Select
                                        disabled={old}
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
                                            className:"new-evaluation-select-box"

                                        }}
                                        style={{height:'60px',minWidth:'180px',color:'white',borderRadius:'0px'}}
                                        
                                        value={this.state.priority4}
                                        onChange={this.handleChange}
                                        // label="Priority"
                                        inputProps={{
                                            name: 'priority4',
                                            className:"input-class-height"
                                            
                                        }}
                                        >
                                            {MenuItems.map((option,id)=> <MenuItem key={id} className="Evaluaion_NewEvaluation_MenuItem" value={option.id}>{option.name}</MenuItem>)}
                                        </Select>
                                    </FormControl>
        
                                </div>  
                                
                                
                            </div>

                        </div>
                    
                    </div>
                    <div id="Evaluaion_NewEvaluation_Next_Button_Div">
                        <Button id="Evaluaion_NewEvaluation_Next_Button" variant="contained" onClick={this.handleClick}> Next </Button>
                    </div>
                </div>
            }
            
        </div> );
    }
}

NewEvaluation.contextType=MyContext;
export default NewEvaluation;