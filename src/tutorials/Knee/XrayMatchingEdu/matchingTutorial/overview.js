import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import Tick from '../../../../assets/button-tick.png';

// import './overview.css'
import MyContext from '../../../../helper/themeContext';
import './overview.css'


class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <div  id="Evaluaion_XrayMatching_OverView_Content1_Wrapper">
                    <div id="Evaluaion_XrayMatching_OverView_Heading1_Div">
                        X-ray Evaluation
                    </div>
                    <div id="Evaluaion_XrayMatching_OverView_Heading2_Div">
                        Right Knee Sample Patient
                    </div>

                    

                    <div className="Tutorials_XrayMatchingEducation_Matching_Main_Content_Wrapper">
                        <div className="Tutorials_XrayMatchingEducation_Matching_Overview_Wrapper">
                            { this.props.Evaluation.Xrays.map((type,id) =>
                                <div>
                                    <div className="Evaluaion_XrayMatching_OverView_Label_Div">
                                        {type.name}
                                    </div> 
                                    <div key={id} className="Evaluaion_XrayMatching_OverView_Box_Div">
                                        {
                                        type.xrays.map((xray,id) => 
                                            <div key={id}>
                                                <div className="Evaluaion_XrayMatching_OverView_Box1_Content1">
                                                    <img className="Evaluaion_XrayMatching_OverView_Box1_Content1_Image" alt={xray.name} src={xray.thumbnail}/>
                                                </div>
                                                <div  className="Evaluaion_XrayMatching_OverView_Box1_Content2">

                                                { xray.isDone===true ?
                                                    <div className="aaaa">
                                                        <div className="Evaluaion_XrayMatching_OverView_Box_DisbaleText"> {xray.name} {xray.name=="Kneecap"?"View":null} </div>
                                                        <div className="Evaluaion_XrayMatching_OverView_Box_DisbaleText2"> <img src={Tick} style={{width:'16px'}} alt="done"/> &nbsp; Complete </div>
                                                    </div>
                                                    :
                                                    xray.enable===true?
                                                        <Button className="Evaluaion_XrayMatching_OverView_Box_Button"  variant="contained" onClick={()=>this.props.handleClick(type.name,xray.name)}> {xray.name} </Button>
                                                    :
                                                    <div className="Evaluaion_XrayMatching_OverView_Box_DisbaleText"> {xray.name}  {xray.name=="Kneecap"?"View":null} </div>
                                                }
                                                </div>
                                            </div>
                                        )   
                                        }
                                    </div>
                                </div>
                        
                            )}
                        </div>
                        {this.props.start===true?
                            <div id="Tutorials_XrayMatchingEducation_Matching_Overview_Explanation_Div">
                                Click on Flexion view to start evaluating
                            </div>
                        :   null
                        }
                        
                    </div>
                    {this.props.Next && <div id="Evaluaion_XrayMatching_Overview_Next_Button_Div">
                        <Button id="Evaluaion_XrayMatching_Overview_Next_Button" variant="contained" onClick={this.props.handleNextClick}> View X-ray Report Card </Button>
                    </div>}
                </div>
            </div>
        );
    }
}
 Overview.contextType=MyContext;
export default Overview;