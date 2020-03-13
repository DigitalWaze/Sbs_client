import React, { Component } from 'react';
import './chart.css'
// import BoneImage from '../assets/bone2_Bitmap.png'
import Button from '@material-ui/core/Button';
import MyContext from '../../helper/themeContext';
import { VictoryStack,VictoryArea } from 'victory';
import Arrow from '@elsdoerfer/react-arrow';


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
     
    render() { 
        return ( 
            <div id="Evaluaion_Chart_Main_Div">
                <div  id="Evaluaion_Chart_Content_Wrapper">
                    <div id="Evaluaion_Chart_Heading1_Div">
                        Pro Report
                    </div>
                   
                    <div id="Evaluaion_Chart_Text_Div">
                        Date of Pro Intake: 10/22/2020
                    </div>
                   
                    <div style={{display:'block',background:'',height:'350px',background:'yellow'}}>
                    <div  style={{display:'inline-block',height:'330px',verticalAlign:'top',background:'green',paddingTop:'20px'}}>
                    <span style={{color:'#231F20',position:'absolute',top:'60px',transform:'rotate(270deg) translateY(-56px)',fontFamily:'Lato',fontWeight:'700',fontSize:'17px'}}>
                        BETTER &nbsp; HEALTH
                    </span>
                        <Arrow
                            angle={0}
                            length={70}
                            style={{
                            width: '50px',
                            height:'400px'
                            }}
                        />
                    </div>
                    {
                        [108,200,108,108,].map((text,key)=>
                            <div style={{display:'inline-block',height:'350px',background:'',width:'250px',position:'relative'}}>
                                
                                <VictoryStack
                                    animate={{
                                        duration: 2000,
                                        onLoad: { duration: 1000 }
                                    }}
                                height={450}
                                //   width={100}
                                colorScale={["#F56C7A", "#F7A11A", "#B9DBA7"]}>
                               
                                <VictoryArea
                                    data={[{x: "a", y: 4}, {x: "b", y: 4}]}
                                />
                                
                                <VictoryArea
                                    data={[{x: "a", y: 3}, {x: "b", y: 3}]}
                                />
                                
                                <VictoryArea
                                    data={[{x: "a", y: 3}, {x: "b", y: 3}]}
                                />
                            
                                </VictoryStack>
                                <div style={{position:'absolute',top:'0px',left:'0px',height:'30px',width:'50px',background:'purple'}}>
                                    <div style={{position:'relative'}}>
                                        70
                                    </div> 
                                </div>
                                <div style={{position:'absolute',zIndex:'2',borderRadius:'50%',width:'11px',background:'#221E20',top:[text+'px'],left:'125px',height:'11px'}}>
                                </div>
                                <div style={{position:'absolute',zIndex:'2',borderRadius:'50%',width:'1px',background:'#221E20',top:[text+11+'px'],left:'129.7px',height:'10px'}}>
                                </div>

                            </div>
                       
                       )
                   } 
                    </div>
                    
                    <div id="Evaluaion_Welcome_Next_Button_Div">
                        <Button id="Evaluaion_Welcome_Next_Button" variant="contained" onClick={()=>{this.context.history.push('./patient-profile')}}> Next </Button>
                    </div>
                </div>
                
            </div> );
    }
}

Chart.contextType=MyContext;
export default Chart;