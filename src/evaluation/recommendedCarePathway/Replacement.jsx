import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import "./Replacement.css";

const comparments = [
    { name: 'Normal to Slight', id: '1' },
    { name: 'Moderate', id: '2' },
    { name: 'Near End Stage', id: '3' },
    { name: 'End Stage', id: '4' }
];

class Replacement extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const recommendation = this.props.Recommendation;
        return (
            // Main container
            <div id="JointSummary-main-box">
                <div id="all-content-wrapper">
                    <div id="JointSummary-box-1">
                        <h1 id="Knee-Replacement-heading" style={{ marginBottom: "20px" }}>
                            {`${this.props.Joint_Name} Operative Candidate`}
                        </h1>

                        <div>
                            <div id="JointSummary-row-1">
                                <div>
                                    <h3 id="JointSummary-part-1-heading"> Medial </h3>
                                    <div id="JointSummary-part-1" style={{ backgroundColor: this.props.Compartment1.toString() === "1" ? "#F26E82" : "#B3D89B" }}>
                                        {comparments.find((comp) => comp.id.toString() === this.props.Compartment1.toString()).name}
                                    </div>
                                </div>

                                <div>
                                    <h3 id="JointSummary-part-1-heading">  Lateral </h3>
                                    <div id="JointSummary-part-1" style={{ backgroundColor: this.props.Compartment2.toString() === "2" ? "#B4D99C" : "#B3D89B" }}>
                                        {comparments.find((comp) => comp.id.toString() === this.props.Compartment2.toString()).name}
                                    </div>
                                </div>

                                <div>
                                    <h3 id="JointSummary-part-1-heading"> Kneecap </h3>
                                    <div id="JointSummary-part-1" style={{ backgroundColor: this.props.Compartment3.toString() === "3" ? "#FAF075" : "#B3D89B" }}>
                                        {comparments.find((comp) => comp.id.toString() === this.props.Compartment3.toString()).name}
                                    </div>
                                </div>

                                <div id="JointSummary-part-last-box">
                                    <h3 id="JointSummary-part-1-heading">  KOOS </h3>
                                    <div id="JointSummary-part-4" style={{ backgroundColor: "#F26E82" }}>
                                        {this.props.Score}
                                    </div>
                                </div>
                            </div>
                            <h2 id="Knee-Replacement">
                                Partial vs Complete Replacement
                            </h2>
                        </div>

                    

                        {/* Row: 2 */}
                        <div id="Joint-Treatment-Options-box-2">
                            <h2 id="Joint-Treatment-Options-header"> SBS Recommendation: </h2>

                            <div className="Knee-Replacement-Recommendation-Box">
                                <div id="Knee-Replacement-small-box-1" style={{ opacity: 1 }}>
                                    {recommendation==="TKR"?"Total Knee Replacement":"Partial Replacement"}
                                </div>
                                <div id="Knee-Replacement-small-box-2" style={{ opacity: 0.5 }}>
                                    {recommendation==="TKR"?"Partial Replacement":"Total Knee Replacement"}
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
                                {" "} Confirm {" "}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Replacement;