import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import Timer from './Timer';
import Report from './Report';
import API from './API';


function App(props) {
  window.addEventListener('DOMContentLoaded',()=>{

    // if (!!localStorage.getItem('loggedinStatus')) {
    //   props.history.push('/dashboard')
    // } else {
    //   props.history.push('/')
    // }

    // let form = new FormData()
    // form.append('s','')
    // form.append('m',document.cookie.split('=')[1])
    
    // if (document.cookie.split('=')[1] === undefined) {
    //   fetch(API.variables.api,{method:'post', body:form})
    //   .then(res=>res.json())
    //   .then(rd=>{
    //           console.log(rd)
    //           document.cookie="_appcookie="+rd.PHPSESSID
              
    //       },error=>{
    //           console.log(error)
    //        });
    // } else{

    // }
  }

)
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <Route path ='/dashboard' component={Dashboard}/>
          <Route path ='/timer' component={Timer}/>
          <Route path ='/report' component={Report}/>
        </Switch>
    </div>
  );
}

export default App;
