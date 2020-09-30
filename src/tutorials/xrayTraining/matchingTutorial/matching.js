import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import MyContext from '../../../helper/themeContext';
import NoMatching from '../../../assets/no_matching.png'
import Ruler from '../../../assets/ruler.png'


import MF1 from '../../assets/xray-training-medial-flex1.png'
import MF2 from '../../assets/xray-training-medial-flex2.png'
import MF3 from '../../assets/xray-training-medial-flex3.png'
import MF4 from '../../assets/xray-training-medial-flex4.png'

import MNF1 from '../../assets/xray-training-medial-nonflex1.png'
import MNF2 from '../../assets/xray-training-medial-nonflex2.png'
import MNF3 from '../../assets/xray-training-medial-nonflex3.png'
import MNF4 from '../../assets/xray-training-medial-nonflex4.png'

import LF1 from '../../assets/xray-training-lateral-flex1.png'
import LF2 from '../../assets/xray-training-lateral-flex2.png'
import LF3 from '../../assets/xray-training-lateral-flex3.png'
import LF4 from '../../assets/xray-training-lateral-flex4.png'

import LNF1 from '../../assets/xray-training-lateral-nonflex1.png'
import LNF2 from '../../assets/xray-training-lateral-nonflex2.png'
import LNF3 from '../../assets/xray-training-lateral-nonflex3.png'
import LNF4 from '../../assets/xray-training-lateral-nonflex4.png'

import KV1 from '../../assets/xray-training-kneecap-view1.png'
import KV2 from '../../assets/xray-training-kneecap-view2.png'
import KV3 from '../../assets/xray-training-kneecap-view3.png'
import KV4 from '../../assets/xray-training-kneecap-view4.png'

import ProgressBarIni from '../../assets/progress_bar_ini.png'
import ProgressBar from '../../assets/progress_bar.png'
import ProgressBar0 from '../../assets/progress_bar0.png'
import ProgressBar1 from '../../assets/progress_bar1.png'
import ProgressBar2 from '../../assets/progress_bar2.png'
import ProgressBar3 from '../../assets/progress_bar3.png'
import ProgressBar4 from '../../assets/progress_bar4.png'
import ProgressBar5 from '../../assets/progress_bar5.png'


import './matching.css'

let MedialFlex=[{imageUrl:MF1,answer:'2'},{imageUrl:MF2,answer:'1'},{imageUrl:MF3,answer:'4'},{imageUrl:MF4,answer:'3'}]
let MedialNonFlex=[{imageUrl:MNF1,answer:'1'},{imageUrl:MNF2,answer:'2'},{imageUrl:MNF3,answer:'3'},{imageUrl:MNF4,answer:'4'}]
let LateralFlex=[{imageUrl:LF1,answer:'1'},{imageUrl:LF2,answer:'2'},{imageUrl:LF3,answer:'4'},{imageUrl:LF4,answer:'3'}]
let LateralNonFlex=[{imageUrl:LNF1,answer:'3'},{imageUrl:LNF2,answer:'1'},{imageUrl:LNF3,answer:'4'},{imageUrl:LNF4,answer:'2'}]
let KneecapView=[{imageUrl:KV1,answer:'4'},{imageUrl:KV2,answer:'1'},{imageUrl:KV3,answer:'3'},{imageUrl:KV4,answer:'2'}]


class Matching extends Component {
    constructor(props) {
        super(props);
        this.state = { Active:null , Notes:null,error:false,next:false,Xrays:[],loading:true,training:0 }
    }


    UNSAFE_componentWillMount()
    {   
        console.log(this.props.ActiveType+''+this.props.ActiveXray)
        if(this.props.ActiveType+this.props.ActiveXray=='MedialFlexion View')
        {
            this.setState({Xrays:MedialFlex,training:0,loading:false})
        }

        else if(this.props.ActiveType+this.props.ActiveXray=='MedialNon-Flexion View')
        {
            this.setState({Xrays:MedialNonFlex,training:0,loading:false})
        }

        else if(this.props.ActiveType+this.props.ActiveXray=='LateralFlexion View')
        {
            this.setState({Xrays:LateralFlex,training:0,loading:false})
        }

        else if(this.props.ActiveType+this.props.ActiveXray=='LateralNon-Flexion View')
        {
            this.setState({Xrays:LateralNonFlex,training:0,loading:false})
        }

        else if(this.props.ActiveType+this.props.ActiveXray=='KneecapKneecap')
        {
            this.setState({Xrays:KneecapView,training:0,loading:false})
        }
    }

