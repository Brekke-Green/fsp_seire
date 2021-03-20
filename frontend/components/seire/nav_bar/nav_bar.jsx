import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { ProtectedRoute } from '../../../util/route_util';
import UserNavContainer from '../user_nav/user_nav_container';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let navLink = "";
        let navLinkMessage = "";

        switch (this.props.location.pathname) {
            case "/":
                navLink = '/login';
                navLinkMessage = 'Log In';
                break;
            case "/register":
                navLink = '/login';
                navLinkMessage = 'Log In';
                break;
            case "/login":
                navLink = '/register'
                navLinkMessage = 'Sign Up'
                break;
            default:
                break;
        }
        return (this.props.currentUser) ? 
        (
            <Redirect to="/dashboard"/>
        ): (
            <div id='nav-bar-button'>
                <ProtectedRoute exact path='/dashboard' component={UserNavContainer} />
                <Link to={navLink}>{navLinkMessage}</Link>
            </div>
        )
    }
}

export default withRouter(NavBar);