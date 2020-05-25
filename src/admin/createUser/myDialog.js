import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GetData from '../../Fetch/getData';
import { SemipolarLoading } from 'react-loadingg';
import MyContext from '../../helper/themeContext';


class MyDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {organization:'',loading:false }
    }

    handleCreate = () =>
    {
      if(this.state.organization==""||this.state.organization==" "||this.state.organization==null)
      {
        this.setState({error:true,errorValue:'Please enter organization name.'})
        return;
      }

      else if(this.state.organization.length<3)
      {
        this.setState({error:true,errorValue:'Organization name must be greater than 3 letters.'})
        return;
      }

      this.setState({loading:true});
      let req={
        name:this.state.organization
      }
      GetData(this.context.baseUrl+'/api/v1/organization/create',201,req,this.context.state.token,this.setMe)
    }

    setMe= (response)=>
    {
      console.log(response)
      this.setState({loading:false})
      if(response.id)
      {
        this.setState({loading:false,organization:''})
        this.props.handleClose();
        alert('Organization Successfully Created')
      }

      else if(response.message)
      {
        this.setState({loading:false,error:true,errorValue:response.message})
      }
      else{
        alert('Unexpected error occured. Please try again later.')
      }
    }

    handleChange = (e) =>
    {
      console.log(e.target)
      this.setState({[e.target.id]:e.target.value,error:null,errorValue:''})
    }

    render() { 
        return ( 
        
        <Dialog open={this.props.open}  aria-labelledby="form-dialog-title" style={{minHeight:'600px',minWidth:'600px'}}>
        <DialogTitle id="form-dialog-title">Add Organization</DialogTitle>

        {this.state.loading==true?
          <div style={{minHeight:'200px',minWidth:'500px'}}>
            <SemipolarLoading size={"large"} color={'#b4ec51'}/>
          </div>
        :
          <span>
            <DialogContent>
              <DialogContentText>
                To add new organization, please enter the organization name.
              </DialogContentText>

              <TextField
                autoFocus
                margin="dense"
                id="organization"
                label="Organization Name"
                type="text"
                value={this.state.organization}
                fullWidth
                onChange={this.handleChange}
              />
              <br/>
            {
              this.state.error!=null?
              <div> 
                <span className="Evaluaion_PatientDemoGraphics_Form_Span3">
                    <span style={{display:'inline-block',color:'red'}}>Error<sup>*</sup> : {this.state.errorValue} </span>
                  </span>
                </div>
              :null
            }
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleCreate} color="primary">
                Create
              </Button>
            </DialogActions>
          </span>
        }
        </Dialog>
      );
    }
}

MyDialog.contextType=MyContext;
export default MyDialog;