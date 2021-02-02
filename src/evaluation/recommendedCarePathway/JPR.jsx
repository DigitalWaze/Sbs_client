import { Button } from '@material-ui/core';
import React, { Component } from 'react';
class JPR extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
                <Button
                    onClick={this.props.handleBackClick}>
                        BACK
                </Button>
                <Button
                    onClick={this.props.handleNextClick}>
                        Next
                </Button>
        </div> );
    }
}
 
export default JPR;