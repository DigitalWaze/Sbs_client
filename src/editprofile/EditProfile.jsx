import React, { Component } from "react";
import { Typography, Paper, TextField, Grid, Button } from "@material-ui/core";
import MyContext from "../helper/themeContext";

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import Rodal from 'rodal';
 
// include styles
import 'rodal/lib/rodal.css';
import "./EditProfile.css";
import PostData from "../Fetch/postDataUniversal";


const style = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
});



class EditProfile extends Component {

  constructor(props)
  {
    super(props);
    this.state = { visible:false,passwordUpdated:false,oldpassword:"",newpassword:"",cpassword:"",loader:false }
  }

  handleDialogOpen = () =>
  {
    this.setState({visible:true})
  }

  handleDialogClose = () =>
  {
    this.setState({visible:false})
  }

  updateFormValue = (e) =>
  {
    this.setState({[e.target.id]:e.target.value,error:false,errorMessage:""})
  }

  validateForm = () =>
  {
    if(this.state.newpassword.length < 8)
    {
      this.setState({error:true,errorMessage:"New Password must be atleast 8 character long"})
      return;
    }

    else if(this.state.oldpassword.length < 3)
    {
      this.setState({error:true,errorMessage:"Invalid Password"})
      return;

    }

    else if(this.state.oldpassword === this.state.newpassword)
    {
      this.setState({error:true,errorMessage:"Cannot save same password!"})
      return;
    }

    else if(this.state.newpassword !== this.state.cpassword)
    {
      this.setState({error:true,errorMessage:"Confirm Password MissMatch!"})
      return;

    }

    else this.handleUpdatePassword();

    return;
  }

  handleUpdatePassword = () =>
  {
    this.setState({loader:true })
    let req={oldpassword:this.state.oldpassword,newpassword:this.state.newpassword};
    PostData(this.context.baseUrl+'/api/v1/user/update-profile',200,req,this.context.state.token,this.setMe)
  }

  setMe = (response) =>
  {
    if(response.ResponseCode==="Success")
    {
      this.setState({passwordUpdated:true,oldpassword:"",newpassword:"",cpassword:"",visible:false,loader:false})
      let global=this;
      setTimeout(()=>{global.setState({passwordUpdated:false})},3000)
    }

    else
    {
      if(response.Error==="Invalid Password")
      {
        this.setState({error:true,errorMessage:"Invalid Password",loader:false})
        return;
      }
      else this.setState({error:true,errorMessage:"Unable to set Password",loader:false})
    }
  } 

  render() {
    const {classes} = this.props;
    return (
      <div id="EditProfile_Main_Div">

      <Backdrop className={classes.backdrop} open={this.state.loader}>
        <CircularProgress color="inherit" />
      </Backdrop>

        <Grid xs={12} sm={12} md={6} lg={6} style={{ backgroundColor: "transparent" }} id="EditProfile_Content_Div">
          <Typography variant="h4" className="EditProfile_Heading">
            EDIT PROFILE
          </Typography>
          <div className="EditProfile_Email_Div">
            <div className="EditProfile_Email_Text" style={{marginRight:'75px'}}>
              <Typography variant="h5" className="EditProfile_Input_Texts">
                Email:
              </Typography>
            </div>
            <div className="EditProfile_Email_Input_Div" >
              <TextField id="standard-basic" fullWidth value={this.context.state.user_email} disabled={true}/>
            </div>
          </div>
          <div className="EditProfile_Organization_Div">
            <div className="EditProfile_Organization_Text">
              <Typography variant="h5" className="EditProfile_Input_Texts" >
                Organization:
              </Typography>
            </div>
            <div className="EditProfile_Organization_Input_Div" >
              <TextField id="standard-basic" fullWidth value={this.context.state.organization? this.context.state.organization.toString()!="null" ? this.context.state.organization : "" : "" } disabled={true}/>
            </div>
          </div>
          {/* <div className="EditProfile_UserType_Div">
            <div className="EditProfile_UserType_Text">
              <Typography variant="h5" className="EditProfile_Input_Texts" style={{ minWidth: 112 }}>
                User Type:
              </Typography>
            </div>
            <div className="EditProfile_UserType_Input_Div">
              <TextField id="standard-basic" fullWidth />
            </div>
          </div> */}
          <Button id="Change_Password_Button" onClick={this.handleDialogOpen}>Update Password</Button>

          {
            this.state.passwordUpdated===true?
              <div id="password-update-success-message">
                Password Updated Successfully!
              </div>
            :null
          }
        </Grid>

        <Rodal visible={this.state.visible} onClose={this.handleDialogClose} height={350} width={450} customStyles={{background:'rgb(0,0,0,0.7)'}} id="EditProfile_Rodal_Wrapper">
          <div>

            <div id="EditProfile_Rodal_Heading_Div">
              Update Password
            </div>

            <div className="EditProfile_Rodal_Row_Div">
              <div className="EditProfile_OldPassword_Text" >
                <Typography variant="h5" className="EditProfile_Input_Texts">
                  Old Password:
                </Typography>
              </div>
              <div className="EditProfile_OldPassword_Input_Div" >
                <TextField id="oldpassword" inputProps={{ style:{color:"white"} }} fullWidth value={this.state.oldpassword} onChange={this.updateFormValue}/>
              </div>
            </div>

            <div className="EditProfile_Rodal_Row_Div">
              <div className="EditProfile_OldPassword_Text">
                <Typography variant="h5" className="EditProfile_Input_Texts" >
                  New Password:
                </Typography>
              </div>
              <div className="EditProfile_OldPassword_Input_Div" >
                <TextField id="newpassword" inputProps={{ style:{color:"white"} }}  type="password" fullWidth value={this.state.newpassword} onChange={this.updateFormValue} />
              </div>
            </div>

            <div className="EditProfile_Rodal_Row_Div">
              <div className="EditProfile_OldPassword_Text">
                <Typography variant="h5" type="password" className="EditProfile_Input_Texts" >
                  Confirm Password:
                </Typography>
              </div>
              <div className="EditProfile_OldPassword_Input_Div" >
                <TextField id="cpassword"  type="password" inputProps={{ style:{color:"white"} }} fullWidth value={this.state.cpassword} onChange={this.updateFormValue} />
              </div>
            </div>

            {
            this.state.error===true?
              <div id="password-update-error-message">
                {this.state.errorMessage}
              </div>
            :null
            }

            <Button id="Change_Password_Button" onClick={this.validateForm}>Update</Button>


            

          </div>


        </Rodal>
        

      </div>
    );
  }
}

EditProfile.contextType=MyContext;
export default withStyles(style)(EditProfile);
