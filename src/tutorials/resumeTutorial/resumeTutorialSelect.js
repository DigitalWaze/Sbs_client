import React, { Component } from 'react';

import './resumeTutorial.css';
import { Button } from '@material-ui/core';
import { SemipolarLoading } from 'react-loadingg';
import MyContext from '../../helper/themeContext';

class ResumeTutorialSelect extends Component {
    constructor(props) {
        super(props);
        this.state = { loading:false }
    }

    handleRecover = () =>
    {
        let page=this.context.getCookie('tutorial-'+this.context.state.user_id);
        if(page==1){this.context.history.push('/tutorials/sbs/video')        }
        else if(page==2){ this.context.history.push('/tutorials/sbs/video2')}
        else if(page==3){ this.context.history.push('/tutorials/knee-Arthiritis/welcome')}
        else if(page==4){ this.context.history.push('/tutorials/knee-Arthiritis/overview') }
        else if(page==5){ this.context.history.push('/tutorials/knee-Arthiritis/knee-degeneration-and-arthritis-2')}
        else if(page==6){ this.context.history.push('/tutorials/knee-Arthiritis/knee-degeneration-and-arthritis')}
        else if(page==7){ this.context.history.push('/tutorials/knee-Arthiritis/compartments-of-the-knee')}
        else if(page==8){ this.context.history.push('/tutorials/knee-Arthiritis/viewing-degeneration-with-x-rays-copy')}
        else if(page==9){ this.context.history.push('/tutorials/knee-Arthiritis/learn-about-the-medial-and-lateral-compartments-of-the-knee')}
        else if(page==10){ this.context.history.push('/tutorials/knee-Arthiritis/viewing-degeneration-with-x-rays-the-kneecap-compartment')}
        else if(page==11){ this.context.history.push('/tutorials/knee-Arthiritis/compartments-of-the-knee-2')}
        else if(page==12){ this.context.history.push('/tutorials/knee-Arthiritis/evaluating-the-medial-and-lateral-compartments-v2')}
        else if(page==13){ this.context.history.push('/tutorials/knee-Arthiritis/evaluating-the-kneecap-compartment')}
        else if(page==14){ this.context.history.push('/tutorials/knee-Arthiritis/lateral-view')}
        else if(page==15){ this.context.history.push('/tutorials/knee-Arthiritis/obtaining-the-correct-x-rays')}
        else if(page==16){ this.context.history.push('/tutorials/knee-Arthiritis/summary-of-x-ray-views-necessary-based-on-patients-symptoms')}
        else if(page==17){ this.context.history.push('/tutorials/knee-Arthiritis/what-x-rays-would-you-request')}
        else if(page==18){ this.context.history.push('/tutorials/knee-Arthiritis/evaluating-knee-degeneration-with-x-rays')}
        else if(page==19){ this.context.history.push('/tutorials/knee-Arthiritis/how-to-identify-joint-space-narrowing-and-degeneration')}
        else if(page==20){ this.context.history.push('/tutorials/knee-Arthiritis/where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments')}
        else if(page==21){ this.context.history.push('/tutorials/knee-Arthiritis/where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments-2')}
        else if(page==22){ this.context.history.push('/tutorials/knee-Arthiritis/levels-of-joint-space-narrowing-degeneration')}
        else if(page==23){ this.context.history.push('/tutorials/knee-Arthiritis/joint-space-narrowing-medial-compartment')}
        else if(page==24){ this.context.history.push('/tutorials/knee-Arthiritis/joint-space-narrowing-lateral-compartment')}
        else if(page==25){ this.context.history.push('/tutorials/knee-Arthiritis/where-is-the-joint-space-for-the-kneecap-compartment')}
        else if(page==26){ this.context.history.push('/tutorials/knee-Arthiritis/you-must-look-at-the-joint-space-on-both-sides-of-the-kneecap')}
        else if(page==27){ this.context.history.push('/tutorials/knee-Arthiritis/joint-space-narrowing-kneecap-compartment')}
        else if(page==28){ this.context.history.push('/tutorials/knee-Arthiritis/x-ray-matching-a-tool-to-determine-levels-of-degeneration')}
        else if(page==29){ this.context.history.push('/tutorials/knee-Arthiritis/x-ray-matching-and-levels-of-degeneration')}
        else if(page==30){ this.context.history.push('/tutorials/knee-Arthiritis/x-ray-matching-moderate-selected')}
        else if(page==31){ this.context.history.push('/tutorials/knee-Arthiritis/congrats')}
        else if(page==32){ this.context.history.push('/tutorials/matching-education/welcome')}
        else if(page==33){ this.context.history.push('/tutorials/matching-education/video')}
        else if(page==34){ this.context.history.push('/tutorials/matching-education/lets-get-started')}
        else if(page==35){ this.context.history.push('/tutorials/matching-education/matching-tutorial')}
        else if(page==36){ this.context.history.push('/tutorials/matching-education/video2')}
        else if(page==37){ this.context.history.push('/tutorials/matching-education/report')}
        else if(page==38){ this.context.history.push('/tutorials/matching-training/welcome')}
        else if(page==39){ this.context.history.push('/tutorials/matching-training/matching-tutorial')}
        else if(page==40){ this.context.history.push('/tutorials/matching-training/congratulations')}
        else if(page==41){ this.context.history.push('/evaluation/welcome')}

        // else if(page==33){ this.context.history.push('/tutorials/knee-Arthiritis/evaluating-the-kneecap-compartment')}

    }


    handleRefresh = () =>
    {
        // this.setState({loading:true})
        // GetData(this.context.baseUrl+'./api/v1/delete/report',200,this.context.state.token,this.setMeTwo)

        this.context.setCookie('tutorial-'+this.context.state.user_id,'');
        this.props.history.push('/tutorials/sbs/welcome')


        // this.context.discardLeft();
        // this.props.history.push('/evaluation/welcome')
    }

  
    
    
    render() { 
        return (
            
        <div className="Evaluation_ResumeEvaluation_Main_Div">
            { this.state.loading==true?
                <SemipolarLoading size={"large"} color={'#b4ec51'}/>:
                <div className="Evaluation_ResumeEvaluation_Content_Wrapper">
                    {/* <div className="Evaluation_ResumeEvaluation_Heading2_Div">
                        You Have an Ongoing Evaluation
                    </div> */}
                    <div className="Evaluation_ResumeEvaluation_Text_Div">
                        Would you like to resume the education
                        where you left or start over?
                    </div>

                    <div className="Evaluation_ResumeEvaluation_Button_Div">
                        <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={this.handleRecover}> Resume Where I Left Off </Button>
                    </div>
                    <div className="Evaluation_ResumeEvaluation_Button_Div">
                        <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={this.handleRefresh}> Start Over </Button>
                    </div>

                </div>
            }


        </div> );
    }
}
ResumeTutorialSelect.contextType=MyContext;
export default ResumeTutorialSelect;