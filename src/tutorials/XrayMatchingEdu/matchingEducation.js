import React, { Component } from 'react';
import Welcome from './welcome';
import { Route, Router,Redirect  } from "react-router-dom";
import MyContext from '../../helper/themeContext';
import MatchingVideo from './matchingVideo'
import LGS from './LGS';
import MatchingTutorial from './matchingTutorial/matchingTutorial';

class MatchingEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router history={this.context.history}>
                <Route  exact path="/tutorials/matching-education/"  render={() => (<Redirect to="./matching-education/welcome" />)} />
                <Route  exact path="/tutorials/matching-education/welcome" component={Welcome} />
                <Route  exact path="/tutorials/matching-education/video" component={MatchingVideo} />
                <Route  exact path="/tutorials/matching-education/lets-get-started" component={LGS} />
                <Route  exact path="/tutorials/matching-education/matching-tutorial" component={MatchingTutorial} />


            </Router>


         );
    }
}

MatchingEducation.contextType=MyContext;
export default MatchingEducation;