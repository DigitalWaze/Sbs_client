import React, { Component } from 'react';
import MyContext from '../../../helper/themeContext';

import './patientReport.css';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import PostData from '../../../Fetch/postData2';
import { SemipolarLoading } from 'react-loadingg';

class PatientReport extends Component {
    constructor(props) {
        super(props);
        this.state = { page:0,form:null,loading:true }
    }

    componentDidMount()
    {
        if(this.context.state.form)
        {
            console.log('mounter',this.context.state.form)
            this.setState({form:this.context.state.form,loading:false})
        }
    }

    // componentDidUpdate()
    // {
    //    if(this.state.form==null)
    //    {
    //        if(this.context.state.form)
    //         {
    //             this.setState({form:this.context.state.form})
    //         }
    //    }
    // }

    handleChange = (e) =>
    {
        this.setState({[e.target.name]:e.target.value})
    }

    handleClick = () =>
    {
        // this.context.updateValue('Pro',true)

        // this.context.history.push('./forms')
        console.log(this.state.form);
    }

    changeAnswer(state,value)
    {
        let form=this.state.form;
        form.find((question)=>question.name==state).pro_severity_id=value;
        form.find((question)=>question.name==state).visitor_id=this.context.state.report_id;
        // console.log(thisone)
        // console.log(form)
        // this.setState({[state]:value})
    }

    handlePageChange = () =>
    {
        this.setState({page:this.state.page+1})
    }

    getPage = () =>
    {
        switch(this.state.page)
        {
            case 0: return <Page1 Answer1={this.state.form.find((question)=>question.name=="Question1").pro_severity_id} handlePageChange={this.handlePageChange} changeAnswer={(state,value)=>this.changeAnswer(state,value)} />;
            case 1: return <Page2 Answer2={this.state.form.find((question)=>question.name=="Question2").pro_severity_id} Answer3={this.state.form.find((question)=>question.name=="Question3").pro_severity_id} Answer4={this.state.form.find((question)=>question.name=="Question4").pro_severity_id} Answer5={this.state.form.find((question)=>question.name=="Question5").pro_severity_id} handlePageChange={this.handlePageChange} changeAnswer={(state,value)=>this.changeAnswer(state,value)}/>;
            case 2: return <Page3 Answer6={this.state.form.find((question)=>question.name=="Question6").pro_severity_id} Answer7={this.state.form.find((question)=>question.name=="Question7").pro_severity_id}handlePageChange={this.next} changeAnswer={(state,value)=>this.changeAnswer(state,value)}/>;
            default: return <div> Unreachable step</div>;
        }
    }

    next = () =>
    {
        console.log(this.state.form)
        if(this.context.state.old==true && parseInt(this.context.state.evaluation_stage)>2)
        {
            this.context.multipleUpdateValueWithHistory([{key:'Pro',value:true}],'./forms')
        }
        
        else
        {
            this.setState({loading:true})
            PostData(this.context.baseUrl+'/api/v1/submit/answers',201,this.state.form,this.context.state.token,this.setMe)
        }
        // this.context.multipleUpdateValueWithHistory([{key:'Pro',value:true},{key:'form',value:this.state.form}],'./forms')
        //updateContext and call Api
    }

    setMe = (response) =>
    {
        if(response.length>0)
        {
            this.setState({loading:false})
            this.context.updateSession();
            this.context.setCookie('evaluation_stage',3,30);
            this.context.multipleUpdateValueWithHistory([{key:'Pro',value:true},{key:'form',value:this.state.form}],'./forms')

        }
    }
    render() { 

        return ( 
            //if this.state.form does not exist then loader
            <div id="Evaluaion_PatientReport_Main_Div">
                 {/* {console.log(this.context.state)} */}
                {this.state.loading==true?<SemipolarLoading size={'large'}  color={'#b4ec51'}/>:this.getPage()}
            </div>
        
        );
    }
}
PatientReport.contextType=MyContext;
export default PatientReport;