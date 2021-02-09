import React, { Component } from 'react';


import Tick from '../../assets/tick-black.png';
import Grid from '@material-ui/core/Grid';
import MyContext from '../../helper/themeContext';

import './getImage.css';

const height='60px';

class GetImage extends Component {
    constructor(props) {
        super(props);
        this.state = { Evaluations:[]  }
    }

    UNSAFE_componentWillMount()
    {
        this.setState({Evaluations:this.context.state.Evaluations})
    }


    render() { 
        return ( 
            <div className="GetImage" style={{width:"900px",height:"1300px",backgroundColor:"white",position:'absolute',top:'-1600px',left:'1000px'}}>
                <div  id="ImageReportMainDiv">
                    <div className="xray-report-card-header" style={{marginBottom:'20px',lineHeight:'50px'}}>
                       <span className="bold"> Patient Information </span> 
                    </div>
                    
                    <div className="report-image-patient-info-div  GetImage_Report_Box_Text3">
                        <div className="report-image-patient-info-box">
                            <div className="report-image-patient-info-left">
                                <span className="bold">Name: </span> {this.context.state.patient.name}
                            </div>
                            <div className="report-image-patient-info-right">
                                <span className="bold">Birthdate: </span> {this.context.state.patient.birth_date}
                            </div>

                        </div>
                        <br/>
                        <div className="report-image-patient-info-box">
                            <div className="report-image-patient-info-left">
                                <span className="bold">ID: </span> {this.context.state.patient_id}
                            </div>
                            <div className="report-image-patient-info-right">
                            <span className="bold">Height: </span> {this.context.state.patient.height}
                            </div>

                        </div>
                        <br/>
                        <div className="report-image-patient-info-box GetImage_Report_Box_Text3">
                            <div className="report-image-patient-info-left">
                            <span className="bold">Age: </span>  {this.context.state.patient.age}
                            </div>
                            <div className="report-image-patient-info-right">
                            <span className="bold">Weight: </span>  {this.context.state.patient.weight}
                            </div>

                        </div>
                        <br/>
                        <div className="report-image-patient-info-box  GetImage_Report_Box_Text3">
                            <div className="report-image-patient-info-left">
                            <span className="bold">Gender: </span>  {this.context.state.patient.gender}
                            </div>
                            <div className="report-image-patient-info-right">
                            <span className="bold">Email: </span>    {this.context.state.patient.email}
                            </div>

                        </div>
                        <br/>
                        <div className="report-image-patient-info-box">
                            <div className="report-image-patient-info-left">
                            <span className="bold">Cell Phone: </span>  {this.context.state.patient.cell_phone}
                            </div>
                            <div className="report-image-patient-info-right">

                            </div>

                        </div>
                        <br/>
                        <div className="report-image-patient-info-box">
                            <div className="report-image-patient-info-left">
                            <span className="bold">Home Phone: </span>  {this.context.state.patient.home_phone}
                            </div>
                            <div className="report-image-patient-info-right">

                            </div>

                        </div>
                        <br/>
                        <div className="report-image-patient-info-box">
                            <div className="report-image-patient-info-left">
                                <span className="bold">Home Adress: </span> {this.context.state.patient.home_address}
                            </div>
                            <div className="report-image-patient-info-right">

                            </div>

                        </div>
                       

                    </div>
                 


                
                </div>
            
            </div>
        );
    }
}
GetImage.contextType=MyContext;
export default GetImage;