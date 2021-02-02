import React, { Component } from 'react';
import "./JointNoi3.css";
import Button from "@material-ui/core/Button";
import SurgImage from "../../assets/Surg image 1.png";

class JointNoi3 extends Component {
    constructor(props) {
        super(props);
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
                                <h2 id="RCPNOI-heading"> {`${this.props.Joint_Name}: Operative Care Interventions`} </h2>

                                <div id="RCPNOI-form-box-1" style={{display:'inline-block'}}>
                                    <form id="RCPNOI-form" style={{display:'inline-block'}}>
                                        <ul className="RCPNOI-unstyled RCPNOIcentered">

                                            {["Patient education","Shared decision making to have surgery now or in the future","Schedule surgery?","Home exercise program (prehab)","Optional joint injection","Enroll in bone and joint health program","Schedule follow-up evaluation"]
                                            .map((text)=>
                                                <li>
                                                    <span className="RCPNOI-square-box">

                                                    </span>
                                                    <span className="RCPNOI-text-field">
                                                        {text}
                                                    </span>
                                                </li>
                                            )} 
                                      
                                        </ul>
                                    </form>

                                    <div style={{display:'inline-block',transform:'translateX(-200px)'}}>
                                        <img alt="App-Image" src={SurgImage} id="RKOCI-Image" />

                                    </div>
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

export default JointNoi3;