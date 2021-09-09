import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';

const Routes=()=>{
    return(
        <Switch>
            <Route exact path="/" component={LandingPage} />
        </Switch>
    )
}
export default Routes;