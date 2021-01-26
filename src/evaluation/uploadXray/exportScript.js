import React, { Component } from 'react';
import './acknowledge.css';
import "./exportScript.css";
import { Button } from '@material-ui/core';

class ExportScript extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false }
    }

    render() {
        return (
            <React.Fragment>
                <div className="Evaluation_Acknowledge_Content_Wrapper">

                    <div className="Evaluation_Acknowledge_Heading2_Div">
                        <h2 id="heading1"> Below are the required X-rays and an exportable script. </h2>
                        <h2 id="heading2"> Required X-rays </h2>
                    </div>
                    <div className="Evaluation_Acknowledge_Text_Div">

                        <div id="inner-box-1">
                            <div id="child_1">
                                {
                                    this.props.Xrays ?
                                        this.props.Xrays.map((xray, id) => {
                                            return <div style={{ marginLeft: '60px' }}> {xray.name} </div>
                                        }) : null
                                }
                            </div>

                            <div id="child_2">
                                <div id="Evaluaion_NewEvaluation_Next_Button_Div2">
                                    <Button id="Evaluaion_NewEvaluation_Next_Button" variant="contained"> Export Script </Button>
                                </div>
                            </div>
                        </div>

                        <div id="last-header">
                            You may resume the evaluation when you have the <br /> required X-rays.
                        </div>

                        <div id="Evaluaion_NewEvaluation_Next_Button_Div1">
                            <Button id="Evaluaion_NewEvaluation_Next_Button1" variant="contained">
                                Save evaluation <br /> and return home
                            </Button>
                        </div>
                    </div>

                    <div id="Tutorials_Welcome_Next_Button_Div">
                        <div className="btn-layer1">
                            <Button
                                id="Tutorials_Welcome_Next_Button1"
                                variant="contained"
                            >
                                {" "} Back {" "}
                            </Button>
                        </div>
                        <div className="btn-layer2">
                            <Button
                                id="Tutorials_Welcome_Next_Button2"
                                variant="contained"
                            >
                                {" "} Return to X-ray Entry {" "}
                            </Button>
                        </div>
                    </div>
                </div>
            </React.Fragment>);
    }
}
export default ExportScript;