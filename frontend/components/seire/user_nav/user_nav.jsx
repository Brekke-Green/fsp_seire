import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserNav extends React.Component {
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
        return (
            <header id="app-header-user">
                <nav className='nav-bar-container'>
                    <Link to='/' className="logo-link">
                    <h1>SEIRE</h1>
                    </Link>
                    <Link to='/routes' className="create-route-link">Create a Route</Link>
                    <div id='nav-bar-button'>
                        <button className="header-button-logout" onClick={this.props.logout}>Log Out</button>
                    </div>
                </nav>
            </header>
            
        )
    }
}

export default withRouter(UserNav);