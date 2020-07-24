import React, { Component } from 'react';

import Button from '@material-ui/core/Button';


import MyContext from '../../../helper/themeContext';
import Modal from '@material-ui/core/Modal';

import NoMatching from '../../../assets/no_matching.png'
import NotesIcon from '../../../assets/notes.png'
import Ruler from '../../../assets/ruler.png'

import './matching.css'

class Matching extends Component {
    constructor(props) {
        super(props);
        this.state = { Active:null , Notes:'',error:false,next:false,openModal:false,textIndent:'0px'}
    }

    componentDidMount()
    {
        
        if(this.props.ActiveXray==="Flexion View")
        {
            this.setState({textIndent:'200px'})
        }
        else if(this.props.ActiveXray==="Non-Flexion View")
        {
            this.setState({textIndent:'250px'})
        }
        else this.setState({textIndent:'150px'})

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

    handleModalClose = () =>
    {
        this.setState({openModal:false})
    }
    handleModalOpen = () =>
    {
        this.setState({openModal:true,tempNotes:this.state.Notes})
    }

    Submit =() =>
    {
        this.setState({Notes:this.state.tempNotes,openModal:false});
    }
    textAreaChange = (e) =>
    {
        this.setState({tempNotes:e.target.value})
        
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
                                <Button className="Evaluaion_XrayMatching_Matching_AddNotes_Button" variant="contained" onClick={this.handleModalOpen}> Add Notes <img style={{marginLeft:'15px'}} src={NotesIcon}/></Button>
                            </div>
                        }
                        
                    </div>
                    
                </div>
                <div  id="Evaluaion_XrayMatching_Matching_Content2_Wrapper">
                    <div id="Evaluaion_XrayMatching_Matching_Heading3_Div">
                        RIGHT KNEE - {this.props.ActiveType=="Kneecap"?'KNEECAP': <span> {this.props.ActiveType.toUpperCase()}  <br/> <span> {this.props.ActiveXray.toUpperCase()} </span>  </span> }
                    </div>
                   
                    <div  className="Evaluaion_XrayMatching_Matching_Xray_Image_Wrapper">
                        <img className="Evaluaion_XrayMatching_Matching_Xray_Image" src={this.props.eval.Xrays[this.props.ActiveTypeIndex].xrays[this.props.ActiveXrayIndex].up}/>
                        <div className="Evaluaion_XrayMatching_Matching_Image_Label1">
                            YOUR PATIENT
                        </div>
                    </div>
                    {
                    this.state.Active!=null?
                        <div className="Evaluaion_XrayMatching_Matching_Xray_Image_Wrapper" >
                            <img className="Evaluaion_XrayMatching_Matching_Xray_Image" src={this.props.eval.Xrays[this.props.ActiveTypeIndex].xrays[this.props.ActiveXrayIndex][`up${this.state.Active}`] }/>
                        </div>
                    :   <div className="matching-down" >
                            <img className="Evaluaion_XrayMatching_Matching_Xray_Image" src={NoMatching}/>
                            <div className="Evaluaion_XrayMatching_Matching_Image_Label2">
                                COMPARISION X-RAYS
                            </div>
                        </div>

                    }
                     
                </div>
                <Modal
                open={this.state.openModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{position:'absolute',left:'calc(50vw - 250px)',top:'calc(50vh - 250px)'}}
                >
                    <div className="Evaluaion_XrayMatching_Matching_Modal_Div">

                        <div className="Evaluaion_XrayMatching_Matching_Modal_Heading">
                            Notes
                        </div>
                        <div className="Evaluaion_XrayMatching_Matching_Modal_Notes_Div" >
                            <div className="Evaluaion_XrayMatching_Matching_Modal_Notes_Heading">{"RIGHT " + (this.props.ActiveXray==="Flexion View"?"Flexion "  + this.props.ActiveType + " : " :this.props.ActiveXray==="Non-Flexion View" ?"Non-Flexion " + this.props.ActiveType +" : " : "Kneecap : ")}</div> 

                            <textarea className="Evaluaion_XrayMatching_Matching_Modal_Notes_TextArea" style={{textIndent:this.state.textIndent}} value={this.state.tempNotes} onChange={this.textAreaChange}>

                            </textarea>
                        </div>
                        <div style={{marginTop:'20px',marginLeft:'50px'}}>
                            <div className="Evaluaion_XrayMatching_Matching_Modal1_Button_Div">
                                <Button className="Evaluaion_XrayMatching_Matching_AddNotes_Button" variant="contained" onClick={this.Submit}> Submit </Button>
                            </div>
                            <div className="Evaluaion_XrayMatching_Matching_Modal2_Button_Div">
                                <Button className="Evaluaion_XrayMatching_Matching_Modal2_Button" variant="outlined" onClick={this.handleModalClose}> Cancel </Button>
                            </div>

                        </div>
                       
                    </div>
                </Modal>

            
            </div>
        );
    }
}
Matching.contextType=MyContext;
export default Matching;