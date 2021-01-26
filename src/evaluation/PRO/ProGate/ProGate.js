import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import "./ProGate.css";

class ProGate extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="Pro-gate-main-box">
                <div id="Pro-gate-first-box">
                    <h1 id="Pro-gate-heading"> Have you collected PROs for this evaluation? </h1>

                    <div id="Pro-gate-btn-container">
                        <Button id="Pro-gate-yes-btn" onClick={this.props.handleYesClick} variant="contained"> Yes </Button>
                        <Button id="Pro-gate-no-btn" onClick={this.props.handleNoClick} variant="contained"> No </Button>
                    </div>

                </div>

                <div id="Pro-gate-second-box">
                    <Button id="Pro-gate-back-btn" onClick={this.props.handleBackClick} variant="contained"> Back  </Button>
                </div>
            </div>
        );
    }
}

export default ProGate;