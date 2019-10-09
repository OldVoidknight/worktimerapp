import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import Timer from './Timer';
import Report from './Report';

function Approute(){
    return (
        <Switch>
            <Route exact path='/' component={LoginForm}/>
            <Route path ='/dashboard' component={Dashboard}/>
            <Route path ='/timer/:id' component={Timer}/>
            <Route path ='/report' component={Report}/>
        </Switch>
    )
}


export default Approute;