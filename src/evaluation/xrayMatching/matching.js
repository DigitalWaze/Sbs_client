import React, { Component } from 'react';

import Button from '@material-ui/core/Button';


import './matching.css'

class Matching extends Component {
    constructor(props) {
        super(props);
        this.state = { Active:null , Notes:null }
    }

    handleClick = (e) =>
    {
        this.setState({Active:e.target.innerText})
    }
    handleConfirmClick = ()=>
    {
        if(this.state.Active)
        this.props.handleClick(this.state.Active,this.state.Notes)
    }
    render() { 
        return (  
            <div id="Evaluaion_XrayMatching_Matching_Main_Div">
                <div  id="Evaluaion_XrayMatching_Matching_Content1_Wrapper">
                    <div id="Evaluaion_XrayMatching_Matching_Heading1_Div">
                        X-Ray Matching
                    </div>
                    <div id="Evaluaion_XrayMatching_Matching_Heading2_Div">
                        Click on the levels of degeneration to view X-rays from the database.
                        Once you believe you have found a match, click "Confirm Evaluation" to move onto the next view.
                    </div>
                    {
                        ['Normal to Sight','Moderate','Near End Stage','End Stage'].map((text,id)=>
                        <div className="Evaluaion_XrayMatching_Matching_State_Button_Div" key={id}>
                            <Button className="Evaluaion_XrayMatching_Matching_State_Button" style={{color:this.state.Active===text?'':'#fff', background:this.state.Active===text?'#fffb00':'hsla(0, 0%, 100%, 0.08)'}} variant="contained" onClick={this.handleClick}> {text} </Button>
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
                                <Button className="Evaluaion_XrayMatching_Matching_AddNotes_Button" variant="contained" onClick={this.handleNotesClick}> Add Notes </Button>
                            </div>
                        }
                        
                    </div>
                    
                </div>
                <div  id="Evaluaion_XrayMatching_Matching_Content2_Wrapper">
                    <div id="Evaluaion_XrayMatching_Matching_Heading3_Div">
                        {this.props.ActiveType} {this.props.ActiveXray}
                    </div>
                    {/* <div>
                        <img src={this.props.image}/>
                    </div> */}
                     
                </div>

            
            </div>
        );
    }
}
 
export default Matching;