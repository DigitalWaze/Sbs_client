import React, { Component } from "react";
import { Typography, Paper, TextField, Grid, Button } from "@material-ui/core";
import "./EditProfile.css";

export default class EditProfile extends Component {
  render() {
    return (
      <div id="EditProfile_Main_Div">
        <Grid xs={12} sm={12} md={6} lg={6} style={{ backgroundColor: "transparent" }} id="EditProfile_Content_Div">
          <Typography variant="h4" className="EditProfile_Heading">
            EDIT PROFILE
          </Typography>
          <div className="EditProfile_Email_Div">
            <div className="EditProfile_Email_Text">
              <Typography variant="h5" className="EditProfile_Input_Texts">
                Email:
              </Typography>
            </div>
            <div className="EditProfile_Email_Input_Div">
              <TextField id="standard-basic" fullWidth />
            </div>
          </div>
          <div className="EditProfile_Organization_Div">
            <div className="EditProfile_Organization_Text">
              <Typography variant="h5" className="EditProfile_Input_Texts">
                Organization:
              </Typography>
            </div>
            <div className="EditProfile_Organization_Input_Div">
              <TextField id="standard-basic" fullWidth />
            </div>
          </div>
          <div className="EditProfile_UserType_Div">
            <div className="EditProfile_UserType_Text">
              <Typography variant="h5" className="EditProfile_Input_Texts" style={{ minWidth: 112 }}>
                User Type:
              </Typography>
            </div>
            <div className="EditProfile_UserType_Input_Div">
              <TextField id="standard-basic" fullWidth />
            </div>
          </div>
          <Button id="Login_Button">UPDATE</Button>
        </Grid>
      </div>
    );
  }
}
