import React, { Component } from 'react';
import MyContext from '../../helper/themeContext';
import PatientReportManual from './manual/patientReportManual';
import FormType from './ProEntry/formType';
import ProGate from './ProGate/ProGate';
import ProReqInfo from './ProReqInfo/ProReqInfo';


const PROGatePage=0;
const PROReqInfoPage=1;
const ProEntryPage=2;
const ProManual=3;


class PRO extends Component {
    constructor(props) {
        super(props);
        this.state = { page:0 }
    }

    componentDidMount()
    {
        if(parseInt(this.context.state.evaluation_stage)>2)
        {
            this.context.history.push('./form-type')
        }
    }

    handlePageChange = (page) =>
    {
        this.setState({page})
    }   

    getPage = () =>
    {
        switch(this.state.page)
        {
            case 0: return <ProGate handleBackClick = {()=> this.context.history.push('./patient-profile')} handleYesClick={()=>this.handlePageChange(ProEntryPage)} handleNoClick={()=>this.handlePageChange(PROReqInfoPage)} />;
            case 1: return <ProReqInfo handleBackClick={()=>this.handlePageChange(PROGatePage)} />;
            // case 2: return <FormType handle={this.handleUploadClick}  Xrays={this.state.Xrays} handleClick={(id)=>this.handleOverviewClick(id)} uploadButton={this.state.uploadButton} />;
            // case 3: return <PatientReportManual  appendFile={(file,name,id)=>this.appendFile(file,name,id)} Xray={this.state.Xrays[this.state.activeId]} />
            default: return <div> Unreachable step</div>;
        }

    }

    render() { 
        return ( this.getPage()  );
    }
}


PRO.contextType=MyContext; 
export default PRO;