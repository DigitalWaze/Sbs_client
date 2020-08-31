import React, { Component } from 'react';
import MyContext from '../../../helper/themeContext';

import './patientReport.css';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import PostData from '../../../Fetch/postData2';
import { SemipolarLoading } from 'react-loadingg';
import Page1Left from './leftPages/page1';
import Page2Left from './leftPages/page2';
import Page3Left from './leftPages/page3';
import RightIntroPage from './rightIntroPage';
import LeftIntroPage from './leftPages/introPage';
import Forms from '../../form/formsNew';

class PatientReportManual extends Component {
    constructor(props) {
        super(props);
        this.state = { page:0,form:null,loading:true,tempLeft:false }
    }

    componentWillMount()
    {
        if(this.context.state.Eval.length>1)
        {
            // this.setState({tempLeft:true})
            this.setState({totalLeft:2,active:null,formLoad:{total:2,active:this.context.state.joint_id,firstDone:false} })

        }

        else
        {
            // this.setState({tempLeft:true})
            this.setState({totalLeft:1,active:null,formLoad:{total:1,active:this.context.state.joint_id,firstDone:false}} )
        }
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
        // let joint_id=null;
        // if(this.state.totalLeft==2)
        // {
        //     joint_id=this.context.state.joint_id;
        // }

        // else joint_id=this.context.state.Eval.find(eva.joint_id.toString()!=this.context.state.joint_id.toString()).jont_id;
       
        console.log(this.state.active)
        let form=this.state.form;
        form.find((question)=>question.name==state && question.joint_id.toString()==this.state.active.toString()).pro_severity_id=value;
        form.find((question)=>question.name==state && question.joint_id.toString()==this.state.active.toString()).visitor_id=this.context.state.report_id;
        // form.find((question)=>question.name==state)['joint_id']=this.context.state.joint_id;

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
            case 0: return <RightIntroPage handleBack = {this.handleBack0} handlePageChange={this.handlePageChange} />;
            case 1: return <Page1 handleBack = {this.handleBack1} Answer1={this.state.form.find((question)=>question.name=="Question1" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} handlePageChange={this.handlePageChange} changeAnswer={(state,value)=>this.changeAnswer(state,value)} />;
            case 2: return <Page2 handleBack = {this.handleBack2} Answer2={this.state.form.find((question)=>question.name=="Question2" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} Answer3={this.state.form.find((question)=>question.name=="Question3" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} Answer4={this.state.form.find((question)=>question.name=="Question4" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} Answer5={this.state.form.find((question)=>question.name=="Question5" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} handlePageChange={this.handlePageChange} changeAnswer={(state,value)=>this.changeAnswer(state,value)}/>;
            case 3: return <Page3 handleBack = {this.handleBack3} Answer6={this.state.form.find((question)=>question.name=="Question6" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} Answer7={this.state.form.find((question)=>question.name=="Question7" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} handlePageChange={this.next} changeAnswer={(state,value)=>this.changeAnswer(state,value)}/>;
            default: return <div> Unreachable step</div>;
        }
    }

    getPageLeft = () =>
    {
        switch(this.state.page)
        {
            case 0: return <LeftIntroPage handleBack = {this.handleBack0} handlePageChange={this.handlePageChange} />;
            case 1: return <Page1Left handleBack = {this.handleBack1} Answer1={this.state.form.find((question)=>question.name=="Question1" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} handlePageChange={this.handlePageChange} changeAnswer={(state,value)=>this.changeAnswer(state,value)} />;
            case 2: return <Page2Left handleBack = {this.handleBack2} Answer2={this.state.form.find((question)=>question.name=="Question2" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} Answer3={this.state.form.find((question)=>question.name=="Question3" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} Answer4={this.state.form.find((question)=>question.name=="Question4" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} Answer5={this.state.form.find((question)=>question.name=="Question5" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} handlePageChange={this.handlePageChange}  changeAnswer={(state,value)=>this.changeAnswer(state,value)}/>;
            case 3: return <Page3Left handleBack = {this.handleBack3} Answer6={this.state.form.find((question)=>question.name=="Question6" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} Answer7={this.state.form.find((question)=>question.name=="Question7" && question.joint_id.toString()==this.state.active.toString()).pro_severity_id} handlePageChange={this.next}  changeAnswer={(state,value)=>this.changeAnswer(state,value)}/>;
            default: return <div> Unreachable step</div>;
        }
    }

    handleBack0 = () =>
    {
        this.context.history.push('./forms')
    }

    handleBack1 = () =>
    {
        this.setState({page:0})
    }

    handleBack3 = () =>
    {
        this.setState({page:2})
    }
    handleBack2 = () =>
    {
        this.setState({page:1})
    }

    next = () =>
    {
        console.log(this.state.form)

        if(this.state.totalLeft==2 && this.state.active !=null)
        {
            let formLoad=this.state.formLoad;
            formLoad.firstDone=true;
            this.setState({active:null,formLoad})
        }


        else if(this.state.totalLeft==2 && this.state.active == null)
        {
            let joint_id=null;
            if(this.context.state.joint_id=='3')
            {
                joint_id='4'
            }

            else  joint_id='3'
            this.setState({totalLeft:1,page:0,active:joint_id})
        }


        else if(this.context.state.old==true && parseInt(this.context.state.evaluation_stage)>2)
        {
            // this.context.multipleUpdateValueWithHistory([{key:'Pro',value:true}],'./forms')
            this.context.multipleUpdateValue([{key:'Pro',value:true}]);
            this.setState({active:null})
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
            this.context.updateSession();
            this.context.setCookie('evaluation_stage',3,30);
            // this.context.multipleUpdateValueWithHistory([{key:'Pro',value:true},{key:'form',value:this.state.form}],'./forms')
            this.context.multipleUpdateValue([{key:'Pro',value:true},{key:'form',value:this.state.form}]);
            this.setState({loading:false,active:null})



        }
    }

    setActive = (id) =>
    {
        this.setState({active:id})
    }

    render() { 

        return ( 
            //if this.state.form does not exist then loader
            <div id="Evaluaion_PatientReport_Main_Div">
                 {/* {console.log(this.context.state)} */}
                {this.state.loading==true?
                    <SemipolarLoading size={'large'}  color={'#b4ec51'}/>
                    
                : this.state.active===null? <Forms formLoad={this.state.formLoad} next={this.next} setActive = { (id) =>this.setActive(id)} />
                : this.state.active.toString()=='3'?
                    this.getPage():this.getPageLeft()
                    }
            </div>
        
        );
    }
}
PatientReportManual.contextType=MyContext;
export default PatientReportManual;