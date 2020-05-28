import React, { Component } from 'react';

import Button from '@material-ui/core/Button';


import MyContext from '../../../helper/themeContext';

import NoMatching from '../../../assets/no_matching.png'
import Ruler from '../../../assets/ruler.png'

import './matching.css'

class Matching extends Component {
    constructor(props) {
        super(props);
        this.state = { Active:null , Notes:null,error:false,next:false }
    }

   

    handleClick = (id) =>
    {
        if(this.state.next==false)
        {
            this.setState({Active:id,error:false,next:false})
            console.log(id)
        }
        
    }
    handleConfirmClick = ()=>
    {
        if(this.state.Active)
        {
            if(this.state.next==false)
            { 
                if(this.state.Active!=this.props.eval.Xrays[this.props.ActiveTypeIndex].xrays[this.props.ActiveXrayIndex].answer)
                {
                    this.setState({error:true})
                }
                else if (this.state.Active==this.props.eval.Xrays[this.props.ActiveTypeIndex].xrays[this.props.ActiveXrayIndex].answer)
                {
                    this.setState({error:false,next:true})
                }
            }

            else this.props.handleClick(this.state.Active,this.state.Notes)
           
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
                    <div style={{display:'block',width:'100%'}}>
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
                       
                        {
                            this.state.Active &&
                            <div className="Evaluaion_XrayMatching_Matching_AddNotes_Button_Div">
                                <Button className="Evaluaion_XrayMatching_Matching_AddNotes_Button" variant="contained" onClick={this.handleNotesClick}> Add Notes </Button>
                            </div>
                        }
                        
                    </div>
                    
                </div>
                <div  id="Evaluaion_XrayMatching_Matching_Content2_Wrapper">
                    <div id="Evaluaion_XrayMatching_Matching_Heading3_Div">
                        {this.props.ActiveType=="Kneecap"?'Kneecap':this.props.ActiveType + ' ' + this.props.ActiveXray}
                    </div>
                   
                    <div style={{maxWidth:'500px',maxHeight:'calc(50% - 30px)'}}>
                        <img style={{maxWidth:'100%',maxHeight:'100%'}} src={this.props.eval.Xrays[this.props.ActiveTypeIndex].xrays[this.props.ActiveXrayIndex].up}/>
                    </div>
                    {
                    this.state.Active!=null?
                        <div style={{maxWidth:'500px',maxHeight:'calc(50% - 30px)'}}>
                            <img style={{maxWidth:'100%',maxHeight:'100%'}} src={this.props.eval.Xrays[this.props.ActiveTypeIndex].xrays[this.props.ActiveXrayIndex][`up${this.state.Active}`] }/>
                        </div>
                    :   <div className="matching-down" >
                            <div style={{background:'black',height:'100%',width:'100%'}}>
                                <img style={{maxWidth:'100%',maxHeight:'100%',height:'auto',width:'auto'}} src={NoMatching}/>
                                <img style={{position:'absolute',right:'0px'}} src={Ruler} />
                            </div>
                        </div>

                    }
                     
                </div>

            
            </div>
        );
    }
}
Matching.contextType=MyContext;
export default Matching;