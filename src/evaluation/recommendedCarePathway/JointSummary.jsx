// JointSummary Screen...!

import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import "./JointSummary.css";

class JointSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            // Main container
            <div id="JointSummary-main-box">
                <div id="JointSummary-box-1">
                    <h1 id="JointSummary-heading"> Right Knee Summary </h1>

                    <div id="JointSummary-row-1" style={{ borderBottom: "2px solid white" }}>
                        <div style={{ marginLeft: "25px" }}>
                            <h3 id="JointSummary-part-1-heading"> Medial </h3>
                            <div id="JointSummary-part-1">
                                Normal to Slight
                            </div>
                        </div>

                        <div>
                            <h3 id="JointSummary-part-1-heading">  Lateral </h3>
                            <div id="JointSummary-part-1">
                                Normal to Slight
                            </div>
                        </div>

                        <div>
                            <h3 id="JointSummary-part-1-heading"> Kneecap </h3>
                            <div id="JointSummary-part-1">
                                Normal to Slight
                            </div>
                        </div>

                        <div id="JointSummary-part-last-box">
                            <h3 id="JointSummary-part-1-heading">  KOOS </h3>
                            <div id="JointSummary-part-4">
                                90
                            </div>
                        </div>
                    </div>

                    {/* Row: 2 */}
                    <div id="JointSummary-row-1">
                        <div>
                            <div id="JointSummary-row-2">
                                <img
                                    id="JointSummary-Image"
                                    alt="App-Image"
                                // src={}
                                />
                            </div>
                        </div>

                        <div>
                            <div id="JointSummary-row-2">
                                <img
                                    id="JointSummary-Image"
                                    alt="App-Image"
                                // src={}
                                />
                            </div>
                        </div>

                        <div>
                            <div id="JointSummary-row-2">
                                <img
                                    id="JointSummary-Image"
                                    alt="App-Image"
                                // src={}
                                />
                            </div>
                        </div>

                        <div>
                            <div id="JointSummary-row-2">
                                <img
                                    id="JointSummary-Image"
                                    alt="App-Image"
                                // src={}
                                />
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
                            id="JointSummary-btn-2"
                            variant="contained"
                            onClick={this.props.handleNextClick}
                        >
                            {" "} View Treatment Options {" "}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default JointSummary;