import { Button } from '@material-ui/core';
import React, { Component } from 'react';

class UploadTypeThree extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Button variant ="contained" onClick={this.props.handleNextClick}>  Next </Button>
        </div> );
    }
}
 
export default UploadTypeThree;