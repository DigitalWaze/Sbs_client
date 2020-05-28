import React, { Component } from 'react';
import Welcome from './welcome';
import { Route, Router,Redirect  } from "react-router-dom";
import MyContext from '../../helper/themeContext';
// import MatchingVideo from './matchingVideo'
// import MatchingVideo2 from './matchingVideo2'

// import LGS from './LGS';
import MatchingTutorial from './matchingTutorial/matchingTutorial';
import Congratulations from './congratulations';

class XrayTraining extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router history={this.context.history}>
                <Route  exact path="/tutorials/matching-training/"  render={() => (<Redirect to="./matching-education/welcome" />)} />
                <Route  exact path="/tutorials/matching-training/welcome" component={Welcome} />
                <Route  exact path="/tutorials/matching-training/matching-tutorial" component={MatchingTutorial} />
                <Route  exact path="/tutorials/matching-training/congratulations" component={Congratulations} />

                {/* <Route  exact path="/tutorials/matching-education/video" component={MatchingVideo} />
                <Route  exact path="/tutorials/matching-education/lets-get-started" component={LGS} />
                <Route  exact path="/tutorials/matching-education/matching-tutorial" component={MatchingTutorial} />
                <Route  exact path="/tutorials/matching-education/video2" component={MatchingVideo2} /> */}


            </Router>


         );
    }
}

XrayTraining.contextType=MyContext;
export default XrayTraining;