    handleClick = (id) =>
    {
        if(this.state.next==false)
        {
            this.setState({Active:id,error:false})
            console.log(id)
        }
        
    }
    handleConfirmClick = ()=>
    {
        if(this.state.Active)
        {
            if(this.state.next==false)
            { 
                if(this.state.Active!=this.state.Xrays[this.state.training].answer)
                {
                    this.setState({error:true})
                }
                else if (this.state.Active==this.state.Xrays[this.state.training].answer)
                {
                    this.setState({error:false,next:true})
                }
            }

            else {
                if(this.state.training==3)
                {
                    this.props.handleClick(this.state.Active,this.state.Notes)
                }

                else this.setState({training:this.state.training+1,error:false,next:false,Active:null , Notes:null})


            } 
           
        }
        
    }
    render() { 
        return (  
            <div>
                <div  id="Evaluaion_XrayMatching_Matching_Content1_Wrapper">
                    <div id="Evaluaion_XrayMatching_Matching_Heading1_Div">
                        X-Ray Matching
                    </div>
                    <div id="Evaluaion_XrayMatching_Matching_Heading2_Div">
                        Click on the levels of degeneration to view X-rays from the database.
                        Once you believe you have found a match, click "Confirm Evaluation" to move onto the next view.
                    </div>
                    {
                        [{name:'Normal to Slight',id:'1'},{name:'Moderate',id:'2'},{name:'Near End Stage',id:'3'},{name:'End Stage',id:'4'}].map((text,id)=>
                        <div className="Evaluaion_XrayMatching_Matching_State_Button_Div" key={id}>
                            <Button className="Evaluaion_XrayMatching_Matching_State_Button"  style={{ background:this.state.Active===text.id?this.state.error==true?'#C50000':'#fffb00':'hsla(0, 0%, 100%, 0.08)'}} variant="contained" onClick={()=>this.handleClick(text.id)}> <span  style={{color:this.state.Active===text.id?this.state.error==true?'#ffffff':'#000000':'#ffffff'}}> {text.name} </span> </Button>
                        </div>
                        )
                    }
                    <div style={{display:'block',width:'100%',marginTop:'40px'}}>
                        {
                            this.state.next==true?<div className="Tutorial_XrayMatching_Matching_Correct_Div">
                                Correct answer
                            </div>:null
                        }
                        {
                            this.state.error==false?
                                <div className="Evaluaion_XrayMatching_Matching_Confirm_Button_Div" >
                                    <Button className="Evaluaion_XrayMatching_Matching_Confirm_Button"  disabled={!this.state.Active} variant="contained" onClick={this.handleConfirmClick}> {this.state.next==false?'Confirm Evaluation':'Next Evaluation'} </Button>
                                </div>
                            :   <div className="Tutorial_XrayMatching_Matching_Error_Div">
                                    Incorrect. Please Try Again.
                                </div>
                        }   
                       
                        {/* {
                            this.state.Active &&
                            <div className="Evaluaion_XrayMatching_Matching_AddNotes_Button_Div">
                                <Button className="Evaluaion_XrayMatching_Matching_AddNotes_Button" variant="contained" onClick={this.handleNotesClick}> Add Notes </Button>
                            </div>
                        } */}
                        
                    </div>
                    
                </div>
                <div  id="Evaluaion_XrayMatching_Matching_Content2_Wrapper">
                    <div id="Evaluaion_XrayMatching_Matching_Heading3_Div">
                        RIGHT KNEE - {this.props.ActiveType=="Kneecap"?'KNEECAP': <span> {this.props.ActiveType.toUpperCase()}  <br/> <span> {this.props.ActiveXray.toUpperCase()} </span>  </span> }
                    </div>
                   
                    <div className="Evaluaion_XrayMatching_Matching_Xray_Image_Wrapper">
                        <img className="Evaluaion_XrayMatching_Matching_Xray_Image"  src={this.state.Xrays[this.state.training].imageUrl}/>
                        <div className="Evaluaion_XrayMatching_Matching_Image_Label1">
                            YOUR PATIENT
                        </div>
                    </div>
                    {
                    this.state.Active!=null?
                        <div className="Evaluaion_XrayMatching_Matching_Xray_Image_Wrapper">
                            <img className="Evaluaion_XrayMatching_Matching_Xray_Image" src={this.props.eval.Xrays[this.props.ActiveTypeIndex].xrays[this.props.ActiveXrayIndex][`up${this.state.Active}`] }/>
                            <img style={{position:'absolute',right:'0px'}} src={Ruler} />
                        </div>
                    :   <div className="matching-down" >
                            <img className="Evaluaion_XrayMatching_Matching_Xray_Image" src={NoMatching}/>
                            <div className="Evaluaion_XrayMatching_Matching_Image_Label2">
                                COMPARISION X-RAYS
                            </div>

                        </div>

                    }
                     
                </div>

                <div  id="Evaluaion_XrayMatching_Matching_Content3_Wrapper">

                    <img src={this.state.training==0?this.state.next==false?ProgressBarIni:ProgressBar:this.state.training==1?this.state.next==false?ProgressBar0:ProgressBar1:this.state.training==2?this.state.next==false?ProgressBar2:ProgressBar3:this.state.training==3?this.state.next==false?ProgressBar4:ProgressBar5:null}  width="auto" style={{maxHeight:'calc(100vh - 40px)',maxWidth:'32px',height:'auto',width:'auto'}}/>
                
                </div>

            
            </div>
        );
    }
}
Matching.contextType=MyContext;
export default Matching;