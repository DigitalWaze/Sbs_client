// Note: UI_2 component...!

import React from "react";
import "./medentIntro.css";
import Bone1Image from "../../assets/bone1_Bitmap.png";
import Button from "@material-ui/core/Button";
import MyContext from "../../helper/themeContext";

const MedentIntro = () => {

    const context = React.useContext(MyContext);

    return (
        <div className="container-fluid">
            <div id="Tutorials_Welcome_Main_Div">
                <div id="box_1">
                    <div id="Tutorials_Welcome_Text_Wrapper">
                        <div id="Tutorials_Welcome_Heading1_Div"> Hip & Knee <br /> Step by Step </div>

                        <div id="Tutorials_Welcome_Neon_Line"></div>

                        <div id="Tutorials_Welcome_Heading2_Div"> Knee: Clinical Evaluation Information </div>

                        <div id="Tutorials_Welcome_Text_Div"> Please complete this simple survey. </div>

                        <div id="Medent_Welcome_Next_Button_Div">
                            <div className="btn-layer1">
                                <Button
                                    id="Medent_Welcome_Next_Button"
                                    variant="contained"
                                    onClick={()=>context.history.push('./new-evaluation')}
                                >
                                    {" "} Back {" "}
                                </Button>
                            </div>
                            <div className="btn-layer2">
                                <Button
                                    id="Medent_Welcome_Next_Button"
                                    variant="contained"
                                    onClick={()=>context.history.push('./medent-form')}
                                >
                                    {" "} Next {" "}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div id="Tutorials_Welcome_Image_div">
                        <img src={Bone1Image} alt="SBS" id="Tutorials_Welcome_Image_Bone" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MedentIntro;