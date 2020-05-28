import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import MyContext from '../../helper/themeContext';

import Bone1Image from '../../assets/bone1_Bitmap.png'




class Congratulations extends Component {
    constructor(props) {
        super(props);
        this.state = {  } 
    }

    
    render() { 
        return ( 
        
        <div id="Evaluaion_Welcome_Main_Div">

            <div  id="Evaluaion_Welcome_Text_Wrapper">
                <div id="Evaluaion_Welcome_Heading1_Div">
                    Congratulations
                </div>
                <div id="Evaluaion_Welcome_Neon_Line"></div>
                <div id="Evaluaion_Welcome_Heading2_Div">
                    You have passed the X-ray Training Module.
                    Here is how you scored:

                    {/* <br/>
                    and Diagnosis */}
                </div>
                <div id="Evaluaion_Welcome_Text_Div">
                    <span style={{display:'block',marginBottom:'10px',marginTop:'10px',marginLeft:'20px'}}>
                        Medial Compartment: 8/8 <br/>
                        Lateral Compartment: 8/8 <br/>
                        Kneecap Compartment: 4/4
                    </span>
                    
                    Now you are ready to evaluate your own patient! <br/> <br/>

                    If you would like to more practice, click on
                    “Try Training Again.”                </div>
                <div id="Evaluaion_Welcome_Next_Button_Div">
                    <Button id="Evaluaion_Welcome_Next_Button" style={{marginRight:'20px'}} variant="contained" onClick={()=>{ this.context.setCookie("tutorial-" + this.context.state.user_id,41); this.context.history.push('/evaluation')}}> Next </Button>
                    <Button id="Evaluaion_Welcome_Next_Button" variant="contained" onClick={()=>{ this.context.history.push('./matching-tutorial')}}> Try Training Again </Button>

                </div>

            </div>
            <div id="Evaluaion_Welcome_Image_div">
                <img src={Bone1Image} alt="SBS" id="Evaluaion_Welcome_Image_Bone"/>   
            </div>
            

        </div> );
    }
}
Congratulations.contextType=MyContext;
export default Congratulations;