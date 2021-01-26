import { Button } from '@material-ui/core';
import React, { Component } from 'react';

class UploadType extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Button variant ="contained" onClick={this.props.handleTypeOneClick}>  One </Button>
            <Button variant ="contained" onClick={this.props.handleTypeTwoClick}>  Two </Button>
            <Button variant ="contained" onClick={this.props.handleTypeThreeClick}>  Three </Button>
            <Button variant ="contained" onClick={this.props.handleTypeFourClick}>  Four </Button>
        </div> );
    }
}
 
export default UploadType;