import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';


import './createUser.css';
import MyContext from '../../helper/themeContext';
import MyDialog from './myDialog';
import SemipolarLoading from 'react-loadingg/lib/SemipolarLoading';
import GetData from '../../Fetch/getDataUniversal';
import GetData2 from '../../Fetch/getData';

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

const user_type=[{name:'admin',id:'2'},{name:'user',id:'3'}]


class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = { index:0 ,organizations:[],organization:null,userTypeId:2,email:'',password:'',error:null,password_error:'',email_error:''}
    }

    handleClickOne = () =>
    {
        this.setState({index:0})
    }

    handleModalOpen = () =>
    {
        this.setState({open:true})
    }

    handleModalClose = () =>
    {
        this.setState({open:false})
    }

    handleClickExisting = () =>
    {
        this.setState({loading:true});
        GetData(this.context.baseUrl+'/api/v1/organizations',200,this.context.state.token,this.setMe)
    }

    setMe = (response) =>
    {
        if(response.message)
        {
            alert('Error, Please try again');
        }
        else
        {
            let organizations=[];
            if(response.length>0)
            {
                
                response.forEach(element => {
                    organizations.push(element)
                });
            }
            this.setState({organizations,loading:false,index:1,organization:organizations[0].id});
        }
    }

    handleClickAdd = () =>
    {
        if(this.validate()===true)
        {
            let req={
                typeid:this.state.userTypeId,
                hospital_id:this.state.organization,
                email:this.state.email,
                password:this.state.password
            }
            this.setState({loading:true})

            GetData2(this.context.baseUrl+'/api/v1/user/create',201,req,this.context.state.token,this.setMeTwo)
            //api
        }
        
    }

    setMeTwo = (res) =>
    {
        console.log(res)
        // if(res.message=="User Created Successfully")
        // {
        //     alert(message)
        // }
        alert(res.message);
        
        this.setState({loading:false,email:'',password:'',error:null})
    }

    validate = () =>
    {
        if(this.state.email==="" || this.state.email===" ")
        {
            this.setState({email_error:'Empty',error:'Email Empty'});
            return false;
        }

        if ( !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) )
        {
            this.setState({email_error:'Badly Formatted',error:'Email Badly Formatted'});
            return false;
        }

        if(this.state.password==="" || this.state.password===" ")
        {
            this.setState({password_error:'Empty',error:'Password Empty'});
            return false;
        }
        if(this.state.password.length<6)
        {
            this.setState({password_error:'Short Password',error:'Password must be greater than 6 letters'});
            return false;
        }
        if(this.state.userTypeId==="" || this.state.userTypeId===" " || this.state.userTypeId===null)
        {
            this.setState({usertype_error:'User type null',error:'Please select a user type'});
            return false;
        }
        if(this.state.organization==="" || this.state.organization===" " || this.state.organization===null)
        {
            this.setState({usertype_error:'Organization type null',error:'Please select an organization type'});
            return false;
        }

        return true;
    }


    handleChange = (e) =>
    {   
        console.log('key',e.target.id)
        console.log('value',e.target.value)
        this.setState({[e.target.id]:e.target.value,error:null})
    }
   
    render() { 
        const {classes} = this.props;

        return ( 
        
            <div id="Admin_CreateUser_Main_Div">
                <div  id="Admin_CreateUser_Content1_Wrapper">
                    <div style={{marginBottom:this.state.loading===true?'480px':''}}id="Admin_CreateUser_Heading1_Div">
                        Create User
                    </div>

                    {this.state.loading===true?
                        <SemipolarLoading size={"large"} color={'#b4ec51'}/>
                    :
                        <SwipeableViews index={this.state.index}>
                            <div className="Admin_Swipe_Div">
                                <div className="Admin_CreateUser_Button_Div">
                                    <Button className="Admin_CreateUser_Button"  variant="contained" onClick={this.handleClickExisting}> Existing Organization </Button>
                                </div>
                                <div className="Admin_CreateUser_Button_Div">
                                    <Button className="Admin_CreateUser_Button" style={{display:'block',alignSelf:'center'}} variant="contained" onClick={this.handleModalOpen}> New Organization </Button>
                                </div>
                            </div>


                            <div className="Admin_Swipe_Div">

                                <div className="Admin_Box1_Div">
                                    <div className="Admin_Box1_Div_Content1"> User Id: </div>
                                    <div className="Admin_Box1_Div_Content2">
                                        <TextField  InputProps={{ classes: { input: classes.textfield } }} value={this.state.email} id="email" className={classes.textfield} onChange={this.handleChange} style={{fontSize:'30px !important'}} variant="outlined" />
                                    </div>
                                </div>

                                <div className="Admin_Box1_Div">
                                    <div className="Admin_Box1_Div_Content1"> User Type: </div>
                                    <div className="Admin_Box1_Div_Content2">

                                        {/* <TextField  InputProps={{ classes: { input: classes.textfield} }} id="organization" className={classes.textfield} onChange={this.handleChange} style={{fontSize:'30px !important'}} variant="outlined" /> */}
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <Select
                                            native
                                            style={{height:'60px', color:'white', fontSize:'30px',minWidth:'350px',width:'auto',}}
                                            id="userTypeId"
                                            // value={this.state.organization}
                                            onChange={this.handleChange}
                                            >
                                                {user_type.map((user,id)=>
                                                    <option style={{ background: 'rgba(0, 0, 0, 0.7)'}} value={user.id}>{user.name}</option>
                                                )}
                                                
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>

                                

                                <div className="Admin_Box1_Div">
                                    <div className="Admin_Box1_Div_Content1"> Password: </div>
                                    <div className="Admin_Box1_Div_Content2">
                                        <TextField  InputProps={{ classes: { input: classes.textfield} }} id="password" value={this.state.password} className={classes.textfield} onChange={this.handleChange} style={{fontSize:'30px !important'}} variant="outlined" />
                                    </div>
                                </div>

                                <div className="Admin_Box1_Div">
                                    <div className="Admin_Box1_Div_Content1"> Organization: </div>
                                    <div className="Admin_Box1_Div_Content2">

                                        {/* <TextField  InputProps={{ classes: { input: classes.textfield} }} id="organization" className={classes.textfield} onChange={this.handleChange} style={{fontSize:'30px !important'}} variant="outlined" /> */}
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <Select
                                            native
                                            style={{height:'60px', color:'white', fontSize:'30px',minWidth:'350px',width:'auto',}}
                                            id="organization"
                                            // value={this.state.organization}
                                            onChange={this.handleChange}
                                            >
                                                {this.state.organizations.map((organization,id)=><option key={id} style={{ background: 'rgba(0, 0, 0, 0.7)'}} value={organization.id}>{organization.name}</option>)}
                                                
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                {this.state.error!=null &&
                                    <span className="Evaluaion_PatientDemoGraphics_Form_Span3">
                                        <span style={{display:'inline-block',width:'800px',color:'red'}}>Error<sup>*</sup> : {this.state.error} </span>
                                    </span>
                                }
                                <div className="Admin_CreateUser_Back_Button_Div">
                                    <Button className="Admin_CreateUser_Back_Button" variant="contained" onClick={this.handleClickOne}> Back </Button>
                                </div>
                                <div className="Admin_CreateUser_Back_Button_Div">
                                    <Button className="Admin_CreateUser_Add_Button" variant="contained" onClick={this.handleClickAdd}> Add User </Button>
                                </div>
                                
                            </div>
                        </SwipeableViews>
                    }

                    <MyDialog open={this.state.open} handleClose={this.handleModalClose}/>
                </div>


            </div>
         );
    }
}

CreateUser.contextType=MyContext;
export default withStyles(style)(CreateUser);