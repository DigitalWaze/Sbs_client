// Note: UI_1 component...!

import React from "react";

import "./requiredReminder.css";
import Button from '@material-ui/core/Button';
import MyContext from "../../helper/themeContext";

const RequiredReminder = () => {

    const context = React.useContext(MyContext);

    return (
        <div id="Evaluaion_NewEvaluation_Main_Div">
            <div className="upper-container">
                <h1 className="heading"> The following information is required to complete this evaluation </h1>

                <ul className="listing">
                    <li> Demographics </li>
                    <li> Knee: Clinical Evaluation Information </li>
                    <li> Patient Reported Outcomes (PROs) </li>
                    <li> X-rays </li>
                </ul>
            </div>

            <div className="btn-box-parent">
                <div className="btn-container">
                    <div className="btn-layer1">
                        <div id="Evaluaion_RequiredReminder_Next_Button_Div2">
                            <Button id="Evaluaion_RequiredReminder_Next_Button" onClick={()=>context.history.push('./new-or-existing')} variant="contained"> Back </Button>
                        </div>
                    </div>

                    <div className="btn-layer2">
                        <div id="Evaluaion_RequiredReminder_Next_Button_Div1">
                            <Button id="Evaluaion_RequiredReminder_Next_Button" onClick={()=>context.history.push('./Demographics')} variant="contained"> Next </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequiredReminder;