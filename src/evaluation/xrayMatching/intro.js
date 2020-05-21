import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import Bone1Image from '../../assets/bone1_Bitmap.png'

import './intro.css'



class Introduction extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        
        <div>

            <div  id="Evaluaion_Welcome_Text_Wrapper">
                <div id="Evaluaion_Welcome_Heading1_Div">
                    Hip & Knee <br/>
                    Step by Step
                </div>
                <div id="Evaluaion_Welcome_Neon_Line"></div>
                <div id="Evaluaion_Welcome_Heading2_Div">
                    Patient Specific X-ray Matching
                </div>
                <div id="Evaluaion_Welcome_Text_Div">
                    Evaluate the patient's level of degeneration using the Step by Step X-ray Matching System.
                </div>
                <div id="Evaluaion_Welcome_Next_Button_Div">
                    <Button id="Evaluaion_Welcome_Next_Button" variant="contained" onClick={this.props.handleClick}> Continue </Button>
                </div>

            </div>
            <div id="Evaluaion_Welcome_Image_div">
                <img src={Bone1Image} alt="SBS" id="Evaluaion_Welcome_Image_Bone"/>   
            </div>
            

        </div> );
    }
}
export default Introduction;