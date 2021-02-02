// CRM Screen...!

import React, { Component } from 'react';
import "./CRM.css";
import Button from "@material-ui/core/Button";
import CareGrid from "../../assets/Care Grid.png";

class CRM extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="RCPE-Welcome-main-container">
                <div id="all-content-wrapper">
                    <div id="RCPE-Welcome-box-1" className="RCPE-Welcome-for-screen-4-container">
                        <div id="RCPE-Welcome-for-screen-4-box1">
                            <h1 id="RCPE-Welcome-for-screen-4-heading-1"> Care Recommendation Matrix </h1>
                            <h2 id="RCPE-Welcome-for-screen-4-heading-2"> SBS uses this matrix to determine the recommended care pathway. </h2>

                            <img alt="CareGrid" src={CareGrid} id="RCPE-Welcome-for-screen-4-care-grid" />
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
                
            </div>
        );
    }
}

export default CRM;