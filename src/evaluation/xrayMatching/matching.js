import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';


import './matching.css'
import MyContext from '../../helper/themeContext';

class Matching extends Component {
    constructor(props) {
        super(props);
        this.state = { Active:null , Notes:'',openModal:false,tempNotes:null }
    }

    componentDidMount()
    {
        if(this.context.state.joint_id=='4')
        {
            document.getElementById('Evaluaion_XrayMatching_Matching_Content2_Wrapper').classList.add('flipme');
        }
    }

    Submit = () =>
    {
        this.setState({Notes:this.state.tempNotes,openModal:false});
    }

    textAreaChange = (e) =>
    {
        this.setState({tempNotes:e.target.value})
        
    }



    handleModalClose = () =>
    {
        this.setState({openModal:false})
    }
    handleModalOpen = () =>
    {
        this.setState({openModal:true,tempNotes:this.state.Notes})
    }

    handleClick = (id) =>
    {
        this.setState({Active:id})
        console.log(id)
    }
    handleConfirmClick = ()=>
    {
        if(this.state.Active)
        this.props.handleClick(this.state.Active,this.state.Notes)
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
                            <Button className="Evaluaion_XrayMatching_Matching_State_Button" style={{color:this.state.Active===text.id?'':'#fff', background:this.state.Active===text.id?'#fffb00':'hsla(0, 0%, 100%, 0.08)'}} variant="contained" onClick={()=>this.handleClick(text.id)}> {text.name} </Button>
                        </div>
                        )
                    }
                    <div style={{display:'block',width:'100%'}}>
                        <div className="Evaluaion_XrayMatching_Matching_Confirm_Button_Div" >
                            <Button className="Evaluaion_XrayMatching_Matching_Confirm_Button"  disabled={!this.state.Active} variant="contained" onClick={this.handleConfirmClick}> Confirm Evaluation </Button>
                        </div>
                        {
                            this.state.Active &&
                            <div className="Evaluaion_XrayMatching_Matching_AddNotes_Button_Div">
                                <Button className="Evaluaion_XrayMatching_Matching_AddNotes_Button" variant="contained" onClick={this.handleModalOpen}> Add Notes </Button>
                            </div>
                        }
                        
                    </div>
                    
                </div>
                <div  id="Evaluaion_XrayMatching_Matching_Content2_Wrapper">
                    <div id="Evaluaion_XrayMatching_Matching_Heading3_Div">
                        RIGHT KNEE - {this.props.ActiveType=="Kneecap"?'KNEECAP':this.props.ActiveType.toUpperCase() + ' ' + this.props.ActiveXray}
                    </div>
                   
                    <div style={{width:'100%',height:'calc(50% - 30px)'}}>
                        <img style={{maxWidth:'100%',maxHeight:'100%'}} src={this.props.eval.Xrays[this.props.ActiveTypeIndex].xrays[this.props.ActiveXrayIndex].up}/>
                    </div>
                    {
                    this.state.Active!=null?
                        <div style={{width:'100%',height:'calc(50% - 30px)'}}>
                            <img style={{maxWidth:'100%',maxHeight:'100%'}} src={this.props.eval.Xrays[this.props.ActiveTypeIndex].xrays[this.props.ActiveXrayIndex][`up${this.state.Active}`] }/>
                        </div>
                    :   <div style={{width:'100%',height:'calc(50% - 30px)'}}>
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
                            <textarea className="Evaluaion_XrayMatching_Matching_Modal_Notes_TextArea" value={this.state.tempNotes} onChange={this.textAreaChange}>

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