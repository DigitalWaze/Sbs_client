import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { TextField } from '@material-ui/core';



import RightHipIcon from '../../assets/right-hip-icon.png'
import LeftHipIcon from '../../assets/left-hip-icon.png'
import RightKneeIcon from '../../assets/right-knee-icon.png'
import LeftKneeIcon from '../../assets/left-knee-icon.png'
import BoneImage from '../../assets/bone2_Bitmap.png'

import RightKneeIconRed from '../../assets/right-knee-icon-red.png'
import LeftKneeIconRed from '../../assets/left-knee-icon-red.png'


import MyContext from '../../helper/themeContext';

import './newEvaluation.css'
import PostData from '../../Fetch/postData1';
import SemipolarLoading from 'react-loadingg/lib/SemipolarLoading';

let MenuItems2 = [{name:'Priority: No Pain', id:0},{name:'Priority: 1', id:1},{name:'Priority: 2', id:2},{name:'Priority: 3', id:3},{name:'Priority: 4', id:4}]
let MenuItems4 = [{name:'Priority: No Pain', id:0},{name:'Priority: 1', id:1},{name:'Priority: 2', id:2},{name:'Priority: 3', id:3},{name:'Priority: 4', id:4}]

let MenuItems = [{name:'Priority: No Pain', id:0},{name:'Priority: 1', id:1},{name:'Priority: 2', id:2},{name:'Priority: 3', id:3},{name:'Priority: 4', id:4}]

class NewEvaluation extends Component {
    constructor(props) {
        super(props);
        this.state = {  priority1:0,priority2:0,priority3:0,priority4:0,anyOne:false }
    }

    componentDidMount()
    {
        this.ResetMe();
        console.log(this.context.state.Eval)
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

    ResetMe = () =>
    {
        MenuItems2=MenuItems;
        MenuItems4=MenuItems;
        this.setState({priority2enable:true,priority4enable:true,priority1:0,priority2:0,priority3:0,priority4:0,anyOne:false})  
    }

    // handleClick = () =>
    // {
    //     this.context.multipleUpdateValue([{key:'name',value:'ammar'},{key:'sukoon',value:'sukn'}])
    // }


    setPriority = () =>
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
        let activePriority=6;
        let id=0;

        if(Eval.length>0)
        {
            while(Eval.length>id)
            {
                if(Eval[id].priority_id<activePriority)
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
        }
    }

    
    handleClick = () =>
    {

        console.log('here')

        if(this.context.state.evaluation_stage)
        {
            if(parseInt(this.context.state.evaluation_stage)>1)
            {
                this.context.history.push('./patient-profile');
            }
            // console.log('old')

            else this.setPriority();
        }


        else 
        {
            this.setPriority();
        }
    }

    setMe = (response) =>
    {
        let form=[];

        for(let i=0; i<this.state.Eval.length;i++)
        {
            form.push({name:'Question1',question_id:1,pro_severity_id:null,visitor_id:null,joint_id:this.state.Eval[i].joint_id});
            form.push({name:'Question2',question_id:2,pro_severity_id:null,visitor_id:null,joint_id:this.state.Eval[i].joint_id});
            form.push({name:'Question3',question_id:3,pro_severity_id:null,visitor_id:null,joint_id:this.state.Eval[i].joint_id});
            form.push({name:'Question4',question_id:4,pro_severity_id:null,visitor_id:null,joint_id:this.state.Eval[i].joint_id});
            form.push({name:'Question5',question_id:5,pro_severity_id:null,visitor_id:null,joint_id:this.state.Eval[i].joint_id});
            form.push({name:'Question6',question_id:6,pro_severity_id:null,visitor_id:null,joint_id:this.state.Eval[i].joint_id});
            form.push({name:'Question7',question_id:7,pro_severity_id:null,visitor_id:null,joint_id:this.state.Eval[i].joint_id});
        }
        if(response.res && response.res.length>0)
        {
            let Eval=this.state.Eval;
            let SettingEval = this.state.Eval;
            response.res.forEach(element => {
                Eval.filter(eva => eva.joint_id==element.joint_id)[0].joint_hurt_id=element.id;    
            });

            SettingEval.sort(function(a, b){ return a.priority_id-b.priority_id});
            this.context.multipleUpdateValueWithHistory([{key:'noOfEvalRemainToUpload',value:this.state.Eval.length},{key:'form',value:form},{key:'activeJointIndex',value:0},{key:'Eval',value:SettingEval},{key:'evaluation_stage',value:'2'}],'./patient-profile')
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
       
        

        if(e.target.name=='priority2')
        {
            if(e.target.value!=0)
            {
                MenuItems4=MenuItems4.filter(option => option.id!=e.target.value.toString())
            }
            if(this.state.priority2!=0 && this.state.priority2!=e.target.value)
            {
                MenuItems4.push(MenuItems[this.state.priority2])
            }
        }

        if(e.target.name=='priority4')
        {
            if(e.target.value!=0)
            {
                MenuItems2=MenuItems2.filter(option => option.id!=e.target.value.toString())
            }
            if(this.state.priority4!=0 && this.state.priority4!=e.target.value)
            {
                MenuItems2.push(MenuItems[this.state.priority4])
            }
        }
        
        this.setState({[e.target.name]:e.target.value,[e.target.name+'enable']:false,anyOne:true})
        
    }
    
    render() { 
        const old = parseInt(this.context.state.evaluation_stage)>1?true:false;

        console.log(old);
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
                                    <TextField value={"Priority: No Pain"}  className="Evaluaion_NewEvaluation_Disabled_TextBox" variant="outlined" inputProps = { {className:"textbox-height"} }/>
                                    {/* <FormControl  variant="outlined" style={{color:'white'}}>
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
                                        inputProps={{
                                            name: 'priority1',
                                            className:"input-class-height"
                                            
                                        }}
                                        >
                                        </Select>
                                    </FormControl> */}
        
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
                                    {this.state.priority2enable==false?
                                        <TextField value={"Priority: "+this.state.priority2} style={{width:'115px'}} variant="outlined" inputProps = { {className:"textbox-height"} }/> 
                                    :   <FormControl  variant="outlined" style={{color:'white'}}>
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
                                                {MenuItems2.map((option,id)=> <MenuItem key={id} className="Evaluaion_NewEvaluation_MenuItem" value={option.id}>{option.name}</MenuItem>)}
                                            </Select>
                                        </FormControl>
                                    }
                                    
                                </div>  
                                <div className="Evaluaion_NewEvaluation_Image_Left_Inner_Down_Content2">
                                        <div style={{color:'white',marginBottom:'10px',fontSize:'18px'}}>
                                            RIGHT KNEE
                                        </div>
                                    <img style={{width:'40px',marginBottom:'20px'}} src={this.state.priority2!=0?RightKneeIconRed:RightKneeIcon}/>
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
                                    <img style={{width:'40px',marginBottom:'20px'}} src={LeftHipIcon}/>
                                </div>
                                <div className="Evaluaion_NewEvaluation_Image_Right_Inner_Up_Content1">
                                    <TextField value={"Priority: No Pain"}  className="Evaluaion_NewEvaluation_Disabled_TextBox" variant="outlined" inputProps = { {className:"textbox-height"} }/>
                                    {/* <FormControl  variant="outlined" style={{color:'white'}}>
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
                                        inputProps={{
                                            name: 'priority3',
                                            className:"input-class-height"
                                            
                                        }}
                                        >
                                        </Select>
                                    </FormControl> */}
        
                                </div>  
                                
                                
                            </div>

                            <div className="Evaluaion_NewEvaluation_Image_Right_Inner_Down" >

                                <div className="Evaluaion_NewEvaluation_Image_Right_Inner_Up_Content2">
                                        <div style={{color:'white',marginBottom:'10px',fontSize:'18px'}}>
                                            LEFT KNEE
                                        </div>
                                    <img style={{width:'40px',marginBottom:'20px'}} src={this.state.priority4!=0?LeftKneeIconRed:LeftKneeIcon}/>
                                </div>
                                <div className="Evaluaion_NewEvaluation_Image_Right_Inner_Down_Content1">
                                    {this.state.priority4enable==false?
                                        <TextField value={"Priority: "+this.state.priority4} style={{width:'115px'}} variant="outlined" inputProps = { {className:"textbox-height"} }/> 
                                    :   <FormControl  variant="outlined" style={{color:'white'}}>
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
                                                {MenuItems4.map((option,id)=> <MenuItem key={id} className="Evaluaion_NewEvaluation_MenuItem" value={option.id}>{option.name}</MenuItem>)}
                                            </Select>
                                        </FormControl>
                                    }
        
                                </div>  
                                
                                
                            </div>

                        </div>
                    
                    </div>
                    {
                    old!=true && this.state.anyOne==true?
                        <div onClick={this.ResetMe} style={{position:'absolute',bottom:'10px',left:'calc(50% - 100px)',margin:'auto',textAlign:'center',fontSize:'17px',fontWeight:'bold',borderRadius:'50px',width:'100px',height:'100px',background:'#b4ec51'}}>
                            <div style={{alignSelf:'center',marginTop:'30px'}}>
                                Reset Priorities
                            </div>
                        </div>
                    :null
                    }
                    
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