import React, { Component } from 'react';

import './evaluation.css'
import MyContext from '../helper/themeContext';


class Evaluation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount()
    {
        // this.context.history.push('/Evaluation/Welcome')
    }
    render() { 
        return (
            <div id="Evaluation_Main_Div">
                {this.context.history.location.pathname!=="/Evaluation/Welcome" && this.context.history.location.pathname!=="/Evaluation/demographics" && this.context.history.location.pathname!=="/Evaluation"?
                    <div id="Evaluation_Main_Div_Top_Name">
                        {this.context.state.patient_name}
                    </div>:null
                }
                {/* { this.context.history.location.pathname!=="/Evalutaion/Welcome"?
                 
                    <div id="Evaluation_Main_Div_Top_Name">
                        aa
                    </div> 
                :console.log('a')
                } */}
                    {/* <div id="Evaluation_Main_Div_Top_Name">
                        aa
                    </div>  */}
                    
                
            </div>
        )
    }
}
Evaluation.contextType=MyContext;
export default Evaluation;