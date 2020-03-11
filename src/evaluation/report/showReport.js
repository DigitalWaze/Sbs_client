import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';


import MyContext from '../../helper/themeContext';

import Xray1 from '../../assets/xray1.jpg';
import Xray2 from '../../assets/xray2.jpeg';
import Xray3 from '../../assets/xray3.jpeg';
import Xray4 from '../../assets/xray4.jpeg';
import Tick from '../../assets/tick-black.png';
import Search from '../../assets/search.png';

import './report.css'

const height='60px';

class ShowReport extends Component {
    constructor(props) {
        super(props);
        this.state = {  Evaluations:[] ,modal:false}
    }

    componentWillMount()
    {
        this.setState({Evaluations:this.context.state.Evaluations})
    }
    handleSelect(Type,Xray,State,Image)
    {
        console.log(this.props)
        this.props.handleState(State,Type,Xray,Image);
        this.props.handleView('Selected');
    }
    modalOpen = () =>
    {
        this.setState({modal:true})
    }
    modalClose = () =>
    {
        this.setState({modal:false})
    }
    handleSearchClick = (Xray) =>
    {
        this.setState({ActiveImage:Xray,modal:true})
    }
    render() { 
        return ( 
            <div id="Evaluaion_Report_Main_Div">
                <div style={{width:'60vw',margin:'auto',padding:'10px',paddingLeft:'20px',paddingRight:'20px',border:'1px solid #fff'}}>
                    <Grid container>
                        <Grid container item xs={12} spacing={0} style={{height:'80px'}}>
                            <React.Fragment>
                        
                                <Grid item xs={8}>
                                    <span className="Evaluaion_Report_Box_Text1">
                                        {this.state.Evaluations[0].name}
                                    </span>
                                    <span className="Evaluaion_Report_Box_Text2">
                                        {this.context.state.patient_name}
                                    </span>
                                </Grid>
                                <Grid container item xs={4} >
                                    <React.Fragment>
                                        <Grid item xs={9}>
                                            <span className="Evaluaion_Report_Box_Priority">
                                                Joint Priority:
                                            </span>
                                        </Grid>
                                        <Grid item xs={3}>
                                        <span className="Evaluaion_Report_Box_Priority_Box">
                                            1
                                        </span>
                                        </Grid>
                                    </React.Fragment>
                                </Grid>

                            </React.Fragment>
                        </Grid>

                        <Grid container item xs={6} spacing={0} style={{height:'100px'}}>
                            <React.Fragment>
                        
                                <Grid item xs={12}>
                                    <span className="Evaluaion_Report_Box_Text3">
                                        X-ray Evaluations: 10/22/2020 <br/>
                                        Date X-ray Taken: 10/22/2020
                                    </span>
                                </Grid>
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
                        { this.state.Evaluations[0].Xrays.map((type,id)=>
                            
                            <Grid container item xs={12} key={id}>
                                <Grid container item xs={3} spacing={0} style={{border:'1px solid #fff',height:`calc((${type.xrays.length} * ${height}) - (2px * ${type.xrays.length}))`}}>
                                    <React.Fragment>
                                
                                        <Grid item xs={12} style={{height:'100%'}}>
                                            <div className="Evaluaion_Report_Box_Text5">
                                                {type.name} <br/> {type.name!=="Kneecap" && "Compartment"}
                                            </div>
                                        </Grid>

                                    </React.Fragment>
                                </Grid> 
                                <Grid container item xs={9} spacing={0} >
                                {
                                type.xrays.map((xray,id)=>

                                    <React.Fragment key={id}>    
                                        <Grid item xs={4} style={{position:'relative',border:'1px solid #fff',height:`calc(${height} - 2px)` }}>
                                            <div className="Evaluaion_Report_Box_Button_Div"> 
                                                <Button className="Evaluaion_Report_Box_Button"  variant="contained" onClick={()=>this.handleSelect(type.name,xray.name,xray.state,xray.image)}> {xray.name} </Button>
                                            </div>
                                        </Grid>
                                        <Grid item xs={2} style={{border:'1px solid #fff',height:`calc(${height} - 2px)` , background:xray.state==='Normal to Sight'?'#6C8D31':''}}>
                                            <div className="Evaluaion_Report_Box_Selected_Box"> {xray.state==='Normal to Sight' && <img src={Tick} alt="Ticked" /> } </div> 
                                        </Grid>
                                        <Grid item xs={2} style={{border:'1px solid #fff',height:`calc(${height} - 2px)`,background:xray.state==='Moderate'?'#FA9E2D':''}}>
                                            <div className="Evaluaion_Report_Box_Selected_Box"  > {xray.state==='Moderate' && <img src={Tick} alt="Ticked" /> }  </div> 
                                        </Grid>
                                        <Grid item xs={2} style={{border:'1px solid #fff',height:`calc(${height} - 2px)`,background:xray.state==='Severe'?'#C50000':''}}>
                                            <div className="Evaluaion_Report_Box_Selected_Box"> {xray.state==='Severe' && <img src={Tick} alt="Ticked" /> } </div> 
                                        </Grid>
                                        <Grid item xs={2} style={{border:'1px solid #fff',height:`calc(${height} - 2px)`,background:xray.state==='End Stage'?'#C50000':''}}>
                                            <div className="Evaluaion_Report_Box_Selected_Box"> {xray.state==='End Stage' && <img src={Tick} alt="Ticked" /> } </div> 
                                        </Grid>
                                    </React.Fragment>
                                    
                                ) 
                                }
                                </Grid>
                            </Grid>
                        
                        )}
                    </Grid>


                    <div style={{paddingTop:'10px'}}>
                        <Modal
                            open={this.state.modal}
                            onClose={this.modalClose}
                        >
                            <div style={{display:'inline-block',padding:'10px',background:'#3023AE',width:'auto'}}>
                                <img src={this.state.ActiveImage} alt="Xray" style={{maxHeight:'60vh'}} />
                            </div>
                        </Modal>
                        <div style={{display:'inline-block',padding:'0px 10px 0px 0px',position:'relative'}}  onClick={()=>{this.handleSearchClick(Xray1)}}>
                            <img src={Xray1} alt="Xray" style={{maxHeight:'125px' , height:'auto', width:'auto'}}/>
                            <div className="Evaluaion_Report_Box_Search_Box">
                                <img src={Search} alt="Search" style={{width:'20px'}} />
                            </div>    
                        </div>

                        <div style={{display:'inline-block',padding:'0px 10px 0px 0px',position:'relative'}} onClick={()=>{this.handleSearchClick(Xray2)}}>
                            <img src={Xray2} alt="Xray" style={{maxHeight:'125px' , height:'auto', width:'auto'}}/>
                            <div className="Evaluaion_Report_Box_Search_Box">
                                <img src={Search} alt="Search" style={{width:'20px'}} />
                            </div>
                        </div>

                        <div style={{display:'inline-block',padding:'0px 10px 0px 0px',position:'relative'}} onClick={()=>{this.handleSearchClick(Xray3)}}>
                            <img src={Xray3} alt="Xray" style={{maxHeight:'125px' , height:'auto', width:'auto'}}/>
                            <div className="Evaluaion_Report_Box_Search_Box">
                                <img src={Search} alt="Search" style={{width:'20px'}} />
                            </div>
                        </div>

                        <div style={{display:'inline-block',padding:'0px 10px 0px 0px',position:'relative'}} onClick={()=>{this.handleSearchClick(Xray4)}}>
                            <img src={Xray4} alt="Xray" style={{maxHeight:'125px' , height:'auto', width:'auto'}}/>
                            <div className="Evaluaion_Report_Box_Search_Box">
                                <img src={Search} alt="Search" style={{width:'20px'}} />
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div> 
        );
    }
}
ShowReport.contextType=MyContext;
export default ShowReport;