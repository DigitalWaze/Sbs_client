import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import Tick from '../../assets/button-tick.png';

import './overview.css'
import MyContext from '../../helper/themeContext';


class OverviewBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const old = this.context.state.old==true && parseInt(this.context.state.evaluation_stage)>3?true:false;
        return ( 
                <div id="Evaluaion_UploadXray_OverView_Box1_Div" style={{height:this.context.state.Eval.length<2?this.context.state.old==true?'510px':'440px':this.context.state.old==true?'560px':'560px'}}>
                    {
                        this.props.Xrays.map((xray,id) => 
                            <div key={id}>
                                <div className="Evaluaion_UploadXray_OverView_Box1_Content1">
                                    <img className="Evaluaion_UploadXray_OverView_Box1_Content1_Image" alt={xray.name} src={xray.thumbnail}/>
                                </div>
                                <div  className="Evaluaion_UploadXray_OverView_Box1_Content2">

                                { xray.isDone===true ?
                                    <div className="aaaa">
                                        <div className="Evaluaion_UploadXray_OverView_Box_DisbaleText"> {xray.name} </div>
                                        <div className="Evaluaion_UploadXray_OverView_Box_DisbaleText2"> <img src={Tick} alt="done"/> &nbsp; Complete </div>
                                    </div>
                                    :
                                    xray.enable===true?
                                        <Button className="Evaluaion_UploadXray_OverView_Box_Button"  variant="contained" onClick={()=>this.props.handleClick(id)}> {xray.name} </Button>
                                    :
                                    <div className="Evaluaion_UploadXray_OverView_Box_DisbaleText"> {xray.name} </div>
                                }

                                
                                </div>
                            </div>
                        )
                    }
                    {
                    old==true?
                        <Button className="Evaluaion_UploadXray_OverView_Old_Box_Button"  variant="contained" onClick={this.props.Old}> Next </Button>
                    :null
                    }
                
                </div>
        );
    }
}
OverviewBox.contextType=MyContext;
export default OverviewBox;