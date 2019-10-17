import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Weather from '../Pages/Weather';
import Home from '../Pages/Home';

class Routes extends Component {
    render() { 
        return (  <div>
            <Switch>
            {/* Will go straight to Home component */}
                <Route exact path= '/' component={Home}/>
                <Route exact path='/Home' component={Home}/>
                <Route exact path='/Weather' component={Weather}/>
            </Switch>
            </div> );
    }
}
export default Routes;