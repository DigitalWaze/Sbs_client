import React, { Component } from 'react';

class ProGate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>

            <Button onClick={this.props.handleYesClick} variant="contained"> Yes </Button>
            <Button onClick={this.props.handleNoClick} variant="contained"> No </Button>

            <Button onClick={this.props.handleBackClick} variant="contained"> Back  </Button>

        </div> );
    }
}
 
export default ProGate;