import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import GetAuth from '../Fetch/getAuth';


import './login.css';
import MyContext from '../helper/themeContext';
import SemipolarLoading from 'react-loadingg/lib/SemipolarLoading';
import Bone1Image from '../assets/bone1_Bitmap.png'


const style = theme => ({

    textfield:{
        height:'60px',
        fontSize:'35px',
        // padding:'10px,',
        width:'auto',
        maxWidth:'350px',
        // border:'1px white solid'
    },
    field:{
        border:'1px solid white !important',
    }
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { userid:"",password:"" ,loading:false,error:false }
    }

     listener = event => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
          this.handleLogin();
          // callMyFunction();
        }
      };

    componentDidMount()
    {
        
          document.addEventListener("keydown", this.listener);
         
    }

    componentWillUnmount()
    {
       
        document.removeEventListener("keydown", this.listener);
        
    }

    handleChange= (e) =>
    {
        this.setState({[e.target.id]:e.target.value,error:false})
    }

    handleLogin = () =>
    {
        let req={
            email:this.state.userid,
            password:this.state.password
        }
        this.setState({loading:true})
        GetAuth(this.context.baseUrl+'/api/v1/user/login',200,req,this.loggedMe)
    }

    loggedMe = (response) =>
    {
        console.log(response);
        if(response.id!==null && response.id)
        {
            let isTutorialCompleted=null;
            if(response.isTutorialCompleted==1)
            {
                isTutorialCompleted=true;
            }
            this.context.updateValue('token',response.token || null);
            this.context.updateValue('type',response.type || null);
            this.context.updateValue('user_id',response.id || null);
            this.context.updateValue('user_email',response.email || null);
            this.context.updateValue('user_type',response.user_type || null);
            this.context.updateValue('isTutorialCompleted',isTutorialCompleted || null);
            this.context.updateValue('organization',response.organization);
            this.context.updateValue('old',false);
            let tutorial_rem=this.context.getCookie('tutorial-'+response.id);
            this.context.updateValue('tutorial',tutorial_rem);
            this.context.updateValue('loggedIn',true);

            this.context.updateSession();
            

            let temp_stage_id=null;
            if(response.state)
            {
                if(response.state.length>0)
                {
                    if(response.state[0].stage.id>0)
                    {
                        let temp_patient_id=response.state[0].visitor.patient_id;
                        let temp_report_id=response.state[0].visitor.id;
                        temp_stage_id=response.state[0].stage.id;
                        this.context.setCookie('evaluation_stage',temp_stage_id,30);
                        this.context.setCookie('temp_report_id',temp_report_id,30);
                        this.context.setCookie('temp_patient_id',temp_patient_id,30);

                        this.context.multipleUpdateValue([{key:'evaluation_stage',value:temp_stage_id},{key:'temp_report_id',value:temp_report_id},{key:'temp_patient_id',value:temp_patient_id}])
                        // this.context.history.push('/evaluation/resume-evaluation');
                    }
                    
                }
                
            }


            // ------------------ redirection after loading previous session----------------------------------

                //----------- start --------- new setup after login session from cookie

                    this.context.history.push("/home");   // ------ home will cater resume and tutorials
            
                //----------- end --------- new setup after login session from cookie

            //----------- start --------- old setup after login session from cookie

            // if(tutorial_rem!="" && tutorial_rem!=" " && tutorial_rem!=null && tutorial_rem && tutorial_rem!=41 )
            // {
            //   this.context.history.push("/tutorials/resume-tutorial");
            // }

            // else if(temp_stage_id!=null)
            // {
            //     this.context.history.push('/evaluation/resume-evaluation');
            // }
            
            // else if(tutorial_rem==41)
            // {
            //     this.context.history.push('/tutorials/resume-tutorial');
            // }
                

            // else  this.context.history.push('/tutorials/sbs/welcome');
            
            //----------- end --------- old setup after login session from cookie



            
            
            // 

        }
       
        else { this.setState({loading:false,error:true})}
    }

    render() { 
        const {classes} = this.props;
        return ( 
        
            <div id="Login_Main_Div">
            {this.state.loading==true?
                <SemipolarLoading size={"large"} color={'#b4ec51'}/>
            :
                <div>
                    <div  id="Login_Content1_Wrapper">
                        <div id="Login_Heading1_Div">
                            Hip & <span style={{color:'#b4ec51',fontWeight:'bold'}}> Knee </span> <br/>
                            Step by Step
                            <div id="Home_Neon_Line"></div>
                        </div>
                        <div className="Login_Box1_Div">
                            <div className="Login_Box1_Div_Content1"> User Id: </div>
                            <div className="Login_Box1_Div_Content2">
                                <TextField  InputProps={{ classes: { input: classes.textfield} }} id="userid" className={classes.textfield} onChange={this.handleChange} style={{fontSize:'30px !important'}} variant="outlined" />
                            </div>
                        </div>
                        <div className="Login_Box1_Div">
                            <div className="Login_Box1_Div_Content1"> Password: </div>
                            <div className="Login_Box1_Div_Content2">
                                <TextField  InputProps={{ classes: { input: classes.textfield } }} type="password" id="password" className={classes.textfield} onChange={this.handleChange} style={{fontSize:'30px !important'}} variant="outlined" />
                            </div>
                        </div>

                        {this.state.error==true?<div style={{marginTop:'20px',color:'red'}}> wrong email or password </div>:null}

                        <div id="Login_Button_Div">
                            <Button id="Login_Button" type="submit" variant="contained" onClick={this.handleLogin}> Login </Button>
                        </div>
                    </div>
                    <div  id="Login_Content2_Wrapper">
                        <img src={Bone1Image} alt="SBS" id="Login_Image_Bone"/> 
                        <div id="Login_Content2_Wrapper_Text" >
                            The right care <br/>
                            at the right time
                        </div>  
                    </div>
                </div>
            }


            </div>
         );
    }
}

Login.contextType=MyContext;
export default withStyles(style)(Login);