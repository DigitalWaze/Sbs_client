import React, { Component } from 'react';
import './acknowledge.css';
import { Button } from '@material-ui/core';


class ExportScript extends Component {
    constructor(props) {
        super(props);
        this.state = { loading:false }
    }

    render() { 
        return ( 
            
        <React.Fragment>
            <div className="Evaluation_Acknowledge_Content_Wrapper">
            
                <div className="Evaluation_Acknowledge_Heading2_Div">
                    Have the required X-rays been taken?
                </div>
                <div className="Evaluation_Acknowledge_Text_Div">
                    Required X-rays:
                    {
                        this.props.Xrays?
                        this.props.Xrays.map((xray,id)=>
                        {
                            return <div style={{marginLeft:'60px'}}> {xray.name} </div>
                        }):null
                    }
                </div>

                {/* <div className="Evaluation_Acknowledge_Button_Div_Left">
                    <Button className="Evaluation_Acknowledge_Button" variant="contained" onClick={()=>this.props.handleYesClick()}> Yes </Button>
                </div>
                <div className="Evaluation_Acknowledge_Button_Div_Right">
                    <Button className="Evaluation_Acknowledge_Button" variant="contained" onClick={()=>this.props.handleNoClick()}> No </Button>
                </div> */}

                


            </div>
            {/* <div className="Evaluation_Acknowledge_Button_Div_Bottom">
                <Button className="Evaluation_Acknowledge_Button" variant="contained" onClick={()=>this.props.handleBackClick()}> Back </Button>
            </div> */}

        </React.Fragment>);
    }
}
export default ExportScript;