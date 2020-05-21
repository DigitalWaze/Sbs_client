
import React, { Component } from 'react';
import MyContext from '../../helper/themeContext';
import GetData from '../../Fetch/getData1';

class Pdf extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount = () =>
    {
        let req={
            visitor_id:this.context.state.report_id
        }
        GetData(this.context.baseUrl+'/api/v1/download/pdf',200,req,this.context.state.token,this.setMe)
        // Get  (this.context.baseUrl+'/api/v1/download/pdf',token,callback)
    
    }

    setMe= (response) =>
    {
        console.log(response)
    }
    render() { 
        return ( <div>

        </div> );
    }
}
 
Pdf.contextType=MyContext;
export default Pdf;