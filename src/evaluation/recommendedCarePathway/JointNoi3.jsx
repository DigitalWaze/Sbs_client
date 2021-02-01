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
                <div id="RCPE-Welcome-box-1">
                    <div id="RCPE-Welcome-inner-box-1">

                        {/* Dic 1 */}
                        <div id="RCPNOI-container-1">
                            <h2 id="RCPNOI-heading"> {`${this.props.Joint_Name} Operative Care Interventions`} </h2>

                            <div id="RCPNOI-form-box-1">
                                <form id="RCPNOI-form">

                                    <ul className="RCPNOI-unstyled RCPNOIcentered">
                                        <li>
                                            <input
                                                className="RCPNOI-styled-checkbox"
                                                id="styled-checkbox-1"
                                                name="non-operative-interventions"
                                                type="checkbox"
                                                value="PatientEducation"
                                            />
                                            <label for="styled-checkbox-1" className="RCPNOI-form-field">
                                                Patient education
                                        </label>
                                        </li>

                                        <li>
                                            <input
                                                className="RCPNOI-styled-checkbox"
                                                id="styled-checkbox-2"
                                                name="non-operative-interventions"
                                                type="checkbox"
                                                value="SharedDecisionMakingToHaveSurgeryNowOrInTheFuture"
                                            />
                                            <label for="styled-checkbox-2" className="RCPNOI-form-field" id="screen_20_label_btn">
                                                Shared decision making to have surgery now or in the future
                                        </label>
                                        </li>

                                        <li>
                                            <input
                                                className="RCPNOI-styled-checkbox"
                                                id="styled-checkbox-3"
                                                name="non-operative-interventions"
                                                type="checkbox"
                                                value="ScheduleSurgery"
                                            />
                                            <label for="styled-checkbox-3" className="RCPNOI-form-field">
                                                Schedule surgery?
                                        </label>
                                        </li>

                                        <li>
                                            <input
                                                className="RCPNOI-styled-checkbox"
                                                id="styled-checkbox-4"
                                                name="non-operative-interventions"
                                                type="checkbox"
                                                value="HomeExerciseProgram"
                                            />
                                            <label for="styled-checkbox-4" className="RCPNOI-form-field">
                                                Home exercise program (prehab)
                                        </label>
                                        </li>

                                        <li>
                                            <input
                                                className="RCPNOI-styled-checkbox"
                                                id="styled-checkbox-5"
                                                name="non-operative-interventions"
                                                type="checkbox"
                                                value="OptionalJointInjection"
                                            />
                                            <label for="styled-checkbox-5" className="RCPNOI-form-field">
                                                Optional joint injection
                                        </label>
                                        </li>

                                        <li>
                                            <input
                                                className="RCPNOI-styled-checkbox"
                                                id="styled-checkbox-6"
                                                name="non-operative-interventions"
                                                type="checkbox"
                                                value="EnrollInBoneAndJointHealthProgram"
                                            />
                                            <label for="styled-checkbox-6" className="RCPNOI-form-field">
                                                Enroll in bone and joint health program
                                        </label>
                                        </li>

                                        <li>
                                            <input
                                                className="RCPNOI-styled-checkbox"
                                                id="styled-checkbox-8"
                                                name="non-operative-interventions"
                                                type="checkbox"
                                                value="ScheduleFollowUpEvaluation"
                                            />
                                            <label for="styled-checkbox-8" className="RCPNOI-form-field">
                                                Schedule follow-up evaluation
                                        </label>
                                        </li>

                                    </ul>
                                </form>

                                <img alt="App-Image" src={SurgImage} id="RKOCI-Image" />
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
        );
    }
}

export default JointNoi3;