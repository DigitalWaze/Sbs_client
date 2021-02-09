import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import "./JPR.css";

const comparments = [
    { name: 'Normal to Slight', id: '1',color:'#B3D89B' },
    { name: 'Moderate', id: '2' ,color:'#FAF075'},
    { name: 'Near End Stage', id: '3' , color:'#F26E82'},
    { name: 'End Stage', id: '4' , color:'#F26E82'},
    {name:'Cannot Evaluate',id:'5',color:'#E4E4E4'}

]

class JPR extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const replacement = this.props.Replacement;
        return (
            // Main container
            <div id="JointSummary-main-box">
                <div id="all-content-wrapper">

                    <div id="JointSummary-box-1">
                        <h1 id="Knee-Replacement-heading" style={{ marginBottom: "20px",lineHeight:'40px' }}>
                            {this.props.Joint_Name}: <br /> Partial Repalcement
                        </h1>

                        <div>
                            <div id="JointSummary-row-1">
                                <div>
                                    <h3 id="JointSummary-part-1-heading"> Medial </h3>
                                    <div id="JointSummary-part-1" style={{ backgroundColor: comparments.find((comp) => comp.id.toString() === this.props.Compartment1.toString()).color }} >
                                        {comparments.find((comp) => comp.id.toString() === this.props.Compartment1.toString()).name}
                                    </div>
                                </div>

                                <div>
                                    <h3 id="JointSummary-part-1-heading">  Lateral </h3>
                                    <div id="JointSummary-part-1" style={{ backgroundColor: comparments.find((comp) => comp.id.toString() === this.props.Compartment2.toString()).color }} >
                                        {comparments.find((comp) => comp.id.toString() === this.props.Compartment2.toString()).name}
                                    </div>
                                </div>

                                <div>
                                    <h3 id="JointSummary-part-1-heading"> Kneecap </h3>
                                    <div id="JointSummary-part-1" style={{ backgroundColor: comparments.find((comp) => comp.id.toString() === this.props.Compartment3.toString()).color }} >
                                        {comparments.find((comp) => comp.id.toString() === this.props.Compartment3.toString()).name}
                                    </div>
                                </div>

                                <div id="JointSummary-part-last-box">
                                    <h3 id="JointSummary-part-1-heading">  KOOS </h3>
                                    <div id="JointSummary-part-4" style={{ backgroundColor: this.props.Score < 74 ? "#F26E82" : "#B3D89B"}}>
                                        {this.props.Score}
                                    </div>
                                </div>
                            </div>
                            <h2 id="Knee-Replacement">
                                SBS Recomendation:
                            </h2>
                        </div>

                        {/* Row: 2 */}
                        <div id="Joint-Treatment-Options-box-2">
                            <h2 id="Joint-Treatment-Options-header" className="JPR-header"> Partial Replacement </h2>

                            <div className="Knee-Replacement-Recommendation-Box">
                                <div id="Knee-Replacement-small-box-1" className="JPR-footer-box1" style={{ opacity: 1 }}> {replacement} </div>

                                <div id="Knee-Replacement-small-box-1" className="JPR-footer-box2" style={{ opacity: 0.5 }}> {replacement === "Medial" ? "Lateral" : "Medial"}  </div>

                                <div id="Knee-Replacement-small-box-1" className="JPR-footer-box3" style={{ opacity: 0.5 }}> {replacement === "Kneecap" ? "Lateral" : "Kneecap"}  </div>
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

export default JPR;