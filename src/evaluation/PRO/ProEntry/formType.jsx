import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import './forms.css';

import MyContext from '../../../helper/themeContext';


class FormType extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleClick = () =>
    {
        this.context.history.push('./patient-profile')
    }
    render() { 
        return ( 
        
        <div id="Evaluaion_Forms_Main_Div">
            <div  id="Evaluaion_Forms_Content1_Wrapper">
                <div id="Evaluaion_Forms_Heading1_Div">
                    PRO Entry
                </div>
                <div id="Evaluaion_Forms_Box1_Div">

                    <div className="Evaluaion_Forms_Box1_Content1">
                        <img className="Evaluaion_Forms_Box1_Content1_Image" src="https://assets.website-files.com/5d8d4f718f129fc077e4b98d/5d9e0d14916a658e42a03643_Asset%202doc.png" width="20px" alt=""/>
                    </div>
                   
                    <div  className="Evaluaion_Forms_Box1_Content2">
                        <Button className="Evaluaion_Forms_Box_Button"  variant="contained" onClick={()=>this.props.history.push('./manual-form')}> KOOS Entry </Button>
                    </div>
                
                    <div className="Evaluaion_Forms_Box1_Content1">
                        <img className="Evaluaion_Forms_Box1_Content1_Image" src="https://assets.website-files.com/5d8d4f718f129fc077e4b98d/5d9e0d14916a658e42a03643_Asset%202doc.png" width="20px" alt=""/>
                    </div>
                    <div  className="Evaluaion_Forms_Box1_Content2">
                        <div className="Evaluaion_Forms_Box_DisbaleText"> KOOS Upload</div>
                    </div>
                </div>
                       
                            
                                     


                    
                {/* {this.context.state.Pro===true ?
                    <div id="Evaluaion_Forms_Next_Button_Div">
                        <Button id="Evaluaion_Forms_Next_Button" variant="contained" onClick={this.handleClick} > Next </Button>
                    </div>
                :   null
                } */}
                
            </div>
        </div> );
    }
}
FormType.contextType=MyContext;
export default FormType;