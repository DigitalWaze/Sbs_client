import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import "./JointTreatment.css";

const comparments = [
    { name: 'Normal to Slight', id: '1',color:'#B3D89B' },
    { name: 'Moderate', id: '2' ,color:'#FAF075'},
    { name: 'Near End Stage', id: '3' , color:'#F26E82'},
    { name: 'End Stage', id: '4' , color:'#F26E82'},
    {name:'Cannot Evaluate',id:'5',color:'#E4E4E4'}

]

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
                <div  id="all-content-wrapper">
                    <div id="JointSummary-box-1">
                        <h1 id="JointSummary-heading" style={{ marginBottom: "20px" }}>
                            {`${this.props.Joint_Name} Recommended Treamtment Options`}
                        </h1>

                        <div id="JointSummary-row-1" style={{ borderBottom: "2px solid white" }}>
                            <div style={{ marginLeft: "20px" }}>
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
                                <h3 id="JointSummary-part-2-heading">  KOOS </h3>
                                <div id="JointSummary-part-4" style={{ backgroundColor: this.props.Score < 74 ? "#F26E82" : "#B3D89B"}}>
                                    {this.props.Score}
                                </div>
                            </div>
                        </div>

                        {/* Row: 2 */}
                        <div id="Joint-Treatment-Options-box-2">
                            <h2 id="Joint-Treatment-Options-header"> SBS Recommendation: </h2>

                            <div>
                                <div id="Joint-Treatment-Options-small-box-2" style={{ opacity: 1 }}> {type==="NOC"? <span> Non-Operative <br /> Candidate</span> : <span>  Operative <br /> Candidate </span>}  </div>
                                <div id="Joint-Treatment-Options-small-box-1" style={{ opacity: 0.5 }}> {type==="NOC"? <span> Operative <br /> Candidate</span> : <span>  Non-Operative <br /> Candidate </span>} </div>
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

export default JointTreatment;