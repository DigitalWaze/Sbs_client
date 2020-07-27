import React, { Component } from 'react';
import Image from '../assets/image3.png'
import { Button } from '@material-ui/core';

import './page2.css';
import MyContext from '../helper/themeContext';

class OverallCare extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div id="Evaluaion_Welcome_Main_Div">
        <div id="Recom_Welcome_Text_Wrapper">
            <div id="Recom_Overall_Image_Wrapper">
                <img src={Image} alt="SBS" id="Recom_Overall_Image" />
            </div>

          <div id="Evaluaion_Welcome_Next_Button_Div">
            <Button
              id="Evaluaion_Welcome_Next_Button"
              variant="contained"
              onClick={() => {
                this.context.history.push("./welcome");
              }}
            >
              {" "}
              Back{" "}
            </Button>

            <Button
              id="Evaluaion_Welcome_Next_Button"
              style={{float:'right'}}
              variant="contained"
              onClick={() => {
                this.context.history.push("/Evaluation/evaluation-history");
              }}
            >
              {" "}
              Evaluation History{" "}
            </Button>
          </div>
        </div>
        {/* <div id="Evaluaion_Welcome_Image_div">
        </div> */}
      </div>

         );
    }
}
 
OverallCare.contextType=MyContext;
export default OverallCare;