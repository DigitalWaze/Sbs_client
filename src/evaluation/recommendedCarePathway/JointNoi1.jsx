import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import NonOpImage from "../../assets/non-op.png";
import "./JointNoi1.css"

class JointNoi1 extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {}
    }
    render() {
        return (
            <div id="RCPE-Welcome-main-container">
                <div id="all-content-wrapper">
                    <div id="RCPE-Welcome-box-1">
                        <div id="JointNoi3-inner-box-1">

                            {/* Dic 1 */}
                            <div id="RCPNOI-container-1">
                                <h2 id="RCPNOI-heading"> {`${this.props.Joint_Name} Non-Operative Interventions`} </h2>

                                <div id="RCPNOI-form-box-1">
                                    <form id="RCPNOI-form">
                                        <ul className="RCPNOI-unstyled RCPNOIcentered">

                                            {["Smoking cessation","Weight Loss","Nutritional support","Home Exercise","Physical therapy","Pain management","Complimentary alternative pain treatments","Anxiety reduction"].map((text)=>
                                                <li>
                                                    {/* <input
                                                        className="RCPNOI-styled-checkbox"
                                                        id="styled-checkbox-1"
                                                        name="non-operative-interventions"
                                                        type="checkbox"
                                                        value="SmokingCessation"
                                                    /> 
                                                     <label for="styled-checkbox-1" className="RCPNOI-form-field">
                                                        {text}
                                                    </label>
                                                    */}
                                                    <span className="RCPNOI-square-box">

                                                    </span>
                                                    <span className="RCPNOI-text-field">
                                                        {text}
                                                    </span>
                                                </li>
                                            )}
                                        </ul>      
                                    </form>

                                    <img alt="App-Image" src={NonOpImage} id="JN1-Image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="RCPE-Welcome-box-2">
                        <div id="RCPE-Welcome-footer-div1">
                            <Button
                                id="RCPE-Welcome-btn-1"
                                variant="contained"
                                onClick={this.props.handleBackClick}
                            >
                                {" "} Back {" "}
                            </Button>
                        </div>

                        <div id="RCPE-Welcome-footer-div3">
                            <Button
                                id="RCPE-Welcome-btn-3"
                                variant="contained"
                                onClick={this.props.handleNextClick}
                            >
                                {" "} Next {" "}
                            </Button>
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default JointNoi1;