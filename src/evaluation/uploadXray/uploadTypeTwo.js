// Screen 33...!

import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import "./uploadTypeTwo.css";

class UploadTypeTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="upload-type-two-main-container">
                <div id="upload-type-two-box-1">
                    <h1 id="upload-type-two-heading"> Taking the Picture of a Screen </h1>

                    <div id="upload-type-two-raw-1">
                        <div id="upload-type-two-handler-1">
                            You can use  your phone or any digital camera to take pictures of the X-rays. <br />
                            <span> Follow these tips to ensure the best quality images: </span>
                        </div>

                        <div id="upload-type-two-handler-2">
                            <div className="upload-type-two-top-images-box">
                                <img src={require("./Images/screen brightness.png")} alt="screen brightness" className="upload-type-two-app-images" id="img-1" />
                                <p id="upload-type-two-paragraph-1"> Do NOT use flash </p>
                            </div>
                            <div className="upload-type-two-top-images-box">
                                <img src={require("./Images/no-flash.png")} alt="no-flash" className="upload-type-two-app-images" />
                                <p id="upload-type-two-paragraph-2"> Ensure you are in a well-lit environment </p>
                            </div>
                        </div>
                    </div>

                    <div id="upload-type-two-raw-2">
                        <div id="upload-type-two-handler-2">
                            <div className="upload-type-two-top-images-box">
                                <img src={require("./Images/File Icon.png")} alt="File Icon" className="upload-type-two-app-images" id="img-1" />
                                <p id="upload-type-two-paragraph-1"> Upload image file to your local computer </p>
                            </div>

                            <div className="upload-type-two-top-images-box">
                                <img src={require("./Images/Orientation Icon.png")} alt="Orientation Icon" className="upload-type-two-app-images" />
                                <p id="upload-type-two-paragraph-2">
                                    Make sure all X-ray images are at the correct orientation rotate if necessary
                            </p>
                            </div>

                            <div className="upload-type-two-top-images-box">
                                <img src={require("./Images/Name icon.png")} alt="Name icon" className="upload-type-two-app-images" />
                                <p id="upload-type-two-paragraph-2">
                                    Name X-ray files by their view type (Right Lateral , Bilateral with Flexion, etc)
                            </p>
                            </div>

                            <div className="upload-type-two-top-images-box">
                                <img src={require("./Images/Upload screen.png")} alt="Upload screen" className="upload-type-two-app-images" />
                                <p id="upload-type-two-paragraph-2"> Proceed to SBS X-ray Upload Screen </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="upload-type-two-box_2">
                    <div id="upload-type-two_Next_Button_Div">
                        <div className="upload-type-two-btn-layer1">
                            <Button
                                id="upload-type-two_Next_Button"
                                className="upload-type-two_Next_Button_Final"
                                variant="contained"
                            >
                                {" "} Back {" "}
                            </Button>
                        </div>
                        <div className="upload-type-two-btn-layer2">
                            <Button
                                id="upload-type-two_Next_Button1"
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

export default UploadTypeTwo;