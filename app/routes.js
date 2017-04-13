import React from 'react';
import ReactDOM from 'react-dom';
import path from 'path';
import { createHistory } from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import _Root from '_Root';
import JobInformation from './components/jobsinformationpage/JobInformation';
import Login from 'login/Login';
import Signup from 'signup/Signup';
import Splash from 'splashpage/splash';
import FooterComponent from 'Footer';
import HeaderComponent from 'Header';
import About from 'about-us/about-us';
import Services from 'services/services';

const routes = (
  <div>
    <Route exact path='/' component={Splash}/>
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    <Route path='/dashboard' component={_Root} />
    <Route path='/job-information' component={JobInformation} />
    <Route path='/services' component={Services} />
    <Route path='/about-us' component={About} />
  </div>
);

export default routes;
