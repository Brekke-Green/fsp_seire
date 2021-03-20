import React from "react";
import { Link, Switch, Route } from 'react-router-dom'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import UserAuthContainer from './seire/user_auth_container';
import LogInFormContainer from './seire/auth/login_form_container';
import RegisterFormContainer from './seire/auth/register_form_container'
import NavBarContainer from './seire/nav_bar/nav_bar_container';
import UserNavContainer from './seire/user_nav/user_nav_container';




const App = () => (
    <div>
        <header id="app-header">
            <nav className='nav-bar-container'>
                <Link to='/' className="logo-link">
                    <h1>SEIRE</h1>
                </Link>
                <Switch>
                    <AuthRoute exact path="/register" component={NavBarContainer} />
                    <AuthRoute exact path="/login" component={NavBarContainer} />
                    <AuthRoute exact path="/" component={NavBarContainer} />
                </Switch>
                <ProtectedRoute exact path='/dashboard' component={UserNavContainer} />
            </nav>
        </header>
        <Switch>
            <AuthRoute exact path="/register" component={RegisterFormContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
        </Switch>


    </div>
);

export default App;