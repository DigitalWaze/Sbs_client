import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import MyContext from '../../../helper/themeContext';
import "./proReqInfo.css";

class ProReqInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid" id="Evaluation-PRO-Required-main-container">
                <div id="Evaluation-PRO-Required-box_1">
                    <h2 id="Evaluation-PRO-Required-heading"> The required PRO questionnaires <br /> can be downloaded here: </h2>

                    <div id="Evaluation-PRO-Required_Next_Button_Div1">
                        <Button id="Evaluation-PRO-Required_Next_Button" variant="contained"> Download </Button>
                    </div>

                    <div id="Evaluation-PRO-Required_Next_Button_Div1" className="Evaluation-PRO-Required-sec-btn-box">
                        <Button onClick={()=>this.context.history.push('/home')} id="Evaluation-PRO-Required_Next_Button" variant="contained">
                            Save evaluation <br /> and return home
                </Button>
                    </div>

                    <div className="Evaluation-PRO-Required-seconds_last_box">
                        You may resume the evaluation once you have the required PROs
            </div>
                </div>

                <div id="Evaluation-PRO-Required-box_2">
                    <div id="Evaluation-PRO-Required_Next_Button_Div">
                        <div className="Evaluation-PRO-Required-btn-layer1">
                            <Button
                                id="Evaluation-PRO-Required_Next_Button"
                                className="Evaluation-PRO-Required_Next_Button_Final"
                                variant="contained"
                                onClick={this.props.handleBackClick}
                            >
                                {" "} Back {" "}
                            </Button>
                        </div>
                        <div className="Evaluation-PRO-Required-btn-layer2">
                            <Button
                                id="Evaluation-PRO-Required_Next_Button1"
                                variant="contained"
                                onClick={()=>this.context.history.push('./form-type')}
                            >
                                {" "} Return to PRO Entry {" "}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProReqInfo.contextType = MyContext;
export default ProReqInfo;