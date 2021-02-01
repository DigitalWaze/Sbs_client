import React, { Component } from 'react';
import './acknowledge.css';
import "./exportScript.css";
import { Button } from '@material-ui/core';
import MyContext from '../../helper/themeContext';

class ExportScript extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false }
    }

    render() {
        return (
            <React.Fragment>
                <div className="Evaluation_Acknowledge_Content_Wrapper">

                    <div className="Evaluation_ExportScript_Heading2_Div">
                        <h2 id="heading1"> Below are the required X-rays and an exportable script. </h2>
                        <h2 id="heading2"> Required X-rays </h2>
                    </div>
                    <div className="Evaluation_Acknowledge_Text_Div">

                        <div id="Export-Script-inner-box-1">
                            <div id="Export-Script-child_1">
                                {
                                    this.props.Xrays ?
                                        this.props.Xrays.map((xray, id) => {
                                            return <div style={{ marginLeft: '60px' }}> {xray.name} </div>
                                        }) : null
                                }
                            </div>

                            <div id="Export-Script-child_2">
                                <div id="Evaluaion_Export-Script_Next_Button_Div2">
                                    <Button id="Evaluaion_ExportScript_Export_Button" variant="contained"> Export Script </Button>
                                </div>
                            </div>
                        </div>

                        <div id="Export-Script-last-header">
                            You may resume the evaluation when you have the <br /> required X-rays.
                        </div>

                        <div id="Evaluaion_ExportScript_Next_Button_Div1">
                            <Button id="Evaluaion_ExportScript_Save_Button1" variant="contained"
                                onClick={()=>this.context.history.push('/home')}>
                                Save evaluation <br /> and return home
                            </Button>
                        </div>
                    </div>

                    <div id="Medent_Welcome_Next_Button_Div">
                        <div className="Export-Script-btn-layer1">
                            <Button
                                id="ExportScript_Welcome_Next_Button1"
                                variant="contained"
                                onClick={this.props.handleBackClick}
                            >
                                {" "} Back {" "}
                            </Button>
                        </div>
                        <div className="Export-Script-btn-layer2">
                            <Button
                                id="ExportScript_Welcome_Next_Button2"
                                variant="contained"
                                onClick={this.props.handleEntryClick}
                            >
                                {" "} Return to X-ray Entry {" "}
                            </Button>
                        </div>
                    </div>
                </div>
            </React.Fragment>);
    }
}
ExportScript.contextType=MyContext
export default ExportScript;