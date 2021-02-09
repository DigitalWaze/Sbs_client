import React, { Component } from 'react';
import MyContext from '../../helper/themeContext';

import './JointRcpImage.css'

const compartments = [
    { name: 'Normal to Slight', id: '1',color:'#B3D89B' },
    { name: 'Moderate', id: '2' ,color:'#FAF075'},
    { name: 'Near End Stage', id: '3' , color:'#F26E82'},
    { name: 'End Stage', id: '4' , color:'#F26E82'},
    {name:'Cannot Evaluate',id:'5',color:'#E4E4E4'}
]

const TJRPath="Operative Candidate - Total Joint Replacement"
const PJRPath="Operative Candidate - Partial Joint Replacement"
const NOCPath="Non Operative Candidate"
const NOCOIPath="Non Operative Candidate - Operational Injection"

const ListLeft1 = ["OPTIONAL JOINT INJECTION","SMOKING CESSATION","WEIGHT LOSS","NUTRITIONAL SUPPORT","HOME EXCERCISES"]
const ListLeft2 = ["SMOKING CESSATION","WEIGHT LOSS","NUTRITIONAL SUPPORT","HOME EXCERCISES"]
const ListRight = ["PHYSICAL THERAPY","PAIN MANAGEMENT","COMPLIMENTARY ALTERNATIVE PAIN TREATMENTS","ANXIETY REDUCTION"]

class JointRcpImage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
        return ( 
                
            this.props.JointMapArray.map((joint,id)=>
                <div className={`JointImage${id}`} style={{width:"900px",height:"1300px",backgroundColor:"white",position:'absolute',top:'-1600px',left:'1000px'}}>
                    <div  id="ImageReportMainDiv">

                        <div className="xray-report-card-header">
                            {joint.Name}: Recommended Care Pathway 
                        </div>

                        <div className="chart-pdf-patient-header">
                            {this.context.state.patient.name}  <span className="chart-patient-header-middle"> Evaluation Date : {this.context.state.patient.date} </span>
                            <span className="chart-patient-header-right"> ID: {this.context.state.patient_id} </span>
                        </div>

                        <div className="Joint-Rcp-Image-Header-Hr">

                        </div>
                        
                        <div className="Joint-Rcp-Image-Inner-Header">
                            {joint.Name}
                        </div>

                        <div className="Joint-Rcp-Image-Box-Wrapper">
                            <div className="Joint-Rcp-Image-Compartment-Box-Wrapper">
                                <div className="Joint-Rcp-Image-Compartment-Head">
                                    Medial
                                </div>
                                <div className="Joint-Rcp-Image-Compartment-Box" style={{background:compartments.find( comp => comp.id.toString()===joint.Compartment1.toString() ).color}}>
                                    <span class="Centerer"></span>
                                    <span class="Centered"> {compartments.find( comp => comp.id.toString()===joint.Compartment1.toString() ).name } </span>                                
                                </div>
                            </div>
                            <div className="Joint-Rcp-Image-Compartment-Box-Wrapper">
                                <div className="Joint-Rcp-Image-Compartment-Head">
                                    Lateral
                                </div>
                                <div className="Joint-Rcp-Image-Compartment-Box" style={{background:compartments.find( comp => comp.id.toString()===joint.Compartment2.toString() ).color}}>
                                    <span class="Centerer"></span>
                                    <span class="Centered"> {compartments.find( comp => comp.id.toString()===joint.Compartment2.toString() ).name } </span>                                
                                </div>
                            </div>
                            <div className="Joint-Rcp-Image-Compartment-Box-Wrapper">
                                <div className="Joint-Rcp-Image-Compartment-Head">
                                    Kneecap
                                </div>
                                <div className="Joint-Rcp-Image-Compartment-Box" style={{background:compartments.find( comp => comp.id.toString()===joint.Compartment3.toString() ).color}}>
                                    <span class="Centerer"></span>
                                    <span class="Centered"> {compartments.find( comp => comp.id.toString()===joint.Compartment3.toString() ).name } </span>
                                </div>
                            </div>
                            <div className="Joint-Rcp-Image-Score-Box-Wrapper">
                                <div className="Joint-Rcp-Image-Compartment-Head">
                                    KOOS
                                </div>
                                <div className="Joint-Rcp-Image-Score-Box" style={{background:joint.Score<74?'#F26E82':'#B3D89B'}}>
                                    <span class="Centerer"></span>
                                    <span class="Centered"> {joint.Score} </span>
                                </div>
                            </div>
                            <div className="Joint-Rcp-Image-Compartment-Hr">

                            </div>
                            <div className="Joint-Rcp-Image-Compartment-Path">
                                {joint.Path}
                            </div>
                        </div>

                        {
                            (joint.Path===NOCPath || joint.Path===NOCOIPath)?
                            <React.Fragment>
                                <div className="xray-report-card-header margin-top-20">
                                    Non-Operative Intervention Checklist
                                </div>

                                <div className="Joint-Rcp-Image-OI-List-Wrapper">

                                    <div className="Joint-Rcp-Image-OI-List-Left">

                                        { (joint.Path===NOCPath? ListLeft2 :ListLeft1).map((text)=>
                                            <div className="Joint-Rcp-Image-OI-List-Item">
                                                <div className="Joint-Rcp-Image-OI-List-Box"> 
                                                    
                                                </div>
                                                <div className="Joint-Rcp-Image-OI-List-Text"> 
                                                    {text}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="Joint-Rcp-Image-OI-List-Right">
                                        { ListRight.map((text)=>
                                            <div className="Joint-Rcp-Image-OI-List-Item">
                                                <div className="Joint-Rcp-Image-OI-List-Box"> 
                                                    
                                                </div>
                                                <div className="Joint-Rcp-Image-OI-List-Text"> 
                                                    {text}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </React.Fragment>
                            
                            :null
                        }
                       

                    </div>
                </div>
            )
        );
    }
}
 
JointRcpImage.contextType=MyContext;
export default JointRcpImage;