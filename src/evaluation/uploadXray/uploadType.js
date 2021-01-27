// Screen: 31...!

import React, { Component } from 'react';
import "./uploadType.css";
import { Button } from '@material-ui/core';

class UploadType extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id="upload-type-main-container">
                <div id="upload-type-box-1">
                    <h1 id="upload-type-heading"> How do you want to input the X-rays? </h1>

                    <div id="upload-type-btn-container-1">
                        <Button id="upload-type-btn-1" variant="contained" onClick={this.props.handleTypeOneClick} > I have the  digital files </Button>
                        <Button id="upload-type-btn-2" variant="contained" onClick={this.props.handleTypeTwoClick}> I took pictures of a computer screen </Button>
                    </div>

                    <div id="upload-type-btn-container-2">
                        <Button id="upload-type-btn-3" variant="contained" onClick={this.props.handleTypeThreeClick}> I have paper copies </Button>
                        <Button id="upload-type-btn-4" variant="contained" onClick={this.props.handleTypeFourClick}> I have X-rays on CD </Button>
                    </div>
                </div>

                <div id="upload-type-box-2">
                    <Button id="upload-type-btn-back" variant="contained"> Back </Button>
                </div>
            </div>
        );
    }
}

export default UploadType;