import React, { Component } from 'react';
import './chart.css'
// import BoneImage from '../assets/bone2_Bitmap.png'
import Button from '@material-ui/core/Button';
import MyContext from '../../helper/themeContext';
import { VictoryStack,VictoryArea } from 'victory';


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
                    <div style={{display:'block',background:'',height:'350px'}}>
                    {
                        ['1','2','3','4',].map((text,key)=>
                            <div style={{display:'inline-block',height:'350px',background:'',width:'250px'}}>
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