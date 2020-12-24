import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import MEDFLXDOWN from '../../../../assets/eval-comp-xrays/medial-flexion-up-4.png'
import MEDNONFLXDOWN from '../../../../assets/eval-comp-xrays/medial-nonflexion-up-4.png'
import LATFLXDOWN from '../../../../assets/eval-comp-xrays/lateral-flexion-up-1.png'
import LATNONFLXDOWN from '../../../../assets/eval-comp-xrays/lateral-nonflexion-up-1.png'
import KNEEDOWN from '../../../../assets/eval-comp-xrays/kneecap-up-4.png'






class Selected extends Component {
    

    handleClick = (e) =>
    {
        this.props.handleState(null,null,null,null);
        this.props.handleView("Report")
    }
    
    render() { 
        return (  
            <div id="Evaluaion_Report_Selected_Main_Div">
                <div  id="Evaluaion_Report_Selected_Content1_Wrapper">
                    <div id="Evaluaion_Report_Selected_Heading1_Div">
                        X-Ray Matching
                    </div>
                    <div id="Evaluaion_Report_Selected_Heading2_Div">
                        Click on the levels of degeneration to view X-rays from the database.
                        Once you believe you have found a match, click "Confirm Evaluation" to move onto the next view.
                    </div>
                    {
                        [{name:'Normal to Sight',id:'1'},{name:'Moderate',id:'2'},{name:'Near End Stage',id:'3'},{name:'End Stage',id:'4'}].map((text,id)=>
                        <div className="Evaluaion_Report_Selected_State_Button_Div">
                            <Button className="Evaluaion_Report_Selected_State_Button" style={{color:this.props.State==text.id?'':'#fff', background:this.props.State==text.id?'#fffb00':'hsla(0, 0%, 100%, 0.08)'}} variant="contained"> {text.name} </Button>
                        </div>
                        )
                    }
                    {console.log(this.props.Image)}
                    <div style={{display:'block',width:'100%'}}>
                        <div className="Evaluaion_Report_Selected_Confirm_Button_Div" >
                            <Button className="Evaluaion_Report_Selected_Confirm_Button" variant="contained" onClick={this.handleClick}> Back to Report Card </Button>
                        </div>                    
                    </div>
                    
                </div>
                <div  id="Evaluaion_XrayMatching_Matching_Content2_Wrapper">
                    <div id="Evaluaion_XrayMatching_Matching_Heading3_Div">
                     RIGHT KNEE - {this.props.Type=="Kneecap"?"KNEECAP": <span> {this.props.Type.toUpperCase()}  <br/> {this.props.Xray.toUpperCase()} </span> }
                     {/* RIGHT KNEE - {this.props.ActiveType=="Kneecap"?'KNEECAP': <span> {this.props.ActiveType.toUpperCase()}  <br/> <span style={{marginLeft:this.props.ActiveXray==="Flexion View"?'92px':'18px'}}> {this.props.ActiveXray.toUpperCase()} </span>  </span> } */}

                   </div>
                    <div  className="Evaluaion_XrayMatching_Matching_Xray_Image_Wrapper">
                        <img className="Evaluaion_XrayMatching_Matching_Xray_Image" src={this.props.Image}/>
                        <div className="Evaluaion_XrayMatching_Matching_Image_Label1">
                            YOUR PATIENT
                        </div>
                    </div>
                    <div  className="Evaluaion_XrayMatching_Matching_Xray_Image_Wrapper">
                        <img className="Evaluaion_XrayMatching_Matching_Xray_Image" src={this.props.Type=='Lateral'?this.props.Xray=="Flexion View"?LATFLXDOWN:LATNONFLXDOWN:this.props.Type=='Medial'?this.props.Xray=="Flexion View"?MEDFLXDOWN:MEDNONFLXDOWN:this.props.Type=='Kneecap'?KNEEDOWN:null} />
                    </div>
                     
                </div>

            
            </div>
        );
    }
}
 
export default Selected;