import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import Tick from '../../assets/button-tick.png';

import './overview.css'


class OverviewBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <div id="Evaluaion_UploadXray_OverView_Box1_Div">
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
                
                </div>
        );
    }
}
 
export default OverviewBox;