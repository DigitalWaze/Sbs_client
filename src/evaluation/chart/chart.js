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
        this.state = {  date:'0'}
    }

    componentDidMount()
    {
        var d = new Date;
            let date="";
            if(d.getMonth().toString().length==1)
            {
                date='0';
            }
            date=date+(d.getMonth()+1)+'-';
            if(d.getDate().toString().length==1)
            {
                date=date+'0';
            }
            date=date+d.getDate()+'-'+d.getFullYear();
            console.log(date)
            this.setState({date})
    }
     
    render() { 
        return ( 
            <div id="Evaluaion_Chart_Main_Div">
                <div  id="Evaluaion_Chart_Content_Wrapper">
                    <div id="Evaluaion_Chart_Heading1_Div">
                        Pro Report
                    </div>
                   
                    <div id="Evaluaion_Chart_Text_Div">
                        Date of Pro Intake: {this.state.date}
                    </div>
                   
                    <div style={{display:'inline-block',width:'fit-content',marginRight:'20px',background:'',height:'350px',background:'white'}}>
                    <div  style={{display:'inline-block',height:'330px',verticalAlign:'top',position:'relative',background:'white',paddingTop:'20px'}}>
                    <span className="arrow-text-span">
                        BETTER &nbsp; HEALTH
                    </span>
                    <span id="arrow-div">
                        <Arrow
                                angle={0}
                                length={70}
                                style={{
                                width: '50px',
                                height:'400px'
                                }}
                            />
                    </span>

                    <span style={{position:'absolute',top:'5px',left:'20px',fontSize:'20px',fontWeight:'bold',whiteSpace:'nowrap',overflow:'hidden'}}>
                        PAIN
                    </span>
                    <span style={{position:'absolute',top:'60px',left:'40px',fontSize:'16px',fontWeight:'bold',whiteSpace:'nowrap',overflow:'hidden'}}>
                        Right Knee Pain
                    </span>
                    <span style={{position:'absolute',top:'60px',left:'320px',fontSize:'16px',fontWeight:'bold',whiteSpace:'nowrap',overflow:'hidden'}}>
                        Left Knee Pain
                    </span>
                        
                    </div>

                   
                    {
                        [108,22].map((text,key)=>
                            <div  style={{display:'inline-block', verticalAlign:'bottom',height:'250px',background:'',width:'250px',position:'relative'}}>
                                
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
                                <div style={{position:'absolute',top:'20px',left:'0px',fontWeight:'bold',height:'30px',width:'50px',background:''}}>
                                    <div style={{position:'relative',left:'0px'}}>
                                        100
                                    </div> 
                                    <div style={{position:'relative',top:'41px',left:'9px'}}>
                                        70
                                    </div> 
                                    <div style={{position:'relative',top:'85px',left:'9px'}}>
                                        40
                                    </div> 
                                    <div style={{position:'relative',top:'145px',left:'19px'}}>
                                        0
                                    </div> 
                                </div>
                                <div style={{position:'absolute',zIndex:'2',borderRadius:'50%',width:'11px',background:'#221E20',top:[text+'px'],left:'125px',height:'11px'}}>
                                </div>
                                <div style={{position:'absolute',zIndex:'2',borderRadius:'50%',width:'1px',background:'#221E20',top:[text+11+'px'],left:'130px',height:'10px'}}>
                                </div>
                                <div style={{color:'#000',fontSize:'14px',fontWeight:'bold',position:'absolute',zIndex:'2',top:[text+20+'px'],left:key==0?'122px':'116px'}}>
                                    {key==0?50:100}
                                </div>

                            </div>
                       
                       )
                   } 
                    
                </div>








                <div style={{display:'inline-block',width:'fit-content',background:'',height:'350px',background:'white'}}>
                    <div  style={{display:'inline-block',height:'330px',verticalAlign:'top',position:'relative',background:'white',paddingTop:'20px'}}>
                    <span className="arrow-text-span">
                        BETTER &nbsp; HEALTH
                    </span>
                    <span id="arrow-div">
                        <Arrow
                                angle={0}
                                length={70}
                                style={{
                                width: '50px',
                                height:'400px'
                                }}
                            />
                    </span>

                    <span style={{position:'absolute',top:'5px',left:'20px',fontSize:'20px',fontWeight:'bold',whiteSpace:'nowrap',overflow:'hidden'}}>
                        FUNCTIONAL AND PHYSICAL HEALTH
                    </span>
                    <span style={{position:'absolute',top:'60px',left:'40px',fontSize:'16px',fontWeight:'bold',whiteSpace:'nowrap',overflow:'hidden'}}>
                        Joint Functional (ADL)
                    </span>
                    <span style={{position:'absolute',top:'60px',left:'320px',fontSize:'16px',fontWeight:'bold',whiteSpace:'nowrap',overflow:'hidden'}}>
                        Overall Physical Function (PCS)
                    </span>
                        

                    

                    </div>

                   
                    {
                        [65,80].map((text,key)=>
                            <div  style={{display:'inline-block', verticalAlign:'bottom',height:'250px',background:'',width:'250px',position:'relative'}}>
                                
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
                                    data={key==1?[{x: "a", y: 2}, {x: "b", y: 2}]:[{x: "a", y: 3}, {x: "b", y: 3}]}
                                />
                                
                                <VictoryArea
                                    data={key==0?[{x: "a", y: 3}, {x: "b", y: 3}]:[{x: "a", y: 4}, {x: "b", y: 4}]}
                                />
                            
                                </VictoryStack>
                                <div style={{position:'absolute',top:'20px',fontWeight:'bold',left:'0px',height:'30px',width:'50px',background:''}}>
                                <div style={{position:'relative',left:'0px'}}>
                                        100
                                    </div> 
                                    <div style={{position:'relative',top:'41px',left:'9px'}}>
                                        70
                                    </div> 
                                    <div style={{position:'relative',top:'85px',left:'9px'}}>
                                        40
                                    </div> 
                                    <div style={{position:'relative',top:'145px',left:'19px'}}>
                                        0
                                    </div> 
                                </div>
                                <div style={{position:'absolute',zIndex:'2',borderRadius:'50%',width:'11px',background:'#221E20',top:[text+'px'],left:'125px',height:'11px'}}>
                                </div>
                                <div style={{position:'absolute',zIndex:'2',borderRadius:'50%',width:'1px',background:'#221E20',top:[text+11+'px'],left:'130px',height:'10px'}}>
                                </div>
                                <div style={{color:'#000',fontSize:'14px',fontWeight:'bold',position:'absolute',zIndex:'2',top:[text+20+'px'],left:key==0?'122px':'122px'}}>
                                    {key==0?70:65}
                                </div>

                            </div>
                       
                       )
                   } 
                    
                </div>
                    
                    <div id="Evaluaion_Welcome_Next_Button_Div">
                        <Button id="Evaluaion_Welcome_Next_Button" variant="contained" onClick={()=>{this.context.history.push('./pdf')}}> View Patient Summary </Button>
                    </div>
                </div>
                
            </div> );
    }
}

Chart.contextType=MyContext;
export default Chart;