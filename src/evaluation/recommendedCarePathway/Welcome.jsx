// Welcome Screen...!

import React, { Component } from 'react';
import "./Welcome.css";
import Button from "@material-ui/core/Button";
import Bone1Image from "../../assets/bone1_Bitmap.png";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id="RCPE-Welcome-main-container">
                <div id="RCPE-Welcome-box-1">
                    <div id="RCPE-Welcome-inner-box-1">
                        <div id="RCPE-Welcome-Heading"> Hip & Knee <br /> Step by Step </div>

                        <div id="RCPE_Welcome_Neon_Line"></div>

                        <div id="RCPE_Welcome_Heading2"> Patient Specific </div>

                        <div id="RCPE_Welcome_Text_Div"> Recommended Care Pathway </div>

                        <div id="RCPE_Welcome_Text_Div2">
                            Hip & Knee Step by Step will recommend an individualized care pathway.
                    </div>
                    </div>
                    <div id="RCPE-Welcome-inner-box-2">
                        <img src={Bone1Image} id="bone-image" />
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

                    <div id="RCPE-Welcome-footer-div2">
                        <Button
                            id="RCPE-Welcome-btn-2"
                            variant="contained"
                            onClick={this.props.handleReviewClick}
                        >
                            {" "} Review Care Pathway Education {" "}
                        </Button>
                    </div>

                    <div id="RCPE-Welcome-footer-div3">
                        <Button
                            id="RCPE-Welcome-btn-3"
                            variant="contained"
                            onClick={this.props.handleNextClick }
                        >
                            {" "} Next {" "}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;