import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import "./JointNoi2.css";
import NonOp1Image from "../../assets/non-op injection.png";

class JointNoi2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="RCPE-Welcome-main-container">
                <div  id="all-content-wrapper">

                    <div id="RCPE-Welcome-box-1" style={{flexDirection:'column',justifyContent:'center'}}>
                        <div id="RCPNO-outer-box-1">
                            <h2 id="RCPNO-heading"> Right Knee: <br /> Non-Operative Interventions </h2>
                        </div>

                        <div id="RCPNO-outer-box-2">
                            <div id="RCPNO-inner-box-1">

                                <ul className="RCPNO-List">
                                    {["Optional joint injection","Smoking cessation","Weight Loss","Nutritional support","Home Exercise","Physical therapy"].map((text)=>
                                        <li>
                                            <span className="RCPNOI-square-box">

                                            </span>
                                            <span className="RCPNOI-text-field">
                                                {text}
                                            </span>
                                        </li>
                                    )}

                                </ul>
                            </div>

                            <div id="RCPNO-inner-box-2">
                                <ul className="RCPNO-List RCPNO-2nd-List">
                                {["Pain management","Complimentary alternative pain treatments","Anxiety reduction"].map((text)=>
                                    <li>
                                        <span className="RCPNOI-square-box">

                                        </span>
                                        <span className="RCPNOI-text-field">
                                            {text}
                                        </span>
                                    </li>
                                )}

                                </ul>
                                <img alt="App-Image" src={NonOp1Image} id="RCPNO-Image" />
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

export default JointNoi2;