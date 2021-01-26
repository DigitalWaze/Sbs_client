import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import MyContext from '../../../helper/themeContext';

import Tick from '../../../assets/button-tick.png';

class ManualFormWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleClick = () =>
    {
        if(this.context.state.Eval.length>1)
        {
            this.props.handleShowMultiChart();
        }
        else this.context.history.push('./patient-profile')
    }
    render() { 
        return ( 
        
        <div id="Evaluaion_Forms_Main_Div">
            <div  id="Evaluaion_Forms_Content1_Wrapper">
                <div id="Evaluaion_Forms_Heading1_Div">
                    Patient Information
                </div>
                <div id="Evaluaion_Forms_Box1_Div">

                    <div className="Evaluaion_Forms_Box1_Content1">
                        <img className="Evaluaion_Forms_Box1_Content1_Image" src="https://assets.website-files.com/5d8d4f718f129fc077e4b98d/5d9e0d14916a658e42a03643_Asset%202doc.png" width="20px" alt=""/>
                    </div>
                   
                    <div  className="Evaluaion_Forms_Box1_Content2">
                        {this.context.state.Pro===true ?
                        <div>
                            <div className="Evaluaion_Forms_Box_DisbaleText"> Patient Reported Evaluation </div>
                            <div className="Evaluaion_Forms_Box_DisbaleText2"> <img src={Tick} alt="Completed"/> &nbsp; Complete </div>
                        </div>
                        :
                            this.props.formLoad.firstDone===false?
                            <Button className="Evaluaion_Forms_Box_Button"  variant="contained" disabled={this.props.formLoad.firstDone} onClick={()=>{ this.props.setActive(this.props.formLoad.active) } } > Enter {this.props.formLoad.active.toString()==="3"?"Right":"Left"} Knee KOOS </Button>
                        :
                        <div  className="Evaluaion_Forms_Box1_Content2">
                            <div className="Evaluaion_Forms_Box_DisbaleText"> {this.props.formLoad.active.toString()==="3"?"Right":"Left"} Knee KOOS </div>
                            <div className="Evaluaion_Forms_Box_DisbaleText2"> <img src={Tick} alt="Completed"/> &nbsp; Complete </div>
                        </div>
                            // <Button className="Evaluaion_Forms_Box_Button"  variant="contained" disabled> KOOS Upload </Button>
                            
                        }

                            

                    </div>

                    {this.context.state.Pro===false?
                     
                        this.props.formLoad.total>1?
                        this.props.formLoad.firstDone===false?
                        <div>
                            <div className="Evaluaion_Forms_Box1_Content1">
                                <img className="Evaluaion_Forms_Box1_Content1_Image" src="https://assets.website-files.com/5d8d4f718f129fc077e4b98d/5d9e0d14916a658e42a03643_Asset%202doc.png" width="20px" alt=""/>
                            </div>
                            <div  className="Evaluaion_Forms_Box1_Content2">
                                <div className="Evaluaion_Forms_Box_DisbaleText"> Enter {this.props.formLoad.active.toString()==="3"?"Left":"Right"} Knee KOOS </div>
                            </div>
                        </div>
                        :<div>
                            
                            <div className="Evaluaion_Forms_Box1_Content1">
                                <img className="Evaluaion_Forms_Box1_Content1_Image" src="https://assets.website-files.com/5d8d4f718f129fc077e4b98d/5d9e0d14916a658e42a03643_Asset%202doc.png" width="20px" alt=""/>
                            </div>
                           
                                <div  className="Evaluaion_Forms_Box1_Content2">
                                
                                {/* <Button className="Evaluaion_Forms_Box_Button"  variant="contained" onClick={()=>{this.context.history.push('./patient-report')}}> KOOS Manual Entry </Button> */}
                                <Button className="Evaluaion_Forms_Box_Button"  variant="contained" disabled={!this.props.formLoad.firstDone} onClick={this.props.next }> Enter {this.props.formLoad.active.toString()==="3"?"Left":"Right"} Knee KOOS </Button>

                                </div>
                            
                            
                        </div>
                        :null
                    :   null
                    }


                    
                    {this.context.state.Pro===true ?
                        <div id="Evaluaion_Forms_Next_Button_Div">
                            <Button id="Evaluaion_Forms_Next_Button" variant="contained" onClick={this.handleClick} > Next </Button>
                        </div>
                    :   null
                    }
                
                </div>
            </div>

            

        </div> );
    }
}
ManualFormWrapper.contextType=MyContext;
export default ManualFormWrapper;