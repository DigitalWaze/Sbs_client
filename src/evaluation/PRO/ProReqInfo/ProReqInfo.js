import React, { Component } from 'react';

class ProReqInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>

        <Button onClick={()=>this.context.history.push('/home')} variant="contained"> Save </Button>
        <Button onClick={()=>this.context.history.push('./form-type')} variant="contained"> Return  </Button>
        <Button onClick={this.props.handleBackClick} variant="contained"> Back </Button>

        </div> 
         );
    }
}
 
export default ProReqInfo;