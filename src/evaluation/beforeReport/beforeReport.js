import React, { Component } from 'react';
import MyContext from '../../helper/themeContext';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tick from '../../assets/tick-black.png';


const height='60px';
const xray={state:1}

class BeforeReport extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleNextClick = () =>
    {
        this.context.history.push('./chart')
    }
    render() { 
        return ( 
        
            <div id="Evaluaion_Report_Main_Div">
                <div id="Evaluaion_Report_Content_Wrapper">
                    <div  id="ReportMainDiv">
                        <div className="Evaluaion_Report_Box_Text1">
                            Joint Report Card Summary
                        </div>
                        <div className="Evaluaion_Report_Box_Text3">
                            X-ray Evaluations: {this.context.state.patient.date} <br/>
                            Date X-ray Taken: {this.context.state.patient.date} 
                        </div>

                        {
                            this.context.state.Evaluations.map((eva,id)=>

                            eva.Xrays[0].isDone==false ? <div></div> :
                            <Grid container>
                                <Grid container item xs={3} spacing={0} style={{height:'100px'}}>
                                    <React.Fragment>
                                        <span className="Evaluaion_Report_Box_Text3" style={{paddingTop:'60px'}}>
                                            {eva.name}
                                        </span>
                                    </React.Fragment>
                                </Grid>
                                <Grid container item xs={6} spacing={0} style={{height:'100px'}}>
                                    <React.Fragment>
                                
                                        <Grid item xs={3} >
                                            <div style={{width:'2px' ,height:'100px' , background:'white', transform: 'rotate(45deg) translateY(-15px) translateX(35px)',}}>
                                            
                                            </div>
                                            <div className="Evaluaion_Report_Box_Text4">
                                                Normal/Slight
                                            </div>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <div style={{width:'2px' ,height:'100px' , background:'white', transform: 'rotate(45deg) translateY(-15px) translateX(35px)',}}>
                                            </div>
                                            <div className="Evaluaion_Report_Box_Text4">
                                                Moderate
                                            </div>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <div style={{width:'2px' , height:'100px' , background:'white', transform: 'rotate(45deg) translateY(-15px) translateX(35px)',}}>
                                            </div>
                                            <div className="Evaluaion_Report_Box_Text4">
                                                Near End Stage
                                            </div>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <div style={{width:'2px' ,height:'100px'  , background:'white', transform: 'rotate(45deg) translateY(-15px) translateX(35px)',}}>
                                            </div>
                                            <div className="Evaluaion_Report_Box_Text4">
                                                End Stage
                                            </div>
                                        </Grid>

                                    </React.Fragment>
                                </Grid>
                                { eva.Xrays.map((type,id)=>
                                    
                                    <Grid container item xs={12} key={id}>
                                        <Grid container item xs={3} spacing={0} style={{border:'1px solid #fff',height:`calc(${height} - 2px)`}}>
                                            <React.Fragment>
                                        
                                                <Grid item xs={12} style={{height:'100%'}}>
                                                    <div className="Evaluaion_Report_Box_Text5">
                                                        {type.name} <br/> {type.name!=="Kneecap" && "Compartment"}
                                                    </div>
                                                </Grid>
    
                                            </React.Fragment>
                                        </Grid> 
                                        <Grid container item xs={9} spacing={0} >
                                            <React.Fragment key={id}>   
                                            {console.log(type)} 
                                                {/* <Grid item xs={4} style={{position:'relative',border:'1px solid #fff',height:`calc(${height} - 2px)` }}>
                                                    <div className="Evaluaion_Report_Box_Button_Div"> 
                                                        <Button className="Evaluaion_Report_Box_Button"  variant="contained" onClick={()=>this.handleSelect(type.name,xray.name,xray.state,xray.up)}> {xray.name} </Button>
                                                    </div>
                                                </Grid> */}
                                                <Grid item xs={2} style={{border:'1px solid #fff',height:`calc(${height} - 2px)` , background:type.xrays.length>1?(type.xrays[0].state==1 && type.xrays[1].state==1)?'#6C8D31':'':type.xrays[0].state==1?'#6C8D31':''}}>
                                                    <div className="Evaluaion_Report_Box_Selected_Box"> {(type.xrays.length>1?(type.xrays[0].state==1 && type.xrays[1].state==1)?true:false:type.xrays[0].state==1?true:false) && <img src={Tick} alt="Ticked" /> } </div> 
                                                </Grid>
                                                <Grid item xs={2} style={{border:'1px solid #fff',height:`calc(${height} - 2px)`,background:type.xrays.length>1?(type.xrays[0].state==2 && type.xrays[1].state<=2) || (type.xrays[0].state<=2 && type.xrays[1].state==2)?'yellow':'':type.xrays[0].state==2?'yellow':''}}>
                                                    <div className="Evaluaion_Report_Box_Selected_Box"  > {(type.xrays.length>1?(type.xrays[0].state==2 && type.xrays[1].state<=2) || (type.xrays[0].state<=2 && type.xrays[1].state==2)?true:false:type.xrays[0].state==2?true:false) && <img src={Tick} alt="Ticked" /> }  </div> 
                                                </Grid>
                                                <Grid item xs={2} style={{border:'1px solid #fff',height:`calc(${height} - 2px)`,background:type.xrays.length>1?(type.xrays[0].state==3 && type.xrays[1].state<=3) || (type.xrays[0].state<=3 && type.xrays[1].state==3)?'#fa9e2d':'':type.xrays[0].state==3?'#fa9e2d':''}}>
                                                    <div className="Evaluaion_Report_Box_Selected_Box"> {(type.xrays.length>1?(type.xrays[0].state==3 && type.xrays[1].state<=3) || (type.xrays[0].state<=3 && type.xrays[1].state==3)?true:false:type.xrays[0].state==3?true:false) && <img src={Tick} alt="Ticked" /> } </div> 
                                                </Grid>
                                                <Grid item xs={2} style={{border:'1px solid #fff',height:`calc(${height} - 2px)`,background:type.xrays.length>1?(type.xrays[0].state==4 && type.xrays[1].state<=4) || (type.xrays[0].state<=4 && type.xrays[1].state==4)?'#C50000':'':type.xrays[0].state==4?'#C50000':''}}>
                                                    <div className="Evaluaion_Report_Box_Selected_Box"> {(type.xrays.length>1?(type.xrays[0].state==4 && type.xrays[1].state<=4) || (type.xrays[0].state<=4 && type.xrays[1].state==4)?true:false:type.xrays[0].state==4?true:false) && <img src={Tick} alt="Ticked" /> } </div> 
                                                </Grid>
                                            </React.Fragment>
                                        </Grid>
                                    </Grid>
                                
                                )}
                            </Grid>
                            
                            )
                        }
                         <div id="Evaluaion_Report_Next_Button_Div">
                            <Button id="Evaluaion_Report_Next_Button" variant="contained" onClick={this.handleNextClick}> View Patient Summary  </Button>
                        </div>
                    </div>
                </div>

            </div>  );
    }
}
 
BeforeReport.contextType=MyContext;
export default BeforeReport;