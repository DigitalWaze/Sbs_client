import React, { Component } from 'react';
import Welcome from './welcome';
import { Route, Router } from "react-router-dom";
import MyContext from '../../helper/themeContext';


class MatchingEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router history={this.context.history}>
                <Route  exact path="/tutorials/matching-education/" component={Welcome} />
                <Route  exact path="/tutorials/matching-education/welcome" component={Welcome} />
            </Router>


         );
    }
}

MatchingEducation.contextType=MyContext;
export default MatchingEducation;