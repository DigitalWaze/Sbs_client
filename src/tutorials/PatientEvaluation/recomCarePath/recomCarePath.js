import React, { Component } from 'react';

import MyContext from '../helper/themeContext';
import { Route, Router } from 'react-router-dom';
import WelcomeRecom from './page1';
import OverallCare from './page2';

class RecomCarePath extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        
        <div id="RecomCarePath_Main_Div">
            <Router history={this.context.history}>

                <Route path="/recommended-care-pathway/welcome" component={WelcomeRecom} />  
                <Route path="/recommended-care-pathway/overall-care-pathway" component={OverallCare} /> 

            </Router>



        </div>  );
    }
}

RecomCarePath.contextType=MyContext;
export default RecomCarePath;






