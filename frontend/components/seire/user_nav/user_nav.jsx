import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserNav extends React.Component {
    constructor(props) {
        super(props);

        this.handleRouteLink = this.handleRouteLink.bind(this);
        this.handleWorkoutLink = this.handleWorkoutLink.bind(this);
    }

    handleRouteLink(routesFlag) {
        if (routesFlag) {return <Link to='/routes' className="create-route-link">Create a Route</Link>}
    }

    handleWorkoutLink(workoutFlag) {
        if (workoutFlag) {return <Link to='/workouts' className="create-workout-link">Track a Workout</Link>}
    }

    render() {
        let navLink = "";
        let navLinkMessage = "";

        let routesFlag = false;
        let workoutFlag = false;

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

        switch (this.props.location.pathname) {
            case "/dashboard":
                routesFlag = true;
                workoutFlag = true;
                break;
            case "/routes": 
                routesFlag = false;
                workoutFlag = true;
                break;
            case "/workouts":
                routesFlag = true;
                workoutFlag = false;
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
                    {this.handleRouteLink(routesFlag)}
                    {this.handleWorkoutLink(workoutFlag)}
                    <div id='nav-bar-button'>
                        <button className="header-button-logout" onClick={this.props.logout}>Log Out</button>
                    </div>
                </nav>
            </header>
            
        )
    }
}

export default withRouter(UserNav);