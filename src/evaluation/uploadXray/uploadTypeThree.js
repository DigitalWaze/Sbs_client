// Screen 34...!

import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import "./uploadTypeThree.css";

class UploadTypeThree extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="upload-type-three-main-container">
                <div id="upload-type-three-box-1">
                    <h1 id="upload-type-three-heading"> I have my X-rays on a CD </h1>

                    <div id="upload-type-three-raw-2">
                        <div id="upload-type-three-handler-2">
                            <div className="upload-type-three-top-images-box">
                                <img src={require("./Images/File Icon.png")} alt="File Icon" className="upload-type-three-app-images" id="img-1" />
                                <p id="upload-type-three-paragraph-1">
                                    Upload your image files from the CD to your local computer <br />
                            We recommend.jpg or dicom image files
                            </p>
                            </div>

                            <div className="upload-type-three-top-images-box">
                                <img src={require("./Images/Orientation Icon.png")} alt="Orientation Icon" className="upload-type-three-app-images" />
                                <p id="upload-type-three-paragraph-2">
                                    Make sure all X-ray images are at the correct orientation rotate if necessary
                            </p>
                            </div>

                            <div className="upload-type-three-top-images-box">
                                <img src={require("./Images/Name icon.png")} alt="Name icon" className="upload-type-three-app-images" />
                                <p id="upload-type-three-paragraph-2">
                                    Name X-ray files by their view type (Right Lateral , Bilateral with Flexion, etc)
                            </p>
                            </div>

                            <div className="upload-type-three-top-images-box">
                                <img src={require("./Images/Upload screen.png")} alt="Upload screen" className="upload-type-three-app-images" />
                                <p id="upload-type-three-paragraph-2"> Proceed to SBS X-ray Upload Screen </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="upload-type-three-box_2">
                    <div id="upload-type-three_Next_Button_Div">
                        <div className="upload-type-three-btn-layer1">
                            <Button
                                id="upload-type-three_Next_Button"
                                className="upload-type-three_Next_Button_Final"
                                variant="contained"
                                onClick={this.props.handleBackClick}
                            >
                                {" "} Back {" "}
                            </Button>
                        </div>
                        <div className="upload-type-three-btn-layer2">
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

export default UploadTypeThree;