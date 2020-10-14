import React, { Component } from 'react';
import { VictoryStack,VictoryArea } from 'victory';
import Arrow from '@elsdoerfer/react-arrow'
import Button from '@material-ui/core/Button';
import MyContext from '../../helper/themeContext';
import './chartShow.css';

import FooterImage from '../../assets/charts-footer-image.PNG'

class ChartShow extends Component {
    constructor(props) {
        super(props);
        this.state = { date:'0'  }
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
        const joint=this.props.JointMapObject;
        console.log(joint);
        return ( 
            <div id="Evaluaion_Chart_Main_Div">
                <div  id="Evaluaion_Chart_Content_Wrapper">
                    <div id="Evaluaion_Chart_Heading1_Div">
                        <span style={{fontWeight:'bold'}}> PRO Report Card: </span> {joint.joint_id.toString()==="3"?'Right Knee':'Left Knee'}
                    </div>
                   
                    <div id="Evaluaion_Chart_Text_Div">
                        Date of Pro Intake: {this.state.date}
                    </div>
                   
                    <div style={{display:'inline-block',width:'fit-content',marginRight:'20px',height:'350px',background:'white'}}>
                        <div  style={{display:'inline-block',height:'330px',verticalAlign:'top',position:'relative',background:'white',paddingTop:'20px'}}>
                            <span className="arrow-text-span">
                                BETTER &nbsp; JOINT &nbsp; HEALTH
                            </span>
                            <span id="arrow-div">
                                <Arrow
                                        angle={0}
                                        length={90}
                                        style={{
                                        width: '50px',
                                        height:'380px'
                                        }}
                                    />
                            </span>

                            {/* <span style={{position:'absolute',top:'5px',left:'20px',fontSize:'20px',fontWeight:'bold',whiteSpace:'nowrap',overflow:'hidden'}}>
                                PAIN
                            </span> */}
                            <span className="chart-head-1">
                                Overall Knee Health
                            </span>
                            <span className="chart-head-2">
                            Pain
                            </span>
                            <span className="chart-head-3">
                            Function
                            </span>
                            <span className="chart-head-4">
                            Stiffness
                            </span>
                        
                        </div>
                        {
                            [joint.OverallInterval,joint.PainInterval,joint.FunctionInterval,joint.StiffInterval].map((text,key)=>
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
                                    <div className="chart-notation-dot" style={{bottom:[text*1.93+23+'px']}}>
                                    </div>
                                    <div className="chart-notation-line" style={{bottom:[text*1.93+12+'px']}}>
                                    </div>
                                    <div className="chart-notation-text" style={{bottom:[text*1.93-2+'px']}}>
                                        {text}
                                    </div>

                                </div>
                        
                            )
                        } 
                        
                    </div>

                    <div id="Evaluaion_Chart_Footer_Div">
                        <img src={FooterImage} alt="chart-definition-footer"/>
                    </div>
                    
                    <div id="Evaluaion_Welcome_Next_Button_Div">
                        <Button id="Evaluaion_Welcome_Next_Button" variant="contained" onClick={this.props.next}> {this.props.totalLeft==2?joint.joint_id.toString()==='3'?'View Left PRO Report Card':"View Right PRO Report Card":"Next"} </Button>
                    </div>
                </div>
                
            </div> );
    }
}
 
ChartShow.contextType=MyContext;
export default ChartShow;