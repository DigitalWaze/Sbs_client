import React, { Component } from 'react';

import MyContext from '../../helper/themeContext';

import './uploadXray.css';

import Xray1 from '../../assets/xray1.jpeg';
import Xray2 from '../../assets/xray2.jpeg';
import Xray3 from '../../assets/xray3.jpeg';
import Xray4 from '../../assets/xray4.png';
import OverviewBox from './overview';
import UploadBox from './upload';

class UploadXray extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            OverView:true,
            activeId:0,
            Xrays:[
                {id:0,name:'PA Standing Bilateral Flexion',isDone:false,image:null,thumbnail:Xray1,enable:true},
                {id:0,name:'PA Standing Bilateral Non-Flexion',isDone:false,image:null,thumbnail:Xray2,enable:false},
                {id:0,name:'Right Kneecap',isDone:false,image:null,thumbnail:Xray3,enable:false},
                {id:0,name:'Right Lateral',isDone:false,image:null,thumbnail:Xray4,enable:false},

            ] 
        }
    }

    handleOverviewClick = (id) =>
    {
        this.setState({OverView:false,activeId:id})
    }

    handleUploadClick = () =>
    {
        if(this.state.activeId===this.state.Xrays.length-1)
        {
            //all done
            alert('all done')
            this.context.updateValue('UXray',true)
            this.context.history.push('./patient-profile')
        }

        else
        {
            let Xrays=this.state.Xrays;
            Xrays[this.state.activeId].isDone=true;
            Xrays[this.state.activeId+1].enable=true;
            this.setState({Xrays,OverView:true})
        }
        
    }

    render() { 
        return ( 
        
            <div id="Evaluaion_UploadXray_Main_Div">
            <div  id="Evaluaion_UploadXray_Content1_Wrapper">
                <div id="Evaluaion_UploadXray_Heading1_Div">
                    Upload X-rays
                </div>
                {
                    this.state.OverView===true?
                        <OverviewBox Xrays={this.state.Xrays} handleClick={(id)=>this.handleOverviewClick(id)}/>
                    :
                        <UploadBox Xray={this.state.Xrays[this.state.activeId]} handleClick={this.handleUploadClick}/>


                }
            </div>

            

        </div> );
    }
}
UploadXray.contextType=MyContext;
export default UploadXray;