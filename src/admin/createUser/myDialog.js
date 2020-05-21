import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class MyDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        
        <Dialog open={this.props.open}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Organization</DialogTitle>
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
            fullWidth
          />
          <br/>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.props.handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog> );
    }
}
 
export default MyDialog;