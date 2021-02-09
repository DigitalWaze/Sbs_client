import React, { Component } from 'react';
import NonOpImage from "../../assets/Surg image 2.png";
import "./JointNoi4.css";
import Button from "@material-ui/core/Button";

class JointNoi4 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="RCPE-Welcome-main-container">
                <div  id="all-content-wrapper">

                    <div id="RCPE-Welcome-box-1">
                        <div id="JointNoi3-inner-box-1">

                            {/* Dic 1 */}
                            <div id="RCPNOI-container-1">
                                <h2 id="RCPNOI-heading"> {`${this.props.Joint_Name} Non-Operative Interventions`} </h2>

                                <div id="RCPNOI-form-box-1">
                                    <form id="RCPNOI-form">

                                        <ul className="RCPNOI-unstyled RCPNOIcentered">
                                            <li>
                                                <input
                                                    className="RCPNOI-styled-checkbox"
                                                    id="styled-checkbox-1"
                                                    name="non-operative-interventions"
                                                    type="checkbox"
                                                    value="SmokingCessation"
                                                />
                                                <label for="styled-checkbox-1" className="RCPNOI-form-field">
                                                    Smoking cessation
                                            </label>
                                            </li>

                                            <li>
                                                <input
                                                    className="RCPNOI-styled-checkbox"
                                                    id="styled-checkbox-2"
                                                    name="non-operative-interventions"
                                                    type="checkbox"
                                                    value="WeightLoss"
                                                />
                                                <label for="styled-checkbox-2" className="RCPNOI-form-field">
                                                    Weight Loss
                                            </label>
                                            </li>

                                            <li>
                                                <input
                                                    className="RCPNOI-styled-checkbox"
                                                    id="styled-checkbox-3"
                                                    name="non-operative-interventions"
                                                    type="checkbox"
                                                    value="NutritionalSupport"
                                                />
                                                <label for="styled-checkbox-3" className="RCPNOI-form-field">
                                                    Nutritional support
                                            </label>
                                            </li>

                                            <li>
                                                <input
                                                    className="RCPNOI-styled-checkbox"
                                                    id="styled-checkbox-4"
                                                    name="non-operative-interventions"
                                                    type="checkbox"
                                                    value="HomeExercise"
                                                />
                                                <label for="styled-checkbox-4" className="RCPNOI-form-field">
                                                    Home Exercise
                                            </label>
                                            </li>

                                            <li>
                                                <input
                                                    className="RCPNOI-styled-checkbox"
                                                    id="styled-checkbox-5"
                                                    name="non-operative-interventions"
                                                    type="checkbox"
                                                    value="PhysicalTherapy"
                                                />
                                                <label for="styled-checkbox-5" className="RCPNOI-form-field">
                                                    Physical therapy
                                            </label>
                                            </li>
                                            <li>
                                                <input
                                                    className="RCPNOI-styled-checkbox"
                                                    id="styled-checkbox-6"
                                                    name="non-operative-interventions"
                                                    type="checkbox"
                                                    value="PainManagement"
                                                />
                                                <label for="styled-checkbox-6" className="RCPNOI-form-field">
                                                    Pain management
                                            </label>
                                            </li>
                                            <li>
                                                <input
                                                    className="RCPNOI-styled-checkbox"
                                                    id="styled-checkbox-7"
                                                    name="non-operative-interventions"
                                                    type="checkbox"
                                                    value="ComplimentaryAlternativePainTreatments"
                                                />
                                                <label for="styled-checkbox-7" className="RCPNOI-form-field">
                                                    Complimentary alternative pain treatments
                                            </label>
                                            </li>
                                            <li>
                                                <input
                                                    className="RCPNOI-styled-checkbox"
                                                    id="styled-checkbox-8"
                                                    name="non-operative-interventions"
                                                    type="checkbox"
                                                    value="AnxietyReduction"
                                                />
                                                <label for="styled-checkbox-8" className="RCPNOI-form-field">
                                                    Anxiety reduction
                                            </label>
                                            </li>

                                        </ul>
                                    </form>

                                    <img alt="App-Image" src={NonOpImage} id="JN4-Image" />
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

export default JointNoi4;