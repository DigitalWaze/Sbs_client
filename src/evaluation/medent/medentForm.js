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
                                <h3 id="Medent-Form-header1"> Where is your pain located? </h3>
                                <span id="Medent-Form-handler1">
                                    Left knee:
                            <input type="radio" name="pain" id="Medent-Form-last3" className="Medent-Form-Same" /> Front
                            <input type="radio" name="pain" className="Medent-Form-Same" /> Back
                            <input type="radio" name="pain" className="Medent-Form-Same" /> Above
                            <input type="radio" name="pain" className="Medent-Form-Same" /> Below
                        </span>
                                <br />
                                <span id="Medent-Form-handler2">
                                    Right knee:
                            <input type="radio" name="pain" className="Medent-Form-Same" /> Front
                            <input type="radio" name="pain" className="Medent-Form-Same" /> Back
                            <input type="radio" name="pain" className="Medent-Form-Same" /> Above
                            <input type="radio" name="pain" className="Medent-Form-Same" /> Below
                        </span>
                            </div>

                            {/* Div: 2 */}
                            <div id="Medent-Form-div_2">
                                <h3 id="Medent-Form-header2"> How would you describe the pain you usually in your knee(s)? </h3>
                                <span id="Medent-Form-handler3">
                                    <input type="radio" name="pain" className="Medent-Form-Same" /> None
                            <input type="radio" name="pain" className="Medent-Form-Same" /> Slight
                            <input type="radio" name="pain" className="Medent-Form-Same" /> Mild
                            <input type="radio" name="pain" className="Medent-Form-Same" /> Moderate
                            <input type="radio" name="pain" className="Medent-Form-Same" /> Severe
                        </span>
                            </div>

                            {/* Div: 3 */}
                            <div id="Medent-Form-div_3">
                                <label>
                                    <h3 id="Medent-Form-header3"> How long have you had pain in your knee(s)? </h3>
                                    <input type="number" id="Medent-Form-input-field1" className="Medent-Form-Same" /> Weeks
                            <input type="number" id="Medent-Form-input-field2" className="Medent-Form-Same" /> Months
                            <input type="number" id="Medent-Form-input-field3" className="Medent-Form-Same" /> Years
                        </label>
                            </div>

                            {/* Div: 4 */}
                            <div id="Medent-Form-div_4">
                                <h3 id="Medent-Form-header4"> How long are you able to walk before the pain in your knee(s) becomes severe? </h3>
                                <input type="radio" name="pain" className="Medent-Form-Same" /> No pain for 30 minutes or more
                            <input type="radio" name="pain" className="Medent-Form-Same" /> Around the house only
                            <br />
                                <input type="radio" name="pain" className="Medent-Form-Same" /> 16 to 30 minutes
                            <input type="radio" name="pain" id="Medent-Form-last2" className="Medent-Form-Same" /> Not at all
                            <br />
                                <input type="radio" name="pain" className="Medent-Form-Same" /> 5 to 15 minutes
                    </div>
                        </div>
                    </div>

                    <div id="Evaluaion_RequiredReminder_Next_Button_Div">
                        <div className="Medent-Form-btn-layer1">
                            <Button
                                id="Evaluaion_RequiredReminder_Next_Button"
                                variant="contained"
                            >
                                {" "} Back {" "}
                            </Button>
                        </div>

                        <div className="Medent-Form-btn-layer2">
                            <Button
                                id="Evaluaion_RequiredReminder_Next_Button_1"
                                variant="contained"
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

MedentForm.contextType = MyContext;
export default MedentForm;