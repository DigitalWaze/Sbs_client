// JointSummary Screen...!

import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import "./JointSummary.css";
import MyContext from '../../helper/themeContext';
const comparments = [
    { name: 'Normal to Slight', id: '1' },
    { name: 'Moderate', id: '2' },
    { name: 'Near End Stage', id: '3' },
    { name: 'End Stage', id: '4' }
]

class JointSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log(props);
    }
    render() {
        return (
            // Main container
            <div id="JointSummary-main-box">
                <div id="JointSummary-box-1">
                    <h1 id="JointSummary-heading"> {`${this.props.Joint_Name} Summary`} </h1>

                    <div id="JointSummary-row-1">
                        <div style={{ marginLeft: "25px" }}>
                            <h3 id="JointSummary-part-1-heading"> Medial </h3>
                            <div id="JointSummary-part-1">
                                {comparments.find((comp) => comp.id.toString() === this.props.Compartment1.toString()).name}
                            </div>
                        </div>

                        <div>
                            <h3 id="JointSummary-part-1-heading">  Lateral </h3>
                            <div id="JointSummary-part-1">
                                {comparments.find((comp) => comp.id.toString() === this.props.Compartment2.toString()).name}
                            </div>
                        </div>

                        <div>
                            <h3 id="JointSummary-part-1-heading"> Kneecap </h3>
                            <div id="JointSummary-part-1">
                                {comparments.find((comp) => comp.id.toString() === this.props.Compartment3.toString()).name}
                            </div>
                        </div>

                        <div id="JointSummary-part-last-box">
                            <h3 id="JointSummary-part-1-heading">  KOOS </h3>
                            <div id="JointSummary-part-4">
                                {this.props.Score}
                            </div>
                        </div>
                    </div>

                    {/* Row: 2 */}
                    <div id="JointSummary-row-1" style={{ borderTop: "2px solid white" }}>
                        {
                            this.context.state.Xrays.map((xray) =>
                                <div>
                                    <div id="JointSummary-row-2">
                                        <img
                                            id="JointSummary-Image"
                                            alt="App-Image"
                                            src={xray.image}
                                        />
                                    </div>
                                </div>
                            )
                        }
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

JointSummary.contextType = MyContext
export default JointSummary;