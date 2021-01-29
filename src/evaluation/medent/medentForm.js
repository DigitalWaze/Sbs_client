import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import "./medentForm.css";
import MyContext from '../../helper/themeContext';

class MedentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="container-fluid" id="Medent-Form-main-container">
                <div id="Medent-Form-Wrapper">
                    <div id="Medent-Form-box_1">

                        {/* Form Box */}
                        <div>
                            <h1 id="Medent-Form-heading"> Please fill in the patient information below </h1>

                            {/* Div: 1 */}
                            <div id="Medent-Form-div_1">
                                <p id="Medent-Form-header1"> Where is your pain located? </p>
                                <span id="Medent-Form-handler1"> Left knee: </span>
                                <input type="radio" name="left-pain" value="front" id="Medent-Form-last3" className="Medent-Form-Same" />
                                <label> Front </label>

                                <input type="radio" name="left-pain" value="back" className="Medent-Form-Same" />
                                <label> Back </label>

                                <input type="radio" name="left-pain" value="above" className="Medent-Form-Same" />
                                <label> Above </label>

                                <input type="radio" name="left-pain" value="below" className="Medent-Form-Same" />
                                <label> Below </label>

                                <br />

                                <span id="Medent-Form-handler2"> Right knee: </span>
                                <input type="radio" name="right-pain" value="front" className="Medent-Form-Same" />
                                <label> Front </label>

                                <input type="radio" name="right-pain" value="back" className="Medent-Form-Same" />
                                <label> Back </label>

                                <input type="radio" name="right-pain" value="above" className="Medent-Form-Same" />
                                <label> Above </label>

                                <input type="radio" name="right-pain" value="below" className="Medent-Form-Same" />
                                <label> Below </label>
                            </div>

                            {/* Div: 2 */}
                            <div id="Medent-Form-div_2">
                                <h3 id="Medent-Form-header2"> How would you describe the pain you usually in your knee(s)? </h3>
                                <span id="Medent-Form-handler3">

                                    <input type="radio" name="pain-type" value="none" className="Medent-Form-Same" />
                                    <label> None </label>

                                    <input type="radio" name="pain-type" value="slight" className="Medent-Form-Same" />
                                    <label> Slight </label>

                                    <input type="radio" name="pain-type" value="mild" className="Medent-Form-Same" />
                                    <label> Mild </label>

                                    <input type="radio" name="pain-type" value="moderate" className="Medent-Form-Same" />
                                    <label> Moderate </label>

                                    <input type="radio" name="pain-type" value="severe" className="Medent-Form-Same" />
                                    <label> Severe </label>
                                </span>
                            </div>

                            {/* Div: 3 */}
                            <div id="Medent-Form-div_3">
                                <h3 id="Medent-Form-header3"> How long have you had pain in your knee(s)? </h3>

                                <input type="number" id="Medent-Form-input-field1" className="Medent-Form-Same" />
                                <label> Weeks </label>

                                <input type="number" id="Medent-Form-input-field2" className="Medent-Form-Same" />
                                <label> Months </label>

                                <input type="number" id="Medent-Form-input-field3" className="Medent-Form-Same" />
                                <label> Years </label>
                            </div>

                            {/* Div: 4 */}
                            <div id="Medent-Form-div_4">
                                <h3 id="Medent-Form-header4"> How long are you able to walk before the pain in your knee(s) becomes severe? </h3>

                                <input type="radio" name="pain-time" value="30 mins or more" className="Medent-Form-Same" />
                                <label> No pain for 30 minutes or more </label>

                                <input type="radio" name="pain-time" value="around the house only" className="Medent-Form-Same" />
                                <label> Around the house only </label>

                                <br />

                                <input type="radio" name="pain-time" value="16 to 30 mins" className="Medent-Form-Same" />
                                <label> 16 to 30 minutes </label>

                                <input type="radio" name="pain-time" value="not at all" id="Medent-Form-last2" className="Medent-Form-Same" />
                                <label> Not at all </label>

                                <br />

                                <input type="radio" name="pain-time" className="Medent-Form-Same" />
                                <label> 5 to 15 minutes </label>
                            </div>

                        </div>
                    </div>

                    <div id="Evaluaion_RequiredReminder_Next_Button_Div">
                        <div className="Medent-Form-btn-layer1">
                            <Button
                                id="Evaluaion_MedentForm_Next_Button"
                                variant="contained"
                                onClick={() => { this.context.history.push('./new-evaluation') }}                            >
                                {" "} Back {" "}
                            </Button>
                        </div>

                        <div className="Medent-Form-btn-layer2">
                            <Button
                                id="Evaluaion_MedentForm_Next_Button_1"
                                variant="contained"
                                onClick={() => { this.context.history.push('./patient-profile') }}                            >
                                {" "} Next {" "}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

MedentForm.contextType = MyContext;
export default MedentForm;