import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import "./JointTreatment.css";

const comparments = [
    { name: 'Normal to Slight', id: '1' },
    { name: 'Moderate', id: '2' },
    { name: 'Near End Stage', id: '3' },
    { name: 'End Stage', id: '4' }
];

class JointTreatment extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log(props);
    }
    render() {
        const type = this.props.Recommendation;
        return (
            // Main container
            <div id="JointSummary-main-box">
                <div id="JointSummary-box-1">
                    <h1 id="JointSummary-heading" style={{ marginBottom: "20px" }}>
                        {`${this.props.Joint_Name} Recommended Treamtment Options`}
                    </h1>

                    <div id="JointSummary-row-1" style={{ borderBottom: "2px solid white" }}>
                        <div style={{ marginLeft: "20px" }}>
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

                    {/* Row: 2 */}
                    <div id="Joint-Treatment-Options-box-2">
                        <h2 id="Joint-Treatment-Options-header"> SBS Recommendation: </h2>

                        <div>
                            <div id="Joint-Treatment-Options-small-box-2" style={{ opacity: type === "NOC" ? 0.5 : 1 }}> Non-Operative <br /> Candidate </div>
                            <div id="Joint-Treatment-Options-small-box-1" style={{ opacity: type === "OC" ? 0.5 : 1 }}> Operative <br /> Candidate </div>
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
        );
    }
}

export default JointTreatment;