import React, { Component } from 'react';

import Button from '@material-ui/core/Button';


import './selected.css'

import MEDFLXDOWN1 from '../../assets/medial-flexion-up-1.png'




class Selected extends Component {
    

    handleClick = (e) =>
    {
        this.props.handleState(null,null,null,null);
        this.props.handleView("Report")
    }
    
    render() { 
        return (  
            <div id="Evaluaion_Report_Selected_Main_Div">
            {console.log(this.props.XrayImage)}
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
                            <Button className="Evaluaion_Report_Selected_State_Button" style={{color:this.props.State===text.id?'':'#fff', background:this.props.State===text.id?'#fffb00':'hsla(0, 0%, 100%, 0.08)'}} variant="contained"> {text.name} </Button>
                        </div>
                        )
                    }
                    <div style={{display:'block',width:'100%'}}>
                        <div className="Evaluaion_Report_Selected_Confirm_Button_Div" >
                            <Button className="Evaluaion_Report_Selected_Confirm_Button" variant="contained" onClick={this.handleClick}> Back to Report Card </Button>
                        </div>                    
                    </div>
                    
                </div>
                <div  id="Evaluaion_Report_Selected_Content2_Wrapper">
                    <div id="Evaluaion_Report_Selected_Heading3_Div">
                        {this.props.Type=="Kneecap"?"Kneecap": this.props.Type + " " + this.props.Xray}
                    </div>
                    <div style={{maxWidth:'500px',maxHeight:'calc(50% - 30px)',textAlign:'center'}}>
                        <img style={{maxWidth:'100%',maxHeight:'100%'}} src={this.props.XrayImage}/>
                    </div>
                    <div style={{maxWidth:'500px',maxHeight:'calc(50% - 30px)',textAlign:'center'}}>
                        <img style={{maxWidth:'100%',maxHeight:'100%'}} src={this.props.Type=='Lateral'?this.props.Xray=="FlexionView"?require(`../../assets/lateral-flexion-up-${this.props.State}.png`):require(`../../assets/lateral-nonflexion-up-${this.props.State}.png`):this.props.Type=='Medial'?this.props.Xray=="FlexionView"?require(`../../assets/medial-flexion-up-${this.props.State}.png`):require(`../../assets/medial-nonflexion-up-${this.props.State}.png`):this.props.Type=='Kneecap'?require(`../../assets/kneecap-up-${this.props.State}.png`):null} />
                    </div>

                    {/* <div>
                        <img src={this.props.image}/>
                    </div> */}
                     
                </div>

            
            </div>
        );
    }
}
 
export default Selected;