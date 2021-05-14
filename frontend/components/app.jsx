import React from "react";
import { Link, Switch, Route } from 'react-router-dom'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// import UserAuthContainer from './seire/user_auth_container';
import SplashContainer from './seire/splash/splash_container'
import LogInFormContainer from './seire/auth/login_form_container';
import RegisterFormContainer from './seire/auth/register_form_container'
import NavBarContainer from './seire/nav_bar/nav_bar_container';
import UserNavContainer from './seire/user_nav/user_nav_container';
import ProfileContainer from './seire/profile/profile_container';
import WorkoutFeedContainer from './seire/workout_feed/workout_container';
import CareerInfoComponent from './seire/career_info.jsx';
import Footer from './seire/footer/footer';
import DashboardContainer from "./seire/dashboard/dashboard_container";
import CreateRouteMap from "./seire/map/create_route_map_container";

const App = () => (
    <div className="media">
        <Switch>
            <AuthRoute exact path="/register" component={NavBarContainer} />
            <AuthRoute exact path="/login" component={NavBarContainer} />
            <AuthRoute exact path="/" component={NavBarContainer} />
            <ProtectedRoute exact path='/dashboard' component={UserNavContainer} />
        </Switch>
        
        {/* <div className="main-content"> */}
            <Switch>
                <AuthRoute exact path="/register" component={RegisterFormContainer} />
                <AuthRoute exact path="/login" component={LogInFormContainer} />
                <Route exact path="/" component={SplashContainer} />
            </Switch>

            <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
            <ProtectedRoute exact path="/routes" component={CreateRouteMap} />

            {/* <ProtectedRoute exact path="/dashboard" component={ProfileContainer} />
            <ProtectedRoute exact path="/dashboard" component={WorkoutFeedContainer} />
            <ProtectedRoute exact path="/dashboard" component={CareerInfoComponent} /> */}
            {/* <ProtectedRoute exact path="/route" component={CreateRoute} /> */}
        {/* </div> */}
        <Route exact path="/" component={Footer} />
    </div>
);

export default App;