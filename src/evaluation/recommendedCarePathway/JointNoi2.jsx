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
                <div id="RCPE-Welcome-box-1">
                    <div id="RCPNO-inner-box-1">
                        <h2 id="RCPNO-heading"> Right Knee: <br /> Non-Operative Interventions </h2>

                        <ul className="RCPNO-List">
                            <li>
                                <input
                                    className="RCPNOI-styled-checkbox"
                                    id="RCPNO-styled-checkbox-1"
                                    name="non-operative-interventions"
                                    type="checkbox"
                                    value="OptionalJointInjection"
                                />
                                <label for="RCPNO-styled-checkbox-1" id="RCPNO-field1" className="RCPNOI-form-field">
                                    Optional joint injection
                            </label>
                            </li>

                            <li>
                                <input
                                    className="RCPNOI-styled-checkbox"
                                    id="RCPNO-styled-checkbox-2"
                                    name="non-operative-interventions"
                                    type="checkbox"
                                    value="SmokingCessation"
                                />
                                <label for="RCPNO-styled-checkbox-2" id="RCPNO-field2" className="RCPNOI-form-field">
                                    Smoking cessation
                            </label>
                            </li>

                            <li>
                                <input
                                    className="RCPNOI-styled-checkbox"
                                    id="RCPNO-styled-checkbox-3"
                                    name="non-operative-interventions"
                                    type="checkbox"
                                    value="WeightLoss"
                                />
                                <label for="RCPNO-styled-checkbox-3" id="RCPNO-field3" className="RCPNOI-form-field">
                                    Weight loss
                            </label>
                            </li>

                            <li>
                                <input
                                    className="RCPNOI-styled-checkbox"
                                    id="RCPNO-styled-checkbox-4"
                                    name="non-operative-interventions"
                                    type="checkbox"
                                    value="NutritionalSupport"
                                />
                                <label for="RCPNO-styled-checkbox-4" id="RCPNO-field4" className="RCPNOI-form-field">
                                    Nutritional support
                            </label>
                            </li>

                            <li>
                                <input
                                    className="RCPNOI-styled-checkbox"
                                    id="RCPNO-styled-checkbox-5"
                                    name="non-operative-interventions"
                                    type="checkbox"
                                    value="HomeExercise"
                                />
                                <label for="RCPNO-styled-checkbox-5" id="RCPNO-field5" className="RCPNOI-form-field">
                                    Home exercise
                            </label>
                            </li>

                            <li>
                                <input
                                    className="RCPNOI-styled-checkbox"
                                    id="RCPNO-styled-checkbox-6"
                                    name="non-operative-interventions"
                                    type="checkbox"
                                    value="PhysicalTherapy"
                                />
                                <label for="RCPNO-styled-checkbox-6" id="RCPNO-field6" className="RCPNOI-form-field">
                                    Physical Therapy
                            </label>
                            </li>
                        </ul>
                    </div>

                    <div id="RCPNO-inner-box-2">
                        <ul className="RCPNO-List RCPNO-2nd-List">
                            <li>
                                <input
                                    className="RCPNOI-styled-checkbox"
                                    id="RCPNO-styled-checkbox-7"
                                    name="non-operative-interventions"
                                    type="checkbox"
                                    value="PainManagement"
                                />
                                <label for="RCPNO-styled-checkbox-7" id="RCPNO-field1" className="RCPNOI-form-field">
                                    Pain management
                            </label>
                            </li>

                            <li>
                                <input
                                    className="RCPNOI-styled-checkbox"
                                    id="RCPNO-styled-checkbox-8"
                                    name="non-operative-interventions"
                                    type="checkbox"
                                    value="ComplimentaryAlternativePainTreatments"
                                />
                                <label for="RCPNO-styled-checkbox-8" id="RCPNO-field2" className="RCPNOI-form-field">
                                    Complimentary alternative pain treatments
                            </label>
                            </li>

                            <li>
                                <input
                                    className="RCPNOI-styled-checkbox"
                                    id="RCPNO-styled-checkbox-9"
                                    name="non-operative-interventions"
                                    type="checkbox"
                                    value="AnxietyReduction"
                                />
                                <label for="RCPNO-styled-checkbox-9" id="RCPNO-field3" className="RCPNOI-form-field">
                                    Anxiety reduction
                            </label>
                            </li>

                        </ul>
                        <img alt="App-Image" src={NonOp1Image} id="RCPNO-Image" />
                    </div>
                </div>

                <div id="RCPE-Welcome-box-2">
                    <div id="RCPE-Welcome-footer-div1">
                        <Button
                            id="RCPE-Welcome-btn-1"
                            variant="contained"
                        >
                            {" "} Back {" "}
                        </Button>
                    </div>

                    <div id="RCPE-Welcome-footer-div3">
                        <Button
                            id="RCPE-Welcome-btn-3"
                            variant="contained"
                        >
                            {" "} Next {" "}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default JointNoi2;