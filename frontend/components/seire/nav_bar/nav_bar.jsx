import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let navLink = "";
        let navLinkMessage = "";
        debugger

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
        return (
            <div>
                <Link to={navLink}>{navLinkMessage}</Link>
            </div>
        )
    }
}

export default withRouter(NavBar);