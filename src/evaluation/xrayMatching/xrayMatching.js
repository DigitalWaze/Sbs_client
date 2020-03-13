import React, { Component } from 'react';

import Introduction from './intro';
import EvalName from './evalName';
import Overview from './overview';
import Matching from './matching';







import './xrayMatching.css';
import MyContext from '../../helper/themeContext';


class XrayMatching extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            Evaluations:[],
            activeId:0,
            ActivePage:'Intro',
            ActiveType:null,
            ActiveXray:null,
            Next:false,
         }
    }

    componentWillMount()
    {
        this.setState({Evaluations:this.context.state.Evaluations})
    }

    handleEvalChange = (state,notes) =>
    {
        let Evaluations=this.state.Evaluations;
        let Evaluation=Evaluations[this.state.activeId];
        let type=Evaluation.Xrays.find(type => type.name===this.state.ActiveType)
        let Xray=type.xrays.find(xray => xray.name===this.state.ActiveXray)
        Xray.state=state;
        Xray.notes=notes;
    }

    handleIntroClick = () =>
    {
        this.setState({ActivePage:'EvalName'})
    }
    handleEvalClick = () =>
    {
        this.setState({ActivePage:'Overview'})
    }
    handleOverviewClick = (ActiveType,ActiveXray) =>
    {
        this.setState({ActivePage:'Matching',ActiveType,ActiveXray})
    }
    handleMatchingClick = (state,notes) =>
    {
        let Evaluations=this.state.Evaluations;
        let Evaluation=Evaluations[this.state.activeId];
        let type=Evaluation.Xrays.find(type => type.name===this.state.ActiveType)
        let Xray=type.xrays.find(xray => xray.name===this.state.ActiveXray)
        let XrayIndex=type.xrays.findIndex(xray => xray.name===this.state.ActiveXray)
        Xray.state=state;
        Xray.notes=notes;
        Xray.isDone=true;

        if(type.xrays[XrayIndex+1] && type.xrays[XrayIndex+1]!==null)
        {
            type.xrays[XrayIndex+1].enable=true;
        }
        else 
        {
            type.isDone=true;
            let typeIndex=Evaluation.Xrays.findIndex(type => type.name===this.state.ActiveType)
            if( Evaluation.Xrays[typeIndex+1] &&  Evaluation.Xrays[typeIndex+1]!==null)
            {
                Evaluation.Xrays[typeIndex+1].enable=true;
                Evaluation.Xrays[typeIndex+1].xrays[0].enable=true;
            }

            else {this.setState({Next:true})}
            

        }
        // console.log(Evaluation);

        this.setState({ActivePage:'Overview'})
    }
    handleNextClick = () =>
    {
        this.context.updateValue('Evaluations',this.state.Evaluations)
        this.context.history.push('./report')
    }

    render() { 
        return ( 
            <div>
                {
                    this.state.ActivePage==='Intro' && <Introduction handleClick={this.handleIntroClick}/>
                }
                {
                    this.state.ActivePage==='EvalName' && <EvalName eval={this.state.Evaluations[this.state.activeId]} handleClick={this.handleEvalClick}/>
                }
                {
                    this.state.ActivePage==='Overview' && <Overview Next={this.state.Next} Evaluation={this.state.Evaluations[this.state.activeId]} handleClick={(ActiveType,ActiveXray)=>this.handleOverviewClick(ActiveType,ActiveXray)} handleNextClick={this.handleNextClick}/>
                }
                {
                    this.state.ActivePage==='Matching' && <Matching  ActiveType={this.state.ActiveType} ActiveXray={this.state.ActiveXray} handleClick={(state,notes)=>this.handleMatchingClick(state,notes)}/>
                }
               

            </div>
        );
    }
}
XrayMatching.contextType=MyContext;
export default XrayMatching;