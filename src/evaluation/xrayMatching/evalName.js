import React, { Component } from 'react';

import Button from '@material-ui/core/Button';



class EvalName extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        
            <div id="Evaluaion_XrayMatching_Intro_Main_Div">

                <div  id="Evaluaion_Welcome_Text_Wrapper">
                    <div id="Evaluaion_Welcome_Heading2_Div">
                        {this.props.eval.name}
                    </div>
                    
                    <div id="Evaluaion_Welcome_Next_Button_Div">
                    <Button id="Evaluaion_Welcome_Next_Button" variant="contained" onClick={this.props.handleClick}> Next </Button>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default EvalName;