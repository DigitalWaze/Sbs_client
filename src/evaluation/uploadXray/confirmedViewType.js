import React, { Component } from 'react';
import "./confirmedViewType.css";
import Button from "@material-ui/core/Button";

// Note: Images URL from Assets...!
import Right_Kneecap_Cartoon from "../../assets/right kneecap cartoon.png";
import Right_Lateral_Cartoon from "../../assets/Right Lateral Cartoon.png";
import Left_Kneecap_Cartoon from "../../assets/left kneecap cartoon.png";
import Left_Lateral_Cartoon from "../../assets/Left Lateral Cartoon.png";
import Bilat_Kneecap_Cartoon from "../../assets/Bilat Kneecap Cartoon.png";
import Standing_Bilatral_Cartoon from "../../assets/standing bilatral cartoon.png";

const arrOfXRays = [
    {
        name: 'X-ray View Confirmation: Right Kneecap Rotate and reflect the X-ray as needed to match the orientation seen on the left.',
        id: '1',
        imageURL: Right_Kneecap_Cartoon
    },
    {
        name: 'X-ray View Confirmation: Right Lateral Rotate and reflect the X-ray as needed to match the orientation seen on the left.',
        id: '2',
        imageURL: Right_Lateral_Cartoon
    },
    {
        name: 'X-ray View Confirmation: Left Kneecap Rotate and reflect the X-ray as needed to match the orientation seen on the left.',
        id: '3',
        imageURL: Left_Kneecap_Cartoon
    },
    {
        name: 'X-ray View Confirmation: Left Lateral Rotate and reflect the X-ray as needed to match the orientation seen on the left.',
        id: '4',
        imageURL: Left_Lateral_Cartoon
    },
    {
        name: 'X-ray View Confirmation: BILATERAL KNEECAP Rotate and reflect the X-ray as needed to match the orientation seen on the left.',
        id: '5',
        imageURL: Bilat_Kneecap_Cartoon
    },
    {
        name: 'X-ray View Confirmation: Bilateral PA Standing with no Flexion Rotate and reflect the X-ray as needed to match the orientation seen on the left.',
        id: '6',
        imageURL: Standing_Bilatral_Cartoon
    },
    {
        name: 'X-ray View Confirmation: Bilateral PA Standing with Flexion Rotate and reflect the X-ray as needed to match the orientation seen on the left.',
        id: '7',
        imageURL: Standing_Bilatral_Cartoon
    },
];

class ConfirmedViewType extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {}
    }

    render() {
        return (
            // Main box...!
            <div id="XRConfirmation">

                {/* Wrapper */}
                <div id="all-content-wrapper">

                    {/* Div: 1 */}
                    <div id="XRConfirmation-box-1">
                        <div id="XRConfirmation-inner-box-1">
                            {arrOfXRays.find((item) => item.id.toString() === this.props.Xray.id.toString()).name}
                        </div>

                        <div id="XRConfirmation-inner-box-2">
                            <Button
                                id="XRConfirmation-Upper-Btn"
                                variant="contained"
                            >
                                {" "} Adjust Image {" "}
                            </Button>
                        </div>

                        <div id="XRConfirmation-inner-box-3">
                            <img alt="App-Image" src={
                                arrOfXRays.find((item) => item.id.toString() === this.props.Xray.id.toString()).imageURL
                            } id="XRConfirmation-img-1" />
                            <img alt="App-Image" src={this.props.Xray.image} id="XRConfirmation-img-2" />
                        </div>
                    </div>

                    {/* Div: 2 : Buttons Box */}
                    <div id="XRConfirmation-box-2">
                        <div id="XRConfirmation-footer-box-1">
                            <Button
                                id="XRConfirmation-btn-1"
                                variant="contained"
                                onClick={this.props.handleBackClick}
                            >
                                {" "} Back {" "}
                            </Button>
                        </div>

                        <div id="XRConfirmation-footer-box-2">
                            <Button
                                id="XRConfirmation-btn-2"
                                variant="contained"
                                onClick={this.props.handleNextClick}
                            >
                                {" "} Confirm View {" "}
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ConfirmedViewType;