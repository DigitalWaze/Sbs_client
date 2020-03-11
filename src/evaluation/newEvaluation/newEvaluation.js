import React, { Component } from 'react';
import './newEvaluation.css'
// import BoneImage from '../assets/bone2_Bitmap.png'
import Button from '@material-ui/core/Button';
import MyContext from '../../helper/themeContext';


class NewEvaluation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
        <div id="Evaluaion_NewEvaluation_Main_Div">
            <div  id="Evaluaion_NewEvaluation_Content_Wrapper">
                <div id="Evaluaion_NewEvaluation_Heading1_Div">
                    New Evaluation 
                </div>
                <div id="Evaluaion_NewEvaluation_Heading2_Div">
                    Indicate which joints hurt
                </div>
                <div id="Evaluaion_NewEvaluation_Text_Div">
                    If a joint hurts, click on the priority label to rank the joint from 1 to 4.
                    1 represents the joint that hurts the most.  If a joint does not hurt, leave it as “No Pain.”
                </div>

                <div id="Evaluaion_NewEvaluation_Image_div">

                   
                    {/* <div id="Evaluaion_NewEvaluation_Image_Wrapper" >
                        <img src={BoneImage} alt="SBS" id="Evaluaion_NewEvaluation_Image_Bone"/>   
                    </div> */}
                    
                </div>
                <div id="Evaluaion_Welcome_Next_Button_Div">
                    <Button id="Evaluaion_Welcome_Next_Button" variant="contained" onClick={()=>{this.context.history.push('./patient-profile')}}> Next </Button>
                </div>
            </div>
            
        </div> );
    }
}

NewEvaluation.contextType=MyContext;
export default NewEvaluation;