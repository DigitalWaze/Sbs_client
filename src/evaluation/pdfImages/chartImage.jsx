import React, { Component } from 'react';
import MyContext from '../../helper/themeContext';
import { VictoryStack,VictoryArea } from 'victory';
import Arrow from '@elsdoerfer/react-arrow'
import FooterImage from '../../assets/charts-pdf-footer-image.PNG'
import FooterImage1 from '../../assets/charts-pdf-footer-image1.PNG'
import FooterImage2 from '../../assets/charts-pdf-footer-image2.PNG'
import FooterImage3 from '../../assets/charts-pdf-footer-image3.PNG'
import ArrowImage from '../../assets/chart-pdf-arrow.jpg'

import './chartImage.css'

let OverAll=
    [100,91.975,84.600,79.914,76.332,73.342,70.704,68.284,65.994,63.776,61.583,
     59.381,57.140,54.840,52.465,50.012,47.487,44.905,42.281,39.625,36.931,
     34.174,31.307,28.251,24.875,20.941,15.939,8.291,0.000        ]


class ChartImage extends Component {
    constructor(props) {
        super(props);
        this.state = { JointMapArray:[] }
    }

    UNSAFE_componentWillMount()
    {
        let JointMapArray;
        
        let SumPain=0;
        let SumStiff=0;
        let SumFunction=0;

        let Question1Answer = parseInt(this.context.state.form.find(ques => ques.question_id.toString()=="1" && ques.joint_id.toString()===this.context.state.Eval[0].joint_id.toString()).pro_severity_id);
        if(Question1Answer.toString()!=="NaN")
        {
            SumStiff=Question1Answer - 1;
        }

        else SumStiff=0;

        this.context.state.form.filter(ques=> { if( (parseInt(ques.question_id) > 1 && parseInt(ques.question_id) < 6) && ques.joint_id.toString()===this.context.state.Eval[0].joint_id.toString() )  {  if( parseInt(ques.pro_severity_id).toString()!="NaN"){ SumPain=SumPain+parseInt(ques.pro_severity_id) -1 } } });
        this.context.state.form.filter(ques=> { if( (parseInt(ques.question_id) > 5 && parseInt(ques.question_id) < 8) && ques.joint_id.toString()===this.context.state.Eval[0].joint_id.toString() ){  if( parseInt(ques.pro_severity_id).toString()!="NaN"){ SumFunction=SumFunction+parseInt(ques.pro_severity_id) -1} } });
 

        let PainInterval = Math.round(( (1 - SumPain/16) *100) * 10) /10;
        let StiffInterval =  Math.round(((1 - SumStiff/4) *100) * 10) /10;
        let FunctionInterval = Math.round( ( (1 - SumFunction/8) *100 ) * 10)/10;
        let OverallInterval = Math.round( ( OverAll[SumPain+SumStiff+SumFunction]) * 10)/10; 

        JointMapArray=[{joint_id:this.context.state.Eval[0].joint_id,PainInterval,StiffInterval,FunctionInterval,OverallInterval}];


        console.log('PainInterval: ',PainInterval)
        console.log('StiffInterval: ',StiffInterval)
        console.log('FunctionInterval: ',FunctionInterval)
        console.log('OverallInterval: ',OverallInterval)

        let priorityJoin = this.context.state.Eval[0].joint_id;
        for(let i=1;i<this.context.state.Eval.length;i++)
        {
            let TempJointMapArray=[];
            let NewSumPain=0;
            let NewSumStiff=0;
            let NewSumFunction=0;

            let NewQuestion1Answer = parseInt(this.context.state.form.find(ques => ques.question_id.toString()=="1" && ques.joint_id.toString()===this.context.state.Eval[i].joint_id.toString()).pro_severity_id);
            if(NewQuestion1Answer.toString()!=="NaN")
            {
                NewSumStiff=NewQuestion1Answer - 1;
            }

            else NewSumStiff=0;

            this.context.state.form.filter(ques=> { if( (parseInt(ques.question_id) > 1 && parseInt(ques.question_id) < 6) && ques.joint_id.toString()===this.context.state.Eval[i].joint_id.toString() )  {  if( parseInt(ques.pro_severity_id).toString()!="NaN"){ NewSumPain=NewSumPain+parseInt(ques.pro_severity_id) - 1 } } });
            this.context.state.form.filter(ques=> { if( (parseInt(ques.question_id) > 5 && parseInt(ques.question_id) < 8) && ques.joint_id.toString()===this.context.state.Eval[i].joint_id.toString() )  {  if( parseInt(ques.pro_severity_id).toString()!="NaN"){ NewSumFunction=NewSumFunction+parseInt(ques.pro_severity_id) - 1 } } });
 

            let NewPainInterval =  Math.round( ((1 - NewSumPain/16) *100 ) *10 ) / 10;
            let NewStiffInterval =  Math.round( ((1 - NewSumStiff/4) *100 ) * 10)/10;
            let NewFunctionInterval = Math.round( ((1 - NewSumFunction/8) *100) * 10) /10;
            let NewOverallInterval = Math.round( (OverAll[NewSumPain+NewSumStiff+NewSumFunction]) *10)/10; 
            let NewJointObject={joint_id:this.context.state.Eval[i].joint_id,PainInterval:NewPainInterval,StiffInterval:NewStiffInterval,FunctionInterval:NewFunctionInterval,OverallInterval:NewOverallInterval};
            if(this.context.state.Eval[i].priority_id<this.context.state.Eval.find(evalu=> evalu.joint_id==priorityJoin).priority_id)
            {

                TempJointMapArray.push(NewJointObject,...JointMapArray);
                JointMapArray=TempJointMapArray;
            }
            else JointMapArray.push(NewJointObject);
        }

        console.log(JointMapArray)
        this.setState({JointMapArray})
    }

    
    render() { 
        return ( 
        <div className="chart-image-wrapper">

            <div className="chart-pdf-header">
                Patient Reported Profile
            </div>

            <div className="chart-pdf-patient-header">
                {this.context.state.patient.name}  <span className="chart-patient-header-middle"> Measure Date : {this.context.state.patient.date} </span>
                <span className="chart-patient-header-right"> ID: {this.context.state.patient_id} </span>
            </div>
        
            {this.state.JointMapArray.map((joint,id) =>
                <div className="chart-joint-outer-wrapper" style={{transform:`scale(0.7) translate(-200px,${((id+1)*-90)- ((id>0)?76:0)}px)`}}>
                    <div className="chart-joint-outer-text" > 
                        {joint.joint_id.toString()==="3"?"RIGHT KNEE":"LEFT KNEE"}
                    </div>
                    <div className="chart-joint-inner-wrapper" style={{width:'1050px'}}>
                    <div  style={{display:'inline-block',height:'330px',verticalAlign:'top',position:'relative',background:'white',paddingTop:'20px'}}>
                    <span className="arrow-text-span-image">
                        BETTER &nbsp; JOINT &nbsp; HEALTH
                    </span>
                    <span id="arrow-image-div">
                        {/* <Arrow
                                angle={0}
                                length={90}
                                style={{
                                width: '50px',
                                height:'375px'
                                }}
                            /> */}
                            <img src={ArrowImage} id="arrow-image-tag" />
                    </span>

                    
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
                            <div  style={{display:'inline-block',marginLeft:key===0?'30px':'',verticalAlign:'bottom',height:'250px',background:'',width:'250px',position:'relative'}}>
                                
                                <VictoryStack
                                    animate={{
                                        duration: 0,
                                        onLoad: { duration: 0 }
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
                                    <div style={{position:'relative',left:'0px',top:'0px'}}>
                                        100
                                    </div> 
                                    <div style={{position:'relative',top:'43.5px',left:'9px'}}>
                                        70
                                    </div> 
                                    <div style={{position:'relative',top:'87px',left:'9px'}}>
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
            </div>)}

            <div className="chart-pdf-image-footer-wrapper" style={{transform:`translateY( ${-116 * this.state.JointMapArray.length}px)`}}>
                {/* <img src={FooterImage} alt="Chart - Definitions"/> */}
                <img src={FooterImage3} alt="Chart - Definitions" className="chart-pdf-image-footer-1"/>
                <img src={FooterImage1} alt="Chart - Definitions"/>
                
            </div>
        </div>
    );
    }
}
 
ChartImage.contextType=MyContext;
export default ChartImage;