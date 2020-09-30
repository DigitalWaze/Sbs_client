import React, { Component } from 'react';
import ShowReport from './showReport';
import Selected from './selected';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = { View:"Report" ,      ActiveState:null,ActiveType:null,ActiveXray:null,XrayImage:null }
    }

    handleView = (View) =>
    {
        this.setState({View})
    }

    setActive = (ActiveState,ActiveType,ActiveXray,XrayImage) =>
    {
        console.log(ActiveState)
        this.setState({ActiveState,ActiveType,ActiveXray,XrayImage})
    }

    render() { 
        return ( 
        
        <div>
            {this.state.View==="Report" && <ShowReport handleView={(View)=>this.handleView(View)} handleState={(ActiveState,ActiveType,ActiveXray,XrayImage)=>this.setActive(ActiveState,ActiveType,ActiveXray,XrayImage)}  />}
            {this.state.View==="Selected" && <Selected Image={this.state.XrayImage} State={this.state.ActiveState} Type={this.state.ActiveType} Xray={this.state.ActiveXray} handleView={(View)=>this.handleView(View)} handleState={(ActiveState,ActiveType,ActiveXray,XrayImage)=>this.setActive(ActiveState,ActiveType,ActiveXray,XrayImage)} />}
        </div> );
    }
}
 
export default Report;