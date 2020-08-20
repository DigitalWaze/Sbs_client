

import React, { Component } from 'react';

import Page1 from '../../assets/page1.png';
import MyContext from '../../helper/themeContext';



class ReportPage1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div  className="Report-Page1" style={{width:"476px",height:"617px",backgroundImage:`url(${Page1})`,position:'absolute',top:'-16384px',zIndex:'3'}}>
            <div style={{position: 'absolute',left:'80px', width:'476px',bottom:'130px'}}> 
                <div id="patient-name" style={{marginBottom:'10px',color:'white',fontWeight:'600', fontFamily:'Google Sans,Roboto, arial,sans-serif',  fontSize:'22px',fontStyle:'italic'}}>
                    {this.context.state.patient.name}
                </div>
                <div id="patient-id" style={{marginBottom:'10px',color:'white',fontWeight:'600', fontFamily:'Google Sans,Roboto, arial,sans-serif',  fontSize:'22px',fontStyle:'italic'}}>
                    ID: {this.context.state.patient_id}
                </div>
                <div id="patient-name" style={{marginBottom:'10px',color:'white',fontWeight:'600', fontFamily:'Google Sans,Roboto, arial,sans-serif',  fontSize:'22px',fontStyle:'italic'}}>
                    Date of Evaluation:  <span id="evaluation-date"> {this.context.state.patient.date} </span>
                </div>
            </div>
        </div>
                 );
    }
}
 
ReportPage1.contextType=MyContext;
export default ReportPage1